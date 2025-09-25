import styled from "styled-components";

export const FooterBase = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        z-index: 50;
        background-color: #EAEAEA;
        z-index: 1;
        padding: 5rem 0 2rem 0;

        hr {
            min-width: 70%;
            background-color: #CECECE;
            margin-bottom: 1rem;
        }
            span {
                font-weight: bold;
            }
`;