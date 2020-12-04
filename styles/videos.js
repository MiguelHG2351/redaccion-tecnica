import css from 'styled-jsx/css'

export default css`

    .search-video, .options {
        margin: 22px auto;
        width: 90%;
        position: relative;
    }

    .options  {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .form input {
        padding: 8px;
        border-radius: 8px;
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 18px;
    }

    .background-search {
        display: flex;
        align-items: center;
        background-color: #f1f3f6;
        border-radius: 8px;
        position: relative;

    }

    .summary {
        align-items: center;
        display: flex;
        background-color: transparent;
        height: 100%;

    }

    .summary button {
        padding: 0 12px;
        background-color: #00a0ff;
        height: 100%;
        color: #fff;
        transition: background 0.24s ease;
        border-top-right-radius: 8px;
    }

    .summary button:hover {
        background-color: #0007ff;

    }


    .list {
        position: absolute;
        z-index: 50;
        right: 0;
        top: 45px;
        background-color: #fff;
        color: #000;
        padding: 0 8px;
    }

    .list > div {
        padding: 11px;
        cursor: pointer;
        color: #000;
        transition: all 0.25s ease;
    }

    .list > div:hover {
        background-color: #d7d7d7;
    }

    @media screen and (min-width: 765px) {
        .options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 1250px) {
        .options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

`