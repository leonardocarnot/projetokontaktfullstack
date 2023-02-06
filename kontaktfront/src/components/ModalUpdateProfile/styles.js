import styled, { keyframes } from "styled-components";

const appear = keyframes`
from {
    opacity: 0;
}
to{
    opacity: 1;
}
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  height: auto;
  background: none;

.headerModal{
  width: 100%;
  display: flex;
  align-content: flex-start;
  align-items: fle;
  justify-content: space-between;
  
  button{
    width: 20px;
    height: 20px;
  }
}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: auto;
`;

export const FormContainer = styled.div`
  background: #363636;
  height: auto;
  color: #58e67f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  animation: ${appear} 1s;
  gap: 30px;
  padding: 10px;
  
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
    color: grey;
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

  img {
    height: 40px;
    width: 40px;
    margin-bottom: 35px;
  }
`;
