import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import api from "../../services/api";
import { Container, Content } from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import Modal from "react-modal";
import ModalCreateContact from "../../components/ModalCreateContact/ModalCreateContact";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../components/ContactsPDF/ContactsPDF";

function Dashboard({ authenticated }) {
  const [contacts, setContacts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("Kontakt@token")) || ""
  );

  const [id] = useState(JSON.parse(localStorage.getItem("id")) || "");

  const loadContacts = () => {
    api
      .get(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => "Erro de conexão.");
  };

  useEffect(() => loadContacts(), []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const backLoginPage = () => {
    localStorage.clear();
    window.location.reload();
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  const exportToPdf = () => {
    ReactPDF.renderToStream(<MyDocument />);
  };

  return (
    <>
      <Container>
        <Content>
          <div className="navigation">
            <nav>
              <Link to="/dashboard">Meus contatos</Link>
              <Link to="/profile">
                <AiOutlineUser />
                Meu perfil
              </Link>
              <button onClick={backLoginPage}>Sair</button>
            </nav>
          </div>
          <div className="ApplicationBody">
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={handleCloseModal}
            >
              <ModalCreateContact
                handleCloseModal={handleCloseModal}
                contacts={contacts}
                setContacts={setContacts}
              />
            </Modal>

            <div className="headerBody">
              <h1>Contatos</h1>
              <div className="headerButtons">
                <button onClick={handleOpenModal}>Adicionar contatos</button>
                <PDFDownloadLink document={<MyDocument />} fileName="Contatos">
                  {({ loading }) =>
                    loading ? (
                      <button>Carregando Documento...</button>
                    ) : (
                      <button onClick={exportToPdf}>Exportar contatos</button>
                    )
                  }
                </PDFDownloadLink>
              </div>
            </div>
            {contacts &&
              contacts.map((contact, index) => {
                return (
                  <CardDashboard
                    key={index}
                    id={contact.id}
                    name={contact.name}
                    telephone={contact.telephone}
                    email={contact.email}
                    contacts={contacts}
                    setContacts={setContacts}
                  />
                );
              })}
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Dashboard;
