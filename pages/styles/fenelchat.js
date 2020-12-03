import css from 'styled-jsx/css'

const style = css`
    .container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 32px 0;
        margin-bottom: 150px;
        /* background-image: url(/images/FEC.png);
        background-repeat: no-repeat;
        background-position: center; */
    }

    @media screen and (min-width: 285px) {
        .container {
            display: grid;
            grid-column-gap: 18px;
            grid-template-columns: repeat(1, 1fr);

        }
        
    }

    @media screen and (min-width: 652px) {
        .container {
            grid-template-columns: repeat(2, 1fr);

        }
        
    }

    @media screen and (min-width: 990px) {
        .container {
            grid-template-columns: repeat(3, 1fr);

        }
        
    }

    @media screen and (min-width: 1200px) {
        .container {
            grid-column-gap: 12px;
            grid-template-columns: repeat(4, 1fr);
        }
    }

`

export default style
