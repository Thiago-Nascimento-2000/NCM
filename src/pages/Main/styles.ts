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

    .container-info {
        width: 100%;
        position: relative;

        .btn-X {
            position: absolute;
            right: 17px;
            top: 20%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            color: #999;

            &:hover {
                color: red;
            }
        }
    }
`;