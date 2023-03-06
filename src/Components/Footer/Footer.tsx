import React from "react";
import "../../Styles/Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="main__footer-bg">
      <div className="wrapper">
        <div className="main__footer">
          <div className="main__footer-links">
            <div className="main__footer-items">
              <div className="main__footer-items_item">
                <div className="main__footer_logo"></div>
                <a href="src/Components/Partners#">О компании</a>
                <a href="src/Components/Partners#">Документы</a>
                <a href="src/Components/Partners#">Вакансии</a>
                <a href="src/Components/Partners#">Контакты</a>
              </div>
              <div className="main__footer-items_item">
                <a href="src/Components/Partners#">Главная</a>
                <a href="src/Components/Partners#">Преимущества</a>
                <a href="src/Components/Partners#">Как стать поставщиком?</a>
                <a href="src/Components/Partners#">F.A.Q</a>
                <a href="src/Components/Partners#">Обратная связь</a>
              </div>
              <div className="main__footer-items_item">
                <div className="main__footer-items_item-title">Телефон</div>
                <div className="main__footer-items_item-subtitle">
                  +7 (964) 333-33-33
                </div>
                <div className="main__footer-items_item-title">E-mail</div>
                <div className="main__footer-items_item-subtitle">
                  info@retaily.online
                </div>
              </div>
            </div>
          </div>
          <div className="main__footer-apps">
            <div className="main__footer-app">
              <div className="main__footer-app-play">
                <div className="main__footer-app-googlePlay_image"></div>
                <div className="main__footer-app-play_download">
                  Загрузите в
                  <div style={{ fontWeight: "600", fontFamily: "Montserrat" }}>
                    Google Play
                  </div>
                </div>
              </div>
            </div>
            <div className="main__footer-app-googlePlay_qrCode"></div>
            <div className="main__footer-app">
              <div className="main__footer-app-play">
                <div className="main__footer-app-applePlay_image"></div>
                <div className="main__footer-app-play_download">
                  Загрузите в
                  <div style={{ fontWeight: "600", fontFamily: "Montserrat" }}>
                    App Store
                  </div>
                </div>
              </div>
            </div>
            <div className="main__footer-app-applePlay_qrCode"></div>
          </div>
        </div>
      </div>

      {/*<div className="main__footer_copyright_left">*/}
      {/*  с 2022, ООО "Ретейли", официальный сайт*/}
      {/*</div>*/}
      {/*<div className="main__footer_copyright_line"></div>*/}
      {/*<div className="main__footer_copyright_right">*/}
      {/*  Дизайн выполнил Сивцев Иван*/}
      {/*</div>*/}
    </div>
  );
};

export default Footer;
