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

    .video-info h2 {
        margin-bottom: 15px;
    }

    .video-info img {
        vertical-align: bottom;
    }

    .facultades img {
        background-image: url(/images/background-facultades.png);
        background-size: cover;
    }

    @media screen and (min-width: 768px) {
        .video-info, .facultades {
            display: grid;
            grid-template-columns: 50% 50%;

            align-items: center;

        }
    }

`