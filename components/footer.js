import styles from 'components/styles/footer'

export default function FnFooter() {
    return (
        <>
            <footer className="footer">
                <div className="creadores">
                    <h3>Rene Enrique Urbina Rivera</h3>
                    <h3>Erick Espinoza</h3>
                    <h3>Andre Valentín Rivaz Velazques</h3>
                </div>
                <div className="footer-menu">
                    <div className="grupos">
                        
                    </div>
                    <div className="integrantes">

                    </div>
                    <div className="info">

                    </div>
                </div>
                <div className="picture-img">
                    <img src="/images/FEC.png" className="responsive-img" alt="Logo de la UNI" />
                </div>
            </footer>
            <style jsx>
                { styles }
            </style>
        </>
    );
}
