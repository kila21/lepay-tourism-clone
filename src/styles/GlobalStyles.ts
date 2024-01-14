import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Prospectus L Black";
        src: url("../fonts/Prospectus-L-Black.woff2") format('woff2');
    }

    @font-face {
        font-family: "FSP DEMO - Cervo Neue Neue";
        src: url("../fonts/cervo-neue.woff2") format('woff2');
    }

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
