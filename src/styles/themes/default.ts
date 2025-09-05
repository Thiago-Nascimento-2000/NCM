import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }

    body {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: #1E1E1E;
        background: linear-gradient(180deg,rgba(30, 30, 30, 1) 8%, rgba(64, 34, 115, 1) 100%);
        overflow: hidden;
    }
`;