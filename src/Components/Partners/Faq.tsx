import React from "react";
import "../../Styles/Partners/Faq.scss";

type PropsType = {
  slider: boolean;
};

const Faq = (props: PropsType) => {
  return (
    <div className={props.slider ? "main__faq-bg" : ""}>
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
                    {props.slider
                      ? "Как работает Retaily?"
                      : "Взимается ли плата за использование системы Retaily?"}
                  </div>
                  <div className="main__faq-info-item_subtext">
                    {props.slider
                      ? "Сервис Retaily автоматизирует вашу систему заявок Поставщикам товаров " +
                        "– теперь ваши заявки автоматически доходят до Поставщика. " +
                        "Установите приложение «RETАILY» из Аpp Store или PlayMarket на Ваше устройство и следуйте инструкциям."
                      : "Использование мобильного приложения и сайта для пользователей(торговых точек, контрагентов и т.д.) бесплатное."}
                  </div>
                </div>
                <div className="main__faq-info-item">
                  <div className="main__faq-info-item_text">
                    {props.slider
                      ? "Видны ли остатки на складах у поставщика?"
                      : "Возможно ли установить персональные цены для разных\n" +
                        "                  контрагентов?"}
                  </div>
                  <div className="main__faq-info-item_subtext">
                    {props.slider
                      ? "Да."
                      : "Цены для контрагентов в системе устанавливаются и отображаются\n" +
                        "                  согласно условиям заключенных договоров с поставщиком"}
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
                    {props.slider
                      ? "Как быстро обрабатываются заявки?"
                      : "Какое время занимает подключение к системе Retaily и сколько\n" +
                        "                  она стоит?"}
                  </div>
                  <div className="main__faq-info-item_subtext">
                    {props.slider
                      ? "Сформированные в системе заявки автоматически передаются поставщику по каналам связи в их учетную программу (1С). " +
                        "Далее поставщик отрабатывает заявку согласно своим стандартам и правилам."
                      : "Скорость подключения к системе от 14 дней в зависимости от\n" +
                        "                  дополнительных настроек. Плата за подключение и дополнительные\n" +
                        "                  настройки интерфейса не взимается."}
                  </div>
                </div>

                <div className="main__faq-info-item">
                  <div className="main__faq-info-item_text">
                    {props.slider
                      ? "Могу ли я заключить договор поставки с поставщиком?"
                      : "Как загружать фото продукции?"}
                  </div>
                  <div className="main__faq-info-item_subtext">
                    {props.slider
                      ? "Да, в мобильном приложении реализован функционал подписания договора поставки. " +
                        "Если договор уже есть – при регистрации данные будут автоматически получены от поставщика."
                      : "Фотографии продукции можно загрузить как в личном кабинете,\n" +
                        "                  так и через обмен данными с 1С предприятия."}
                  </div>
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
