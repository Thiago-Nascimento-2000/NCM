import styled from "styled-components";

export const ButtonSearch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-width: 170px;
    height: 60px;
    border-radius: 10px;
    border: none;
    background-color: #3a9062ff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &:hover {
        background-color: #39a36bff;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    @media (max-width: 1664px) {
        width: 100%;
    } 
`;

export const Title = styled.span`
    font-size: 23px;
    color: #FFF;
`;

export const Icon = styled.span`
    font-size: 23px;
    color: #FFF;
    position: relative;
    top: 2px;
`;