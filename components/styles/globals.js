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

    .btn {
        border: none;
        outline: none;
        cursor: pointer;
    }

    .responsive-img {
        max-width: 100%;
        height: auto;
    }

    .btn-primary {
        --background: #5266df;
        --bezel-radius: 20px 0 20px 0;
        --bezel-border-color: #5266df;
        /* background-color: #5266df; */
        background-color: transparent;
        color: #fff;
        padding: 18px 28px;
        border-radius: 8px;
        transition: transform 0.3s ease-in-out;
        background-image: paint(bezel);
    }

    .reset-value-anchor {
        text-decoration: none;
        color: #fff;
    }

    .btn-primary:hover {
        transform: scale(0.88);
    }

`
