import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
       html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        text-align: center;

        box-sizing: border-box;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;

        background-image: url("./Miles.png");
        background-position: right bottom;
        background-size: contain;
        background-repeat: no-repeat;


        font-family: 'Bangers';
    }
`;
