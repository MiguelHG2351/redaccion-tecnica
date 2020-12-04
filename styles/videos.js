import css from 'styled-jsx/css'

export default css`

    .search-video {
        margin: 22px 0;
    }

    .form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .summary {
        position: relative;
        z-index: 8;
    }

    .form input {
        padding: 8px;
        border-radius: 8px;
        outline: none;
        border: none;
        background-color: #f1f3f6;
    }

    .list {
        position: absolute;
        z-index: 4;
        left: 0;
        bottom: -57px;
        background-color: #fff;
        color: #000;
        padding: 8px;
    }

    .list > div {
        padding: 11px;
        cursor: pointer;
    }

`