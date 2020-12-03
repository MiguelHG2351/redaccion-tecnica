import css from 'styled-jsx/css'

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
        line-height: 1.8;

    }

    .creadores h3 a {
        color: #fff;
        text-decoration: none;
    }

    .picture-img {
        display: flex;
        justify-content: center;
        
    }

    .picture-img img {
        width: 50%;
        
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