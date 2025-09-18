import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 100px;
    align-items: center;
    background-color: #EAEAEA;
    width: auto;
    height: 60%;
    border-radius: 50px 50px 0 0;
    margin-top: -100px;
    z-index: 2;

    .help-list {
        width: 100%;
        margin-left: 19.5px;
        padding-top: 50px;

        h2 {
            margin-left: -19.5px;
        }
    }
`;