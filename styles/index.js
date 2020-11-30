import css from 'styled-jsx/css'

const style = css`
    .container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 32px 0;
        /* background-image: url(/images/FEC.png);
        background-repeat: no-repeat;
        background-position: center; */
    }

    @media screen and (min-width: 1200px) {
        .container {
            display: grid;
            grid-column-gap: 12px;
            grid-template-columns: repeat(4, 1fr);
        }
    }

`

export default style
