import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  height: 100%;
  background: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  
  .navigation{
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #1f1717;
    width: 200px;

    nav{
        display: flex;
        flex-direction: column;
    }

    button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #1f1717;
    border: 1px white;
    border-style: solid none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #679e76;
    border: #3b413d;
  }
  }
  .ApplicationBody{
    width: 100%;
    height: 100vh;
    background-color: #4fba6c;
  }

  .headerBody{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  .headerButtons{
    display: flex;
    flex-direction: row;

    button{
      margin-right: 20px;
    }
  }

    button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    background: #1f1717;
    border: 1px white;
    border-style: solid none;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #679e76;
    border: #3b413d;
  }
  }
`;

export const FormContainer = styled.div`
  background: #363636;
  color: #58e67f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 30px;
  padding: 30px;
  
  .cadastro{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  
  form {
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey0);
    margin-bottom: 14px;
    margin-top: 42px;
  }
  span {

    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    color: var(--grey1);
    margin-right:5px;
  }

  input {
    width: 329px;
    height: 48px;
    color: black;
    background: white;
    border: 1px solid #58e67f;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 10px;
    padding:10px;
  }

  input::placeholder {
    color: black;
  }

  a {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey0);
  }
  
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 324px;
    height: 48px;
    background: #4fba6c;
    border: 1.2182px solid #ffffff;
    border-radius: 4.06066px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #679e76;
    border: #3b413d;
  }

  
`;
