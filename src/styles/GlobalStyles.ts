import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        
        width: 100vw;
        min-height: 100vh;
        height: auto;
        overflow-x: hidden;
        background-image: url("/background.jpg");
        background-size: cover;
        background-position: center;
    }
    #root {
        overflow-x: hidden;
        width: 100%;
        min-height: 100vh;
        height: auto;
    }
`;
