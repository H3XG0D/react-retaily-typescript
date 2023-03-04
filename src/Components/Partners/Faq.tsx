import React from 'react';
import '../../Styles/Partners/Faq.scss';

const Faq = () => {
    return (
        <div className="main__faq">
            <div className="main__faq_name">F.A.Q</div>
            <div className="main__faq_firstTitle">
                Взимается ли плата за использование системы Retaily?
                <div className="main__faq_firstSubtitle">
                    Использование мобильного приложения и сайта для пользователей (торговых точек, контрагентов и
                    т.д.)
                    бесплатное.
                </div>
            </div>
            <div className="main__faq_secondTitle">
                Возможно ли установить персональные цены для разных контрагентов?
                <div className="main__faq_secondSubtitle">
                    Цены для контрагентов в системе устанавливаются и отображаются согласно условиям заключенных
                    договоров с поставщиком.
                </div>
            </div>
            <div className="main__faq_firstLine">
            </div>
            <div className="main__faq_thirdTitle">
                Какое время занимает подключение к системе Retaily и сколько она стоит?
                <div className="main__faq_thirdSubtitle">
                    Скорость подключения к системе от 14 дней в зависимости от дополнительных настроек. Плата за
                    подключение и дополнительные настройки интерфейса не взимается.
                </div>
            </div>
            <div className="main__faq_fourthTitle">
                Как загружать фото продукции?
                <div className="main__faq_fourthSubtitle">
                    Фотографии продукции можно загрузить как в личном кабинете, так и через обмен данными с 1С
                    предприятия.
                </div>
            </div>
            <div className="main__faq_secondLine">
            </div>
        </div>
    );
};

export default Faq;