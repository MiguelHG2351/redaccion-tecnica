import css from 'styled-jsx/css'

export default css`

    .footer {
        background-color: #03091e;
        color: #fff;
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

        .picture-img img {
            width: 80%;

        }

    }
`