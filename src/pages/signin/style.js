import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        font-size: 20px;
        font-weight: 600;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        border: none;
        background-color: white;
        box-shadow: 5px 8px 10px #bfbfbf;
    }

    button:hover {
        color: blue;
    }

    button span {
        margin-left: 10px;
        transition: 0.5s;
    }

    button span:hover {
        color: blue;
    }
`