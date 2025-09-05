import styled from "styled-components";

export const FooterBase = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100px;
    z-index: 25;

    hr {
        width: 100%;
        background-color: #CECECE;
    }

    span {
        margin-left: auto;
        font-weight: bold;
        padding-bottom: 30px;
    }
`;