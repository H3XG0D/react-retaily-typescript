import React from 'react';
import './../../Styles/Partners/Footer.scss'

const Footer = () => {
    return (
        <div className="main__footer">
            <div className="main__footer_logo">
                <div className="main__footer_firstNav">
                    <div className="main__footer_firstNav_itemOne"><a href="#">О компании</a></div>
                    <div className="main__footer_firstNav_itemTwo"><a href="#">Документы</a></div>
                    <div className="main__footer_firstNav_itemThree"><a href="#">Вакансии</a></div>
                    <div className="main__footer_firstNav_itemFour"><a href="#">Контакты</a></div>
                </div>
            </div>

            <div className="main__footer_secondNav">
                <div className="main__footer_secondNav_itemOne"><a href="#">Главная</a></div>
                <div className="main__footer_secondNav_itemTwo"><a href="#">Преимущества</a></div>
                <div className="main__footer_secondNav_itemThree"><a href="#">Как стать поставщиком?</a></div>
                <div className="main__footer_secondNav_itemFour"><a href="#">F.A.Q</a></div>
                <div className="main__footer_secondNav_itemFive"><a href="#">Обратная связь</a></div>
            </div>

            <div className="main__footer_thirdNav">
                <div className="main__footer_thirdNav_itemOne">Телефон</div>
                <div className="main__footer_thirdNav_itemTwo">+7 (964) 333-33-33</div>
                <div className="main__footer_thirdNav_itemThree">E-mail</div>
                <div className="main__footer_thirdNav_itemFour">info@retaily.online</div>
            </div>
            <div className="main__footer_googlePlay">
            </div>
            <div className="main__footer_googleQrCode"></div>
            <div className="main__footer_appleStore">
            </div>
            <div className="main__footer_appleQrCode"></div>

            <div className="main__footer_copyright_left">с 2022, ООО "Ретейли", официальный сайт</div>
            <div className="main__footer_copyright_line"></div>
            <div className="main__footer_copyright_right">Дизайн выполнил Сивцев Иван</div>
        </div>
    );
};

export default Footer;