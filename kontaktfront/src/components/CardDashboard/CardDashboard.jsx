import { useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "react-modal";
import ModalUpdateContact from "../ModalUpdateContact/ModalUpdateContact";

function CardDashboard({name, id, email, telephone, contacts, setContacts }) {
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Kontakt@token")) || ""
  );

  const deleteTech = () => {
    api
      .delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        setContacts(
          contacts.filter((contact) => {
            return contact.id !== id;
          })
        )
      )
      .catch((err) => console.log(err));
  };

  function handleOpenModalUpdate() {
    setModalUpdateIsOpen(true);
  }

  function handleCloseModalUpdate() {
    setModalUpdateIsOpen(false);
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
      <Modal
              isOpen={modalUpdateIsOpen}
              style={customStyles}
              onRequestClose={handleCloseModalUpdate}
            >
              <ModalUpdateContact
                handleCloseModalUpdate={handleCloseModalUpdate}
                contacts={contacts}
                setContacts={setContacts}
                name={name}
                id={id}
                telephone={telephone}
                email={email}
              />
            </Modal>
        <div className="wholeCard">
          <p>{name}</p>
          <div className="cardInformation">
            <span>{email}</span>
            <span>{telephone}</span>
            <button onClick={handleOpenModalUpdate}>
              <AiFillEdit className="delete" />
            </button>
            <button onClick={deleteTech}>
              <AiFillDelete className="delete" />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CardDashboard;
