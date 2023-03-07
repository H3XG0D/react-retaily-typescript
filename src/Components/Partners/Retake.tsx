import React from 'react';
import '../../Styles/Partners/Retake.scss';

type PropsType = {
    slider: boolean;
}
const Retake = (props: PropsType) => {

    const data = [
        {title: 'Система приема и обработки заявок на поставку товаров для торговых точек'},
        {title: 'Личный кабинет поставщика на портале retaily.online'},
        {title: 'Онлайн-заключение договоров поставок с контрагентами'},
        {title: 'Кастомизация цены и категории товаров для отдельных контрагентов'},
        {title: 'Возможность показать в формате сториз акции, новинки, другую полезную информацию'},
        {title: 'Возможность размещения рекламных баннеров на главной странице'},
    ]

    const data2 = [
        {title: 'Полный каталог продукции по ценам производителей'},
        {title: 'Без ожидания ответа диспетчера'},
        {title: 'Push-уведомления (с нами полки всегда заполнены)'},
        {title: 'Сохранение истории заявок'},
        {title: 'Онлайн мониторинг статуса вашей заявки (принят, отгружается и др.)'},
        {title: 'Контроль закупок'},
    ]

    return (
        <div className="main__retake_bg">
            <div className="wrapper">
                <div className="main__retake">
                    <div className="main__retake_hide_retake">
                        RETAILY
                    </div>
                    <div className="main__retake-content">
                        <div className="main__retake-content-items">
                            {props.slider ? data2.map((a:any) => {
                                return (
                                    <div className="main__retake-content-item">
                                        <div className="main__retake-content-item-circle">
                                            <div className="main__retake-content-item-circle_circleIn"></div>
                                        </div>
                                        <div className="main__retake-content-item_text">
                                            {a.title}
                                        </div>
                                    </div>
                                )
                            }) : data.map((a:any) => {
                                return (
                                    <div className="main__retake-content-item">
                                        <div className="main__retake-content-item-circle">
                                            <div className="main__retake-content-item-circle_circleIn"></div>
                                        </div>
                                        <div className="main__retake-content-item_text">
                                            {a.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="main__retake-content-image">
                            {props.slider ? <div className="main__retake-content-image_macbook2"></div> : <div className="main__retake-content-image_macbook"></div>}
                            <div className="main__retake-content-image_iphone"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Retake;