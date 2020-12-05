import css from 'styled-jsx/css'

export default css`
    .container {
        width: 90%;
        margin: 22px auto;
    }

    .header-about {
        margin-bottom: 34px;
    }

    .info {
        color: #347;
    }

    @media screen and (min-width: 1024px) {

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

        }

        .left {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 25px;
        }


        .right {
            margin: 52px 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            direction: rtl;
            text-align: left;
            grid-column-gap: 25px;
        }
    }

`