import { Container, FormContainer } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai"
import api from "../../services/api";
import { useState } from "react";

function ModalUpdateContact({ handleCloseModalUpdate,contacts,setContacts,name, id, email, telephone }) {
    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo Obrigatório"),
        name: yup.string().required("Campo Obrigatório")
      });
    
    const [token] = useState(
        JSON.parse(localStorage.getItem("Kontakt@token")) || ""
      );
      
      function setNewContactList(data) {
        const newList = contacts.filter((item) => {
          return item.id !== id
        })
        setContacts([...newList, data]);
      }
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
    const onSubmitFunction = (data) => {
        api.patch(`/contacts/${id}`,data,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        .then((_)=>{
          handleCloseModalUpdate();
          setNewContactList(data)
        })
        .catch((error) =>{
          console.log(error)
        })
    }

    
    return (
    <Container>
      <FormContainer>
        <div className="headerModal">
        <img src={logo} alt="logo" />
        <button onClick={handleCloseModalUpdate}><AiOutlineClose/></button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            name="email"
            placeholder="Digite email do contato"
            {...register("email")}
            defaultValue={email}
          />
          {<span className="error">{errors.email?.message}</span>}

          <input
            name="name"
            placeholder="Digite nome do contato"
            {...register("name")}
            defaultValue={name}
          />
          {<span className="error">{errors.name?.message}</span>}

          <input
            name="telephone"
            placeholder="Digite telefone do contato"
            {...register("telephone")}
            defaultValue={telephone}
          />
          {<span className="error">{errors.telephone?.message}</span>}

          <button type="submit">Atualizar contato</button>
        </form>
      </FormContainer>
    </Container>
  );
}


export default ModalUpdateContact;
