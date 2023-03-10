import React, { useState } from "react";
import "../../Styles/Header/Navbar.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

type PropsType = {
  slider: boolean;
  switcher: () => void;
};

export default function Navbar(props: PropsType) {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <div className="wrapper">
      <header className="header">
        {/* ЛОГО Retaily */}

        <NavLink to="/" className="header-link">
          <div className="header-logo"></div>
        </NavLink>

        <div className="header-switcher">
          <div
            className={
              "header-switcher-item " +
              (props.slider ? "" : "header-switcher-item__active")
            }
            onClick={() => props.switcher()}
          >
            Поставщик
          </div>
          <div
            className={
              "header-switcher-item " +
              (props.slider ? "header-switcher-item__active" : "")
            }
            onClick={() => props.switcher()}
          >
            Торговая точка
          </div>
        </div>
        {/* Меню */}
        <div className="header-links">
          <NavLink to="/" className="header-link__active">
            Стать партнёром
          </NavLink>

          <NavLink to="/AboutUs" className="header-link">
            О нас
          </NavLink>

          <NavLink to="/Vacancies" className="header-link">
            Вакансии
          </NavLink>

          <NavLink to="/Contacts" className="header-link">
            Контакты
          </NavLink>
        </div>

        {/* Отдельный компонент кнопки войти */}
        <div>
          <Button type="primary" className="header-btn">
            Войти
          </Button>
        </div>

        {/* Отдельное пространство для адаптива */}
        <div className="header-burger" onClick={toggleMenuMode}>
          <div className="header-burger">
            {isMenuOpen ? (
              <div className="header-burger__menu">
                <div className="header-burger__menu-content">
                  <div className="header-burger__menu-content_logo"></div>
                  <div className="header-burger__menu-content-items">
                    <div className="header-burger__menu-content-items_text__bold">
                      <NavLink
                        to="/"
                        className="header-burger__menu-content-items-links"
                      >
                        Стать партнёром
                      </NavLink>
                    </div>
                    <div className="header-burger__menu-content-items_text">
                      <NavLink
                        to="/AboutUs"
                        className="header-burger__menu-content-items-links"
                      >
                        О нас
                      </NavLink>
                    </div>
                    <div className="header-burger__menu-content-items_text">
                      <NavLink
                        to="/Vacancies"
                        className="header-burger__menu-content-items-links"
                      >
                        Вакансии
                      </NavLink>
                    </div>
                    <div className="header-burger__menu-content-items_text">
                      <NavLink
                        to="/Contacts"
                        className="header-burger__menu-content-items-links"
                      >
                        Контакты
                      </NavLink>
                    </div>
                    <div className="header-burger__menu-content-items_btn">
                      <Button
                        type="primary"
                        style={{
                          display: "block",
                          width: "150px",
                          height: "40px",
                          fontSize: "16px",
                        }}
                      >
                        ВОЙТИ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </div>
  );
}
