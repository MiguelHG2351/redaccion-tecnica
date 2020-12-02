import css from 'styled-jsx/css'

const style = css`
    .sidenav {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 75%;
        background-color: #212429;
        transition: all ease 0.35s;
        transform: translateX(-3000px);
        z-index: 10;
    }

    .sidenav.active {
        transform: translateX(0);
    }

        /* Profile */

    .profile {
        position: relative;
        height: auto;
        overflow: hidden;
        padding: 32px 32px 12px 32px;
        margin-bottom: 5px;
    }

        /* Fondo | Background*/

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .user-info .avatar {
        margin-bottom: 22px;
    }

    .user-info img {
        width: 30%;
        border-radius: 100%;
    }

    .user-info p {
        color: #fff;
        font-size: 12px;
    }

    .menu {
        padding-left: 0;
    }

    .list-menu {
        list-style: none;
    }

    .list-menu a {
        display: flex;
        align-items: center;
        padding: 16px 14px;
        /* color: rgb(209 209 209); */
        color: #fff;
        text-decoration: none;
        transition: all ease 0.2s;
        outline: none;
        border-bottom: 1px solid #333333;
    }

    .list-menu a:hover {
        background-color: #3377ff;
    }

    .list-menu i {
        margin-right: 14px;
    }

    .overlay {
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 5;
    }

    .overlay.active {
        display: block;
    }

    .header-visible {
        box-shadow: var(--shadow);
        padding: 12px;
    }

    .btn-menu {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        border: 1px solid #fff;
        padding: 4px 14px;
        transition: background ease 0.17s;
        color: #fff;
    }

    .btn-menu:hover {
        color: #000;
        background-color: #fff;
    }

    @media screen and (min-width: 996px) {

        /* SideNav */

        .sidenav {
            position: static;
            transform: translate(0);
            width: 100%;
            overflow: hidden;
            box-shadow: var(--shadow);
            background-color: #24317a;
        }

        .container-sidenav {
            display: flex;
            flex-direction: row-reverse;
            width: 90%;
            margin: 0 auto;
        }

        /* Profile */

        .profile {
            padding: 0;
            width: min-content;
            width: fit-content;
        }

        .background {
            display: none;
        }

        .header-visible {
            display: none;
        }

        .user-info .avatar {
            margin-bottom: 0;
        }

        .user-info p {
            color: #fff;
            font-size: 12px;
        }

        .menu {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 0 16px;
        }

        .list-menu a {
            border-radius: 12px;
            background-color: #3377ff;
        }
        
        .list-menu a:hover {
            border: none;
            transform: scale(0.9);
        }


    }
`

export default style
