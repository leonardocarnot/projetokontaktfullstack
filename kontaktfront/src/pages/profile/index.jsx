import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import { Container, Content } from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import Modal from "react-modal";
import ModalUpdateProfile from "../../components/ModalUpdateProfile/ModalUpdateProfile";
import ModalDeleteProfile from "../../components/ModalDeleteUser/ModalDeleteUser";

function PageProfile({ authenticated }) {
  const [user, setUser] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("Kontakt@token")) || ""
  );

  const [id] = useState(JSON.parse(localStorage.getItem("id")) || "");

  const loadUser = () => {
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(user)
      })
      .catch((err) => "Erro de conexão.");
  };

  useEffect(() => loadUser(), []);

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

  function handleOpenModalDelete(){
    setModalDeleteIsOpen(true)
  }

  function handleCloseModalDelete(){
    setModalDeleteIsOpen(false)
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
            <ModalUpdateProfile
              handleCloseModal={handleCloseModal}
              user={user}
              setUser={setUser}
            />
          </Modal>
          <Modal
            isOpen={modalDeleteIsOpen}
            style={customStyles}
            onRequestClose={handleCloseModalDelete}
          >
            <ModalDeleteProfile
              handleCloseModalDelete={handleCloseModalDelete}
              user={user}
            />
          </Modal>
            
            <div className="userProfile">
              <h2>Meu perfil</h2>  
              <span>Nome: {user.name}</span>
              <span>E-mail: {user.email}</span>
              <span>Telefone: {user.telephone}</span>
              <span>Conta criada em: {user.createdAt}</span>
              <div className="profileButtons">
                <button onClick={handleOpenModalDelete}>Deletar conta</button>
                <button onClick={handleOpenModal}>Editar perfil</button>
              </div>
              </div>
              </div>
        </Content>
      </Container>
    </>
  );
}

export default PageProfile;
