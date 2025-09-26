import styled from "styled-components";

export const InputContainerSearchClient = styled.div`
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        .btn-X {
            position: absolute;
            right: 15px;
            top: 65%;
            transform: translateY(-35%);
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            color: #999;
        }

        .icon-close {
            &:hover {
                color: red;
            }
        }

        .icon-search {
            position: relative;
            transform: translateY(2%);
            cursor: default;

            &:hover {
                color: #999;
            }
        }
`

export const InputCliente = styled.input`
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