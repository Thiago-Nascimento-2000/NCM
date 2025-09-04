import styled from "styled-components";

export const Input = styled.input`
    width: 800px;
    height: 60px;
    border-radius: 10px;
    border: none;
    padding-left: 1rem;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    outline: none;
`;

export const Label = styled.label`
    padding-bottom: 0.5rem;
    
    &::placeholder {
        color: #888;
        font-style: italic;
    }
`;

