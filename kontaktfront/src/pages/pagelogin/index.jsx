import background from "../../assets/wallpaper.png";
import logo from "../../assets/logo.png";
import {
  BackgroundContainer,
  Container,
  Content,
  FormContainer,
} from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";

function PageLogin({authenticated , setAuthenticated}) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
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
      .post("/login", data)
      .then((response) => {
        const {token} = response.data
        const {userId} = response.data
        localStorage.setItem("Kontakt@token", JSON.stringify(token))
        localStorage.setItem("id", JSON.stringify(userId));
        setAuthenticated(true);

        return history.push("/dashboard");
      });
  };

  if(authenticated){
    return <Redirect to="/dashboard"/>;
  }

  return (
    <>
      <div>
        <Container>
          <Content>
            <BackgroundContainer>
              <img src={background} alt="Homepage background" />
            </BackgroundContainer>
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

                <button type="submit">Entrar</button>
              </form>
              <div className="cadastro">
                <span> Ainda não tem conta? </span>
                <Link to="/register">Cadastre-se</Link>
              </div>
            </FormContainer>
          </Content>
        </Container>
      </div>
    </>
  );
}

export default PageLogin;
