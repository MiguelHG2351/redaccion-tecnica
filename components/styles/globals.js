import css from 'styled-jsx/css'

export default css.global`
    * {
        margin: 0;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    :root {
        --shadow:  0px 1px 5px 0px rgba(0,0,0,0.15);
    }

    body {
        overflow-x: hidden;
        background-color: #eee;
    }

    .btn {
        border: none;
        outline: none;
        cursor: pointer;
    }

    .responsive-img {
        max-width: 100%;
        height: auto;
    }

    .random {
        --art-alpha: 0.5;
        --art-color: rgba(255, 255, 255);
        --art-steps: 50;
        /* background-image: paint(art), linear-gradient(to right, blue, black); */
        background: #0b0c21;
    }

    .btn-primary {
        --background-1: cyan;
        --background-2: #006aff;
        --bezel-radius: 20px 0 20px 0;
        --bezel-border-color: #5266df;
        /* background-color: #5266df; */
        /* background-color: transparent; */
        color: #fff;
        padding: 18px 28px;
        border-radius: 8px;
        transition: transform 0.17s ease-in-out;
        -webkit-mask-image: paint(bezel);
        background-image: paint(bezel);
    }

    .btn-primary, .btn-secondary {
        width: max-content;
    }

    .btn-primary:hover, .btn-secondary:hover {
        transform: scale(0.88);
    }


    .btn-secondary {
        --background-1: transparent;
        --background-2: transparent;
        --bezel-radius: 20px 0 20px 0;
        --bezel-border-color: #5266df;
        background-color: transparent;
        color: #fff;
        padding: 18px 28px;
        border-radius: 8px;
        transition: transform 0.17s ease-in-out;
        background-image: paint(bezel);
    }

    .reset-value-anchor {
        text-decoration: none;
        color: #fff;
    }


`
