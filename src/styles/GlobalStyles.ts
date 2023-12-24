import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 300vh;
        overflow-x: hidden;
    }
    #root {
        overflow-x: hidden;
    }
`;
