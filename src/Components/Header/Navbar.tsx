import React, { useState } from "react";
import "../../Styles/Header/Navbar.scss";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

type PropsType = {
  slider: boolean;
  switcher: () => void;
};

export default function Navbar(props: PropsType) {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

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
        <div>
          {/* Отдельный компонент кнопки войти */}
          <Button type="primary" className="header-btn">
            Войти
          </Button>
        </div>

        <div
          className="header-burger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <div className={isNavExpanded ? ".header" : "header-burger__menu"}>
            <div className="header-burger__menu">
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
