import styles from 'components/styles/footer'

export default function FnFooter() {
    return (
        <>
            <footer className="footer">
                <div className="creadores">
                    <h3>
                        <a target="__blank" href="https://github.com/DemonSlayer412">
                            Rene Enrique Urbina Rivera
                        </a>
                    </h3>
                    <h3>
                        <a target="__blank" href="https://github.com/Egex563">
                            Erick Joao Espinoza Donayre
                        </a>
                    </h3>
                    <h3>
                        <a target="__blank" href="https://github.com/Andwan2">
                            Andre Valentín Rivas Velasquez
                        </a>
                    </h3>
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
