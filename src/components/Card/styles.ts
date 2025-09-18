import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 280px;
    height: 210px;

    background: rgba(41, 71, 60, 0.71);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(41, 71, 60, 0.3);
    border-radius: 50px;
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
    color: #31cc7aff;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    font-size: 40px;
    margin-top: 1rem;
`;
