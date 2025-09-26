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
        -webkit-font-smoothing: antialiased;

        input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
        }
            input[type=number] { 
                -moz-appearance: textfield;
                appearance: textfield;
}
    }

    body {
        width: 100%;
        background: #1F2126;
        background: linear-gradient(180deg, rgba(31, 33, 38, 1) 0%, rgba(60, 121, 62, 1) 100%);
        overflow-x: hidden;
    }
`;