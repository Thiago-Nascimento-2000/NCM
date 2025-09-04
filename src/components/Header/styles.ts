import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 80px;
    border-radius: 20px;
    background-color: #343436;
    margin: 1rem;
    padding: 1rem 2rem 1rem 1rem;

    .logoname {
        margin-right: 2rem;
    }

    .active {
        background-color: #6438F0;
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        border-radius: 10px;
        color: #FFF;


        &:hover {
            background-color: #5935F1;
        }
    }

    ul {
        display: flex;
        gap: 2rem;
        li {
            list-style: none;
            a {
                text-decoration: none;
                color: #FFF;
                font-size: 20px;
            }
        }
    }
`;