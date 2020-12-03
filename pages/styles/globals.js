import css from 'styled-jsx/css'

export const globalStyles = css.global`
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
        background-color: #5266df;
        color: #fff;
        padding: 12px;
        border-radius: 8px;
        transition: transform 0.3s ease-in-out;
    }

    .btn-primary:hover {
        transform: scale(0.88);
    }

`
