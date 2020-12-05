import css from 'styled-jsx/css'

export default  css`
    .container {
        width: 90%;
        margin: 35px auto;
    }

    .container h3 {
        font-size: 28px;
        text-align: center;
        font-weight: 700;
    }

    .container p {
        margin-top: 15px;
        font-size: 14px;
        text-align: center;
    }

    .content {
        margin-top: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px 0;
    }

    .title-info p {
        color: rgb(36 35 35 / 75%);
        font-size: 16px;
        text-align: left;

    }

    .title-info h2, .title-info h2 {
        margin-bottom: 15px;
    }

    .video-info img {
        vertical-align: bottom;
    }

    .facultades img {
        background-image: url(/images/background-facultades.png);
        background-size: cover;
    }

    .profe {
        border-radius: 8px;
        border-top: 8px solid blue;
        box-shadow: 0px 1px 7px 5px rgba(0,0,0,0.15);
    }

    .profe img {
        vertical-align: bottom;
    }

    .profe .title-info {
        background-color: #09f;
        padding: 18px;
        color: #fff;
    }

    .profe .title-info p {
        color: #fff;
        padding: 20px;
    }

    @media screen and (min-width: 768px) {
        .video-info, .facultades {
            display: grid;
            grid-template-columns: 50% 50%;

            align-items: center;

        }
    }

    @media screen and (min-width: 1350px) {
        .container {
            width: 1250px;
        }

        .video-info, .facultades {
            display: grid;
            grid-template-columns: 50% 50%;
            align-items: center;

        }
    }

`