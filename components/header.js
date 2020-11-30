import style from 'styles/header'
import { useState, useRef } from 'react'
import Link from 'next/link'

export default function Header () {
  const overlayRef = useRef(null)
  const [menu, setMenu] = useState('sidenav')

  function toggleMenu () {
    if (menu === 'sidenav') {
      setMenu('sidenav active')
      overlayRef.current.classList.toggle('active')
    } else {
      setMenu('sidenav')
    }
  }

  function closeMenu () {
    overlayRef.current.classList.remove('active')
    setMenu('sidenav')
  }

  return (
        <>
            <header className="header-site">
                <div className="container-header">
                    <div className={menu}>
                        <div className="container-sidenav">
                            <div className="profile">
                                <div className="background">
                                    <img
                                        loading="lazy"
                                        src="/images/background.jpeg"
                                        className="responsive-img"
                                        alt="Avatar del usuario"
                                    />
                                </div>
                                <div className="user-info">
                                    <div className="avatar">
                                        <img
                                            src="/images/minecraft.jpg"
                                            alt="Avatar del usuario"
                                        />
                                    </div>
                                    <p>miguel2351@gmail.com</p>
                                    <p>Miguel Hernández</p>
                                </div>
                            </div>
                            <ul className="menu">
                                <li className="list-menu">
                                    <Link href="/">
                                        <a onClick={closeMenu}>
                                            <i className="material-icons">home</i>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <Link href="/videos">
                                        <a>
                                            <i className="material-icons">play_circle_filled</i>
                                            Videos
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <Link href="/images">
                                        <a>
                                            <i className="material-icons">image</i>
                                            Imagenes
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <Link href="/group">
                                        <a onClick={closeMenu}>
                                            <i className="material-icons">group</i>
                                            Grupo
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <Link href="/pacmanxd">
                                        <a onClick={closeMenu}>
                                            <i className="material-icons">games</i>
                                            Documentos
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-visible">
                        <button className="btn-menu" onClick={toggleMenu}>
                            <i className="material-icons">sort</i>
                        </button>
                    </div>
                </div>
            </header>
            <div className="overlay" ref={overlayRef} onClick={closeMenu}></div>
            <style jsx>{style}</style>
        </>
  )
}
