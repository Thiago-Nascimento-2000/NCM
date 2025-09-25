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

        ol {
            li {
                color: #242424;
            }
        }
    }
        .ncm {
            display: flex;
            align-items: end;
            gap: 1rem;
            width: 100%;

            .input-container {
                position: relative;

                .Search {
                    background-color: white;
                    width: 100%;
                    max-height: 200px;
                    overflow-y: scroll;
                    position: absolute;
                    border-radius: 10px 10px 10px 10px;
                    margin-top: 0.3rem;
                    padding: 1rem;

                    p:hover {
                        background-color: #59AA7C;
                        border-radius: 5px;
                        color: #fff;
                    }
                }

                @media(max-width: 1664px) {
                    width: 100%;
            }
            }

            @media(max-width: 1664px) {
                flex-direction: column;
                align-items: center;
            }
        }
`;