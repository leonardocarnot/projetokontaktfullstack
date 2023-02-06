import { Container, FormContainer } from "./styles";
import api from "../../services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function ModalDeleteProfile({ handleCloseModalDelete, user }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("Kontakt@token")) || ""
  );

  const history = useHistory();

  const onClickFunction = () => {
    api
      .delete(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <FormContainer>
        <h4>Tem certeza que deseja excluir sua conta?</h4>
        <div>
          <button onClick={onClickFunction}>Sim</button>
          <button onClick={handleCloseModalDelete}>Não</button>
        </div>
      </FormContainer>
    </Container>
  );
}

export default ModalDeleteProfile;
