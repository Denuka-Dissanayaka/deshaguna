import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    margin: auto;
    margin-top: 20px;

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 span {
        color: blue;
        margin-right: 50px;
    }

    .record-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    .add-record button {
        padding: 10px 20px;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
        transition: 0.5s;
    }

    .delete {
        padding: 10px 20px;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
        transition: 0.5s;
        color: #fff;
        background-color: red;
        border: none;
    }

    .delete:hover {
        background-color: #ba0b0b;
    }

    .add-record button:hover {
        color: blue;
    }

    .input-area {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;
    }

    .input-area .form-area {
        width: 450px;
        background-color: #fff;
        padding: 20px 35px;
        border-radius: 10px;
    }
    .form-area .form-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .form-area .form-head p {
        font-weight: 500;
    }

    .form-area .form-head div {
        font-size: 20px;
        cursor: pointer;
    }

    .form-area form input {
        width: 100%;
        border: none;
        border-bottom: 2px solid black;
        margin-bottom: 15px;
    }

    .form-area form input:focus {
        
        outline:0;
        border-bottom: 2px solid black;
    }

    .form-area form button {
        padding: 5px 10px;
        cursor: pointer;
        background-color: blue;
        border: none;
        color: #fff;
    }
`