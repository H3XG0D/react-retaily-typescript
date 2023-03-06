import React from "react";
import "../../Styles/Partners/Faq.scss";

const Faq = () => {
    return (
        <div className="wrapper">
            <div className="main__faq">
                <div className="main__faq_name">F.A.Q</div>
                <div className="main__faq-info">
                    <div className="main__faq-info-container">
                        <div className="main__faq-info-bar">
                            <div className="main__faq-info-bar_line"></div>
                            <div className="main__faq-info-bar-circles">
                                <div className="main__faq-info-bar_circle">
                                    <div className="main__faq-info-bar_circleIn">
                                        <div className="main__faq-info-bar_circleOut"></div>
                                    </div>
                                </div>
                                <div className="main__faq-info-bar_circle">
                                    <div className="main__faq-info-bar_circleIn">
                                        <div className="main__faq-info-bar_circleOut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main__faq-info-items">
                            <div className="main__faq-info-item">
                                <div className="main__faq-info-item_text">
                                    Взимается ли плата за использование системы Retaily?
                                </div>
                                <div className="main__faq-info-item_subtext">
                                    Использование мобильного приложения и сайта для пользователей
                                    (торговых точек, контрагентов и т.д.) бесплатное.
                                </div>
                            </div>
                            <div className="main__faq-info-item">
                                <div className="main__faq-info-item_text">
                                    Возможно ли установить персональные цены для разных
                                    контрагентов?
                                </div>
                                <div className="main__faq-info-item_subtext">
                                    Цены для контрагентов в системе устанавливаются и отображаются
                                    согласно условиям заключенных договоров с поставщиком
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main__faq-info-container">
                        <div className="main__faq-info-bar">
                            <div className="main__faq-info-bar_line"></div>
                            <div className="main__faq-info-bar-circles">
                                <div className="main__faq-info-bar_circle">
                                    <div className="main__faq-info-bar_circleIn">
                                        <div className="main__faq-info-bar_circleOut"></div>
                                    </div>
                                </div>
                                <div className="main__faq-info-bar_circle">
                                    <div className="main__faq-info-bar_circleIn">
                                        <div className="main__faq-info-bar_circleOut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main__faq-info-items">
                            <div className="main__faq-info-item">
                                <div className="main__faq-info-item_text">
                                    Какое время занимает подключение к системе Retaily и сколько она
                                    стоит?
                                </div>
                                <div className="main__faq-info-item_subtext">
                                    Скорость подключения к системе от 14 дней в зависимости от
                                    дополнительных настроек. Плата за подключение и дополнительные
                                    настройки интерфейса не взимается.
                                </div>
                            </div>

                            <div className="main__faq-info-item">
                                <div className="main__faq-info-item_text">
                                    Как загружать фото продукции?
                                </div>
                                <div className="main__faq-info-item_subtext">
                                    Фотографии продукции можно загрузить как в личном кабинете, так
                                    и через обмен данными с 1С предприятия.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
