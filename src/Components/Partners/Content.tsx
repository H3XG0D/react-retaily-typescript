import React from 'react';
import '../../Styles/Partners/Content.scss'

const Content = () => {
    const title = "СОКРАЙЩАЙТЕ СВОИ ОПЕРАЦИОННЫЕ РАСХОДЫ И УВЕЛИЧИВАЙТЕ ПРИБЫЛЬ ВМЕСТЕ С RETAILY"

    return (
        <div className="main">
            <div className="main-bg"></div>
            <div className="main__wall"></div>
            <div className="main-content">
                <div className="main-content-title">
                    <div className="main-content__title">{title}</div>
                    <div className="main-content__subtitle">Автоматизируем прием заказов от торговых точек</div>
                </div>
                <div className="main-content__btn">
                    <img src="src/Components" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Content;