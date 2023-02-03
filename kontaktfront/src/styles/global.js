import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    }
    :root{
        --pinkprimary: #FF577F;
        --pinkfocus: #FF427F;
        --pinknegative: #59323F;
        --grey0: #F8F9FA;
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --grey4: #121214;
        --success: #3FE864;
        --negative: #E83F5B;
    }
    body{
        background-color: var(--grey4);
        color: white;
    }
    body,input,button{
        font-family: 'Inter',sans-serif;
    }
    
    h1 , h2 , h3{
        font-family: 'Inter',sans-serif;
    }
    button{
        cursor:pointer;
    }
    a{
        text-decoration: none;
    }
`;