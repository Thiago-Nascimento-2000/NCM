import styled from "styled-components";

export const FooterBase = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    z-index: 50;
    background-color: #EAEAEA;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 100px;
        gap: 1.5rem;

        hr {
            width: 100%;
            background-color: #CECECE;
        }

            span {
                font-weight: bold;
                margin-left: auto;
            }
    }
`;