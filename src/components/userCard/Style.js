import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    padding: 20px 30px;

    .image {
        width: 100px;
        height: 100px;
        margin-right: 30px;
        background-color: blue;
        border-radius: 50%;
        overflow: hidden;
    }

    .image img {
        width: 100%;
    }
     
    p {
        font-size: 25px;
        margin-left: 50px;
    }

    .name {
        font-weight: 700;
    }
    
`