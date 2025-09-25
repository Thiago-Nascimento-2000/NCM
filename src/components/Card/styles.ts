import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 16rem;
    height: 210px;
    border-radius: 20px;
    z-index: 10;

    background: #1F2126;
    background: linear-gradient(180deg,rgba(31, 33, 38, 0.50) 10%, rgba(71, 181, 122, 1) 100%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    @media(max-width: 1386px) {
        width: 100%;
        height: auto;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5rem 1rem 0.5rem 1rem;
        flex-wrap: wrap;
    }

    .containerIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1a3b26;
        background: linear-gradient(180deg, rgba(26, 59, 38, 1) 15%, rgba(71, 181, 122, 1) 100%);
        box-shadow: inset 0px 0px 10px 2px rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        width: 70px;
        height: 70px;
        border-radius: 20px;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #FFF;
    top: 10px;
`;

export const Title = styled.span`
    color: #FFF;
    font-size: 25px;
    font-weight: 500;
`;

export const Number = styled.span`
    color: #A8FFB2;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10);
    font-size: 50px;
    font-weight: 400;
`;
