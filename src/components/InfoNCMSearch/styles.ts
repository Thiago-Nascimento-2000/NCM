import styled from "styled-components";

export const ContainerInfoNCM = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #FFF;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`


export const StatusSpan = styled.span<{ status: string }>`
  color: ${({ status }) => (status.includes("Invalido") ? "#D92600" : "black")};
  font-weight: bold;
`;


export const ContentInfoNCM = styled.div`
    display: flex;
    padding-left: 1rem;
    background-color: #eaeaea;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    color: #272727;
    padding: 0.5rem;
    overflow: hidden;
    white-space: nowrap;

    span {
        text-overflow: ellipsis;
        width: 100%;
    }
`