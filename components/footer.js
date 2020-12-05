import Link from 'next/link'
import styles from "components/styles/footer";

export default function FnFooter() {
    return (
        <>
            <footer className="footer">
                <div className="creadores">
                    <h4 className="creador-1">
                        <a
                            target="__blank"
                            href="https://github.com/DemonSlayer412"
                        >
                            Rene Enrique Urbina Rivera
                        </a>
                    </h4>
                    <h4 className="creador-2">
                        <a target="__blank" href="https://github.com/Egex563">
                            Erick Joao Espinoza Donayre
                        </a>
                    </h4>
                    <h4 className="creador-3">
                        <a target="__blank" href="https://github.com/Andwan2">
                            Andre Valentín Rivas Velasquez
                        </a>
                    </h4>
                </div>
                
                <ul className="footer-menu">
                    <li className="list-menu">
                        <Link href="/">
                            <a className="yellow">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="list-menu">
                        <Link href="/search">
                            <a className="green">
                                Videos
                            </a>
                        </Link>
                    </li>
                    <li className="list-menu ">
                        <Link href="/about">
                            <a className="purple">
                                Acerca del sitio
                            </a>
                        </Link>
                    </li>
                    <li className="list-menu">
                        <a
                            href="https://uni.edu.ni"
                            target="__blank"
                            className="yellow"
                        >
                            Web de la UNI
                        </a>
                    </li>
                </ul>
                <div className="picture-img">
                    <img
                        src="/images/FEC.png"
                        className="responsive-img"
                        alt="Logo de la UNI"
                    />
                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    );
}
