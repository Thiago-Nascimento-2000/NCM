import styled from "styled-components";

export const ContainerHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    .Width {
        width: 850px;

        @media(max-width: 900px) {
            width: 90%;
        }
    }

    .Container-Card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
        padding: 1rem 0 1rem 0;
        border-radius: 20px;
        gap: 2rem;
        flex-wrap: wrap;
    }
`