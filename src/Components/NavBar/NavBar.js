import React from 'react';
import logo from '../img/airbnb.png'
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={`navbar is-link ${styles.navbargeneral}`} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className={`navbar-item ${styles.navbarspecial}`} href="https://bulma.io">
                    <img
                        alt="logo"
                        src={logo}
                    />
                </a>
                <a
                    href="#kk"
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;