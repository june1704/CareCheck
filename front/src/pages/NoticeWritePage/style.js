import { css } from "@emotion/react";

export const quillEditor = css`
    box-sizing: border-box;
    flex-grow: 1;
    width: 150rem;
    height: 60rem;

    .ql-toolbar {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        border: none;
        border-bottom: 0.1rem solid #dbdbdb;
        &.ql-snow {
            box-sizing: border-box;
            padding: 1rem 0;
        }
    }

    .ql-container {
        box-sizing: border-box;
        height: 100%;
        border: 0.1rem solid #dbdbdb;
        font-size: 1.5rem;
    }

`;


export const quillTop = css`
    display: flex;

    & > input {
        box-sizing: border-box;
        flex-grow: 1;
        height: 3.5rem;
        margin-right: 1rem;
        outline: none;
        border: 0.1rem solid #dbdbdb;
        border-radius: 0.5rem;
        padding: 0 1.5rem;
        font-size: 1.5rem;
    }
`;

export const saveButton = css`
    box-sizing: border-box;
    margin-right: 1rem;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #fafafa;
    cursor: pointer;
    
    &:hover {
        background-color: #eeeeee;
    }

    &:active {
        background-color: #dddddd;
    }
`;