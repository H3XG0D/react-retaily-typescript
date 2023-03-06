import React from 'react';
import '../../Styles/Partners/Analytics.scss';

const Analytics = () => {
    return (

        <div className="wrapper">
            <div className="main__analytics">
                <div className="main__analytics_title">
                    СОХРАНЯЙТЕ ВРЕМЯ И ДЕНЬГИ ДЛЯ ВАШЕГО БИЗНЕСА
                </div>
                <div className="main__analytics-items">
                    <div className="main__analytics_subtitle_item">
                        заказов в месяц
                        <div className="main__analytics_number_item">
                            &gt;10 000
                        </div>
                    </div>
                    <div className="main__analytics_subtitle_item">
                        предпринимателей
                        <div className="main__analytics_number_item">
                            &gt;1000
                        </div>
                    </div>
                    <div className="main__analytics_subtitle_item">
                        увеличим средний чек
                        <div className="main__analytics_number_item">
                            от 20%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;