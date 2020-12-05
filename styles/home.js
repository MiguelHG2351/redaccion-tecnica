import css from 'styled-jsx/css'

export default  css`
    .container {
        width: 90%;
        margin: 35px auto;
    }

    .presentacion {
        height: 100vh;        
        /* background-color: #0b0c21; */
        padding: 15px;
    }
    
    .presentacion h1 {
        margin-bottom: 15px;
        font-size: 28px;
        text-align: center;
        font-weight: 700;
        color: #01f9f8;
    }

    .presentacion p {
        font-size: 14px;
        text-align: center;
        color: #fefefe;
    }

    .go-group {
        margin: 22px 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: space-evenly;
    }

    .button-group {
        display: flex;
        justify-content: space-evenly;
    }

    .image {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 50%;
        object-fit: cover;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .image img:not(.background) {
        width: 50%;
    }

    .background {
        position: absolute;
        display: initial;
        left: -100px;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* transform: rotate(90deg); */
        z-index: -1;
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

        .presentacion {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .go-group {
            justify-content: center;
        }

        .image {
            height: 100%;
            justify-content: flex-end;
        }
        
        .background {
            left: unset;
            right: -37%;
        }

        .video-info, .facultades {
            display: grid;
            grid-template-columns: 40% 60%;
            align-items: center;
        }
    }

    @media screen and (min-width: 1350px) {
        .container {
            width: 1250px;
        }

        .go-group {
            justify-content: center;
            gap: 50px 0;
        }

        .intro h1 {
            font-size: 36px;
        }

        .intro p {
            font-size: 22px;
        }

        .video-info, .facultades {
            display: grid;
            grid-column-gap: 50px;
            grid-template-columns: 40% 60%;
            align-items: center;

        }

        .title-info h2 {
            font-size: 36px;
        } 

        .title-info p {
            font-size: 20px;
        } 

    }

`