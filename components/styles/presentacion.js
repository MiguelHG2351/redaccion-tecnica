import css from "styled-jsx/css";

export const cardStyle = css`
    .modal {
        --size: 260px;
        position: fixed;
        left: calc(50% - (var(--size)) / 2);
        top: calc(50% - (var(--size)) / 2);
        /* background-image: linear-gradient(red, blue);
         */
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
        width: var(--size);
        height: var(--size);
        z-index: 20;
        padding: 18px;
        box-sizing: border-box;
    }

    .info-user {
        margin-top: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .center {
        margin: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .info-user h2 {
        margin-bottom: 18px;
    }

    .image-user {
        display: flex;
        justify-content: center;
    }

    .image-user img {
        display: flex;
        justify-content: center;
        width: 30%;
    }

    @media screen and (min-width: 1200px) {
        .modal {
            --size: 450px;

        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.45);
        z-index: 10;
    }
`

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
