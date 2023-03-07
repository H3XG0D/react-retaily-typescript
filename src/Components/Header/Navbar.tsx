import React, { useState } from "react";
import "../../Styles/Header/Navbar.scss";
import { Button } from "antd";
import {BrowserRouter, Routes, Router, NavLink} from "react-router-dom";

type PropsType= {
  slider: boolean;
  switcher: () => void;
}
export default function Navbar(props: PropsType) {
  return (
    <div className="wrapper">
      <header className="header">
        {/* ЛОГО Retaily */}
        <NavLink to="/" className="header-link">
          <div className="header-logo">
          </div>
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
          <a href="/#" className="header-link__active">
            Стать партнером
          </a>
          <NavLink to="/one" className="header-link">
            О нас
          </NavLink>
          <a href="/#" className="header-link">
            Вакансии
          </a>
          <a href="/#" className="header-link">
            Контакты
          </a>
        </div>
        <div>
          {/* Отдельный компонент кнопки войти */}
          <Button
            type="primary"
            style={{ borderRadius: "20px", width: "110px" }}
            className="header-btn"
          >
            Войти
          </Button>
        </div>
      </header>
    </div>
  );
};
