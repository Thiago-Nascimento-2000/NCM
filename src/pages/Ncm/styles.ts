import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 150px 0 0 0;
    align-items: center;
    background-color: #EAEAEA;
    border-radius: 50px 50px 0 0;
    margin-top: -100px;
    z-index: 2;

    .help-list {
        width: 100%;
        height: 200px;
        margin-left: 19.5px;
        padding-top: 50px;

        h2 {
            margin-left: -19.5px;
        }
    }
        .ncm {
            display: flex;
            align-items: end;
            gap: 1rem;
            width: 100%;
        }
`;