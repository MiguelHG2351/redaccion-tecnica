import css from "styled-jsx/css";

export default css`
    .footer {
        background-color: #03091e;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px 0;
        padding: 12px;
    }

    .creadores {
        margin-top: 24px;
        line-height: 3.2;
    }

    .creadores h4 a {
        color: #fff;
        text-decoration: none;
    }

    .creadores h4 {
        position: relative;
    }

    .creadores h4::after {
        content: "";
        position: absolute;
        /* width: 55px; */
        height: 2px;
        padding: 0.54px;
        left: 0;
        top: 10px;
        background-color: #09f;
    }

    .creador-1::after {
        right: 70%;
    }

    .creador-2::after {
        right: 40%;
    }

    .creador-3::after {
        right: 10%;
    }

    .footer-menu {
        display: grid;
        padding: 0;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        height: 100%;
        width: 90%;
        margin: 0 auto;
        gap: 9px 0;
    }

    .list-menu {
        list-style: none;
        padding-left: 20%;
    }

    .list-menu a {
        padding: 8px 0 8px 5px;
        border-left: 3px #27ff07 solid;
    }

    .list-menu a.orange {
        border-color: #fa7800;
    }

    .list-menu a.green {
        border-color: #33b13a;
    }

    .list-menu a.purple {
        border-color:  #6b407e;
    }

    .list-menu a.yellow {
        border-color: #f5c443;
    }

    .list-menu a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: flex-end;
    }

    .picture-img {
        display: flex;
        justify-content: center;
    }

    .picture-img img {
        width: 50%;
    }

    @media screen and (max-width: 320px) {
        .list-menu {
            list-style: none;
            padding-left: 5%;
        }
    }

    @media screen and (min-width: 1200px) {
        .footer {
            display: grid;
            padding: 12px 32px;
            grid-template-columns: 1fr 50% 1fr;
        }

        .creadores {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px 0;
        }

        .list-menu {
            padding: 0;
            padding-left: 30%;
            list-style: none;
        }

        .picture-img img {
            width: 80%;
        }
    }
`;
