import css from "styled-jsx/css";

export default css`

    .presentacion {
        margin-bottom: 32px;
    }

    h2 {
        margin-top: 41px;
        text-align: center;
        margin: 32px 0;
    }

    li,
    h2 {
        color: #fff;
    }

    .list-students {
        display: flex;
        justify-content: space-evenly;
        padding-left: 0;
    }

    .list-students li {
        list-style: none;
        padding: 18px;
        cursor: pointer;
        transition: all ease 0.23s;
        border-radius: 10px;
    }

    .list-students li:hover {
        background-color: #344475;
    }

`;
