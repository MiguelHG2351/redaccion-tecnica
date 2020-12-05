import css from "styled-jsx/css";

export default css`

    .container {
        margin-bottom: 120px;
    }

    .header-group {
        padding: 12px;
    }

    .header-group h1 {
        padding: 12px;
        position: relative;
    }

    .groups {
        background-color: #0c1633;
        position: relative;
        overflow-y: auto;
    }

    .groups::-webkit-scrollbar {
        width: 5px;
        background-color: #eee;
    }

    .groups::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: red;
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
        background-color: #98ca3f;
        /* background-color: #313434; */
    }

    .line {
        position: absolute;
        width: 2px;
        background-color: #33b1ff;
        left: 31px;
        top: 42px;
        height: 45px;
        z-index: 4;
    }

    .group:hover {
        background-color: #c1df8b;
    }

    .list-group li a {
        position: relative;
        z-index: 5;
        margin-left: 12px;
        color: #fff;
        text-decoration: none;
    }

    .list-group li i {
        color: #33b1ff;
    }

    h1 {
        color: #fff;
    }

    
    @media screen and (min-width: 992px) {
        .container {
            display: grid;
            grid-template-areas: "col1 col2";
            grid-template-columns: 35% 65%;
            grid-template-rows: auto;
            margin-bottom: 0;
        }

        .video-list {
            grid-area: col2;
        }

        .groups {
            position: fixed;
            grid-area: col1;
            height: auto;
        }

    }

    @media (orientation: portrait) {
        .container {
            display: block !important;
        }
        .groups {
            position: static;
        }

        .background {
            z-index: -1;
        }

    }

    @media screen and (min-width: 1200px) {
        
        .container {
            grid-template-columns: 20% 80%;
        }
        .groups {
            position: fixed;
            width: 20%;
            height: auto;
            top: 101px;
            left: 0;
            bottom: 0;
        }
    }

`;