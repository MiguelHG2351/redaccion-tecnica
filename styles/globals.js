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

    body {
        background-color: #121f3d;
    }

    .responsive-img {
        max-width: 100%;
        height: auto;
    }

`
