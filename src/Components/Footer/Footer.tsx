import React from "react";
import "../../Styles/Footer/Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main__footer-bg">
      <div className="wrapper">
        <div className="main__footer">
          <div className="main__footer-links">
            <div className="main__footer-items">
              <div className="main__footer-items_item">

                <NavLink to="/">
                  <div className="main__footer_logo"></div>
                </NavLink>

                <NavLink to="/">Главная</NavLink>
                <NavLink to="/Documents">Документы</NavLink>
                <NavLink to="/Vacancies">Вакансии</NavLink>
                <NavLink to="/Contacts">Контакты</NavLink>
              </div>

              <div className="main__footer-items_item">
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/Features">Преимущества</NavLink>
                <NavLink to="/Supplier">Как стать поставщиком?</NavLink>
                <NavLink to="/FAQ">F.A.Q</NavLink>
                <NavLink to="/Feedback">Обратная связь</NavLink>
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

          <div className="main__footer-copyright">
            <div className="main__footer-items_copyright">
              <div className="main__footer-items_copyright-text">
                c 2022, ООО “Ретейли”, официальный сайт
              </div>
              <div className="main__footer-items_copyright-line"></div>
              <div className="main__footer-items_copyright-text">
                Дизайн выполнен в 3Limbs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
