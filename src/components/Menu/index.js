import React from 'react';
import LogoSvg from '../../assets/logo.svg';
import Button from '../Button/index';
import './main.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src="" className="Logo" srcSet={LogoSvg}  alt="Zaflix Logo" />
            </a>

            <Button href="/" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;