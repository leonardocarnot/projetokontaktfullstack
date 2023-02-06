import { Container, FormContainer } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai"
import api from "../../services/api";
import { useState } from "react";

function ModalUpdateProfile({ handleCloseModal,user,setUser}) {
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
        api.patch(`/users/${user.id}`,data,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        .then((_)=>{
          setUser({...user,...data})
          handleCloseModal();
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
        <button onClick={handleCloseModal}><AiOutlineClose/></button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            name="email"
            placeholder="Atualize o seu email"
            {...register("email")}
            defaultValue={user.email}
          />
          {<span className="error">{errors.email?.message}</span>}

          <input
            name="name"
            placeholder=" Atualize o campo nome"
            {...register("name")}
            defaultValue={user.name}
          />
          {<span className="error">{errors.name?.message}</span>}

          <input
            name="telephone"
            placeholder="Atualize seu contato"
            {...register("telephone")}
            defaultValue={user.telephone}
          />
          {<span className="error">{errors.telephone?.message}</span>}
          <button type="submit">Atualizar perfil</button>
        </form>
      </FormContainer>
    </Container>
  );
}


export default ModalUpdateProfile;
