import React from 'react';
import { useTranslation } from 'react-i18next';

const Booking: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('booking.title')}</h1>
            <form>
                <label>
                    {t('booking.name')}
                    <input type="text" name="name" required />
                </label>
                <label>
                    {t('booking.date')}
                    <input type="date" name="date" required />
                </label>
                <label>
                    {t('booking.time')}
                    <input type="time" name="time" required />
                </label>
                <button type="submit">{t('booking.submit')}</button>
            </form>
        </div>
    );
};

export default Booking;