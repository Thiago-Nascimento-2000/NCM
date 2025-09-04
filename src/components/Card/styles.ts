import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 240px;
    height: 190px;
    background: #6438F0;
    background: linear-gradient(180deg,rgba(100, 56, 240, 1) 30%, rgba(71, 181, 122, 1) 100%);
    border-radius: 50px;
    margin: 2rem;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const Icon = styled.div`
    font-size: 30px;
    color: #FFF;
    position: relative;
    top: 10px;
`;

export const Title = styled.h1`
    color: #FFF;
    font-size: 25px;
`;


export const Number = styled.span`
    color: #A8FFB2;
    font-size: 50px;
    margin-top: 1rem;
`;
