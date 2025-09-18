import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.7rem 0 0.7rem;
    width: 100%;
    height: 80px;
    border-radius: 100px;
    margin-top: 1rem;


    background: rgba(41, 71, 60, 0.71);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(41, 71, 60, 0.3);
    
    .logoname {
        margin-right: 2rem;
    }

    .active {
        background-color: #3a9062ff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        border-radius: 100px;
        height: 60px;
        
        

        &:hover {
            background-color: #39a36bff;
        }
    }

    ul {
        display: flex;
        gap: 1rem;
        background-color: rgba(151,151,151, 0.34);
        border-radius: 30px;

        li {
            list-style: none;
            a {
                text-decoration: none;
                color: #FFF;
                font-size: 20px;
                padding: 0.5rem 1.5rem 0.5rem 1.5rem;
                height: 60px;
                transition: all 0.3s ease;
            }
        }
    }
`;