import css from 'styled-jsx/css'

export default css`



    @media screen and (min-width: 1200px) {
        .footer {
            margin-top: 120px;
            background-color: #03091e;
            display: grid;
            padding: 12px 32px;
            grid-template-columns: 1fr 50% 1fr;
            color: #fff;

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