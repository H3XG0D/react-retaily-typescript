import React from "react";
import "./../../Styles/Contacts/Contacts.scss";
import Footer from "../Footer/Footer";

const Contacts = () => {
  return (
    <div className="main__contacts-bg">
      <div className="wrapper">
        <div className="main__contacts">
          <div className="main__contacts-title">Контакты</div>

          <div className="main__contacts-container">
            <div className="main__contacts-address">
              <div className="main__contacts-mail">
                <div className="main__contacts-mail__title">Почта</div>

                <div className="main__contacts-mail__text">
                  info@retaily.online
                </div>
              </div>
            </div>

            <div className="main__contacts-mail">
              <div className="main__contacts-mail__title">Адрес</div>

              <div className="main__contacts-mail__text">
                677000, г. Якутск, <br /> ул. Крупской 13, офис 505
              </div>
            </div>
          </div>

          <div className="main__contacts-map"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
