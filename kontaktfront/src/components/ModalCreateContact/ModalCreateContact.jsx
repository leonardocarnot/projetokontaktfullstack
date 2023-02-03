import { Container, FormContainer } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai"
import api from "../../services/api";
import { useState } from "react";

function ModalCreateContact({ handleCloseModal,contacts,setContacts }) {
    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo Obrigatório"),
        name: yup.string().required("Campo Obrigatório")
      });
    
    const [token] = useState(
        JSON.parse(localStorage.getItem("Kontakt@token")) || ""
      );
      
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
    const onSubmitFunction = (data) => {
        api
      .post(
        `/contacts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => setContacts([...contacts, response.data]))
      .then(() => handleCloseModal())
      .catch((err) => console.log(err));
      }
      

    
    return (
    <Container>
      <FormContainer>
        <div className="headerModal">
        <img src={logo} alt="logo" />
        <button onClick={handleCloseModal}><AiOutlineClose/></button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            name="email"
            placeholder="Digite email do contato"
            {...register("email")}
          />
          {<span className="error">{errors.email?.message}</span>}

          <input
            name="name"
            placeholder="Digite nome do contato"
            {...register("name")}
          />
          {<span className="error">{errors.name?.message}</span>}

          <input
            name="telephone"
            placeholder="Digite telefone do contato"
            {...register("telephone")}
          />
          {<span className="error">{errors.telephone?.message}</span>}

          <button type="submit">Adionar contato</button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default ModalCreateContact;
