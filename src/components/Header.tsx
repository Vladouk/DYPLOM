import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header>
            <h1>{t('appName')}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">{t('home')}</Link>
                    </li>
                    <li>
                        <Link to="/booking">{t('booking')}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;