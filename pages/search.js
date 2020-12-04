import Head from 'next/head'
import styles from 'styles/videos'

export default function Videos() {
    return (
    <>
        <Head>
            <title>Redacción Técnica | Búsqueda</title>
        </Head>
        <section className="search-video">
            <form className="form">
                <input type="text" name="video"/>
                <div className="options">
                    <div className="summary">
                        <i className="material-icons">filter_alt</i>
                        <div className="list">
                            <div className="agricola">Agricola</div>
                            <div className="civil">Civil</div>
                            <div className="computacion">Computación</div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <style jsx>
            { styles }
        </style>
    </>)
}