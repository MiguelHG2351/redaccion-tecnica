import css from 'styled-jsx/css'

export default css`
    .card {
        background-color: #0d2058;
        border-radius: 16px;
        padding: 12px;
        cursor: pointer;
        transition: transform 0.18s ease;
    }

    .card:hover {
        transform: scale(0.9);
    }

    .header-card  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }

    .content-card {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 18px;
        color: #fff;
    }

    .info-group h3 {
        font-size: 26px;
    }

    .info-group p {
        font-size: 12px;
    }

`