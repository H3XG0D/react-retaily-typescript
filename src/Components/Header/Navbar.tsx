import React, {useState} from 'react';
import '../../Styles/Navbar.scss';
import {Button} from "antd";

export default function Navbar() {
    const [slider, setSlider] = useState<boolean>(false);

    let switcher = () => {
        setSlider(!slider)
    }

    return (
        <header className="header">

            {/* ЛОГО Retaily */}
            <div className="header-logo">
                {/*<img src="./../Images/logo.svg" alt="Logo"/>*/}
            </div>
            <div className="header-switcher">
                <div className={'header-switcher-item ' + (slider ? '' : 'header-switcher-item__active')}
                     onClick={() => switcher()}>
                    Поставщик
                </div>
                <div className={'header-switcher-item ' + (slider ? 'header-switcher-item__active' : '')}
                     onClick={() => switcher()}>
                    Торговая точка
                </div>
            </div>
            {/* Меню */}
            <div className="header-links">
                <a href="/#" className="header-link__active">Стать партнером</a>
                <a href="/#" className="header-link">О нас</a>
                <a href="/#" className="header-link">Вакансии</a>
                <a href="/#" className="header-link">Контакты</a>

            </div>
            <div>
                {/* Отдельный компонент кнопки войти */}
                <Button type="primary" style={{borderRadius: "20px", width: "110px"}}
                        className="header-btn">Войти</Button>
            </div>

        </header>
    );
};
