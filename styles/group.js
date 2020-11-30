import css from "styled-jsx/css";

const styles = css`

    .header-group {
        padding: 12px;
    }

    .header-group h1 {
        padding: 12px;
        position: relative;
    }

    .groups {
        background-color: #212429;
        height: 100vh;
        position: relative;
    }

    .go-back {
        background-color: #313434;
        display: block;
        color: #fff;
        padding: 15px;
        box-shadow: 0 0 2px 2px #000;
        display: flex;
        align-items: center;
        gap: 0 15px;
        text-decoration: none;
    }

    .background {
        position: absolute;
        z-index: 0;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .background img {
        width: 100%;
        height: auto;
        opacity: 0.25;
    }

    .list-group {
        padding-left: 0;
        position: relative;
    }

    .group {
        padding: 20px;
        transition: all ease 0.3s;
        cursor: pointer;
        display: flex;
        align-items: center;
        background-color: rgb(49, 52, 52, 0.81);
        /* background-color: #313434; */
    }

    .line {
        position: absolute;
        width: 2px;
        background-color: #4a4e50;
        left: 31px;
        top: 42px;
        height: 45px;
        z-index: 4;
    }

    .group:hover {
        background-color: rgb(0, 0, 0);
    }

    .list-group li a {
        position: relative;
        z-index: 5;
        margin-left: 12px;
        color: #fff;
        text-decoration: none;
    }

    h1 {
        color: #fff;
    }

    @media screen and (min-width: 992px) {
        .container {
            display: grid;
            grid-template-areas: "col1 col2";
            grid-template-columns: 20% 80%;
            grid-template-rows: auto;
        }

        .video-list {
            grid-area: col2;
        }

        .groups {
            grid-area: col1;

        }

    }
`;

export default styles;
