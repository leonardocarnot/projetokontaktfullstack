import logo from "../../assets/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormContainer } from "./styles";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

function PageRegister() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    telephone: yup
      .number()
      .min(10, "Mínimo de 10 dígitos")
      .required("Campo Obrigatório"),
    name: yup
      .string()
      .min(10, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((response)=>{
        return history.push("/");
      })
  };

  return (
    <>
      <Container>
        <FormContainer>
          <img src={logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input
              name="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {<span className="error">{errors.email?.message}</span>}

            <input
              name="password"
              placeholder="Digite uma senha"
              type="password"
              {...register("password")}
            />
            {<span className="error">{errors.password?.message}</span>}

            <input
              name="name"
              placeholder="Digite seu nome completo"
              {...register("name")}
            />
            {<span className="error">{errors.name?.message}</span>}

            <input
              name="telephone"
              placeholder="Digite seu telefone"
              {...register("telephone")}
            />
            {<span className="error">{errors.telephone?.message}</span>}

            <button type="submit">Cadastrar</button>
          </form>
          <div className="cadastro">
            <span> Já tem uma conta? </span>
            <Link to="/">Faça o login.</Link>
          </div>
        </FormContainer>
      </Container>
    </>
  );
}

export default PageRegister;
