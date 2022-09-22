import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    object-fit: contain;
    position: relative;
    /* display: flex; */

    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        /* position: fixed; */
        z-index: -1;
    }

    .text {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text h1 {
        color: #fff;
        font-size: 120px;
    }

    .cover {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        position: absolute;
        top: 0;
    }
`