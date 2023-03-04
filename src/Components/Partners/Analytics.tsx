import React from 'react';
import '../../Styles/Partners/Analytics.scss';

const Analytics = () => {
    return (
        <div className="main__analytics">
            <div className="main__analytics_title">
                СОХРАНЯЙТЕ ВРЕМЯ И ДЕНЬГИ ДЛЯ ВАШЕГО БИЗНЕСА
            </div>
            <div className="main__analytics_subtitle_item1">
                заказов в месяц
                <div className="main__analytics_number_item1">
                    &gt;10 000
                </div>
            </div>
            <div className="main__analytics_subtitle_item2">
                предпринимателей
                <div className="main__analytics_number_item2">
                    &gt;1000
                </div>
            </div>
            <div className="main__analytics_subtitle_item3">
                увеличим средний чек
                <div className="main__analytics_number_item3">
                    от 20%
                </div>
            </div>
        </div>
    );
};

export default Analytics;