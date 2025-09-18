import styled from "styled-components";

export const FooterBase = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    z-index: 50;
    background-color: #EAEAEA;

        hr {
            width: 100%;
            background-color: #CECECE;
            margin-bottom: 1rem;
        }

            span {
                font-weight: bold;
                margin-left: auto;
            }
`;