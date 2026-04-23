import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Twoja Firma. Wszelkie prawa zastrzeżone.</p>
            <nav>
                <ul>
                    <li><a href="/about">O nas</a></li>
                    <li><a href="/contact">Kontakt</a></li>
                    <li><a href="/privacy">Polityka prywatności</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;