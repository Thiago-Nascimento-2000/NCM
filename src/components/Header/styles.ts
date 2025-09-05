import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 750px;
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

        &:hover {
            background-color: #6F43FF;
        }
    }

    ul {
        display: flex;
        gap: 1rem;
        li {
            list-style: none;
            a {
                text-decoration: none;
                color: #FFF;
                font-size: 20px;
                padding: 0.5rem 1.5rem 0.5rem 1.5rem;
            }
        }
    }
`;