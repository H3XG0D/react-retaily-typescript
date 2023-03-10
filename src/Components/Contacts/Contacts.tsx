import React from "react";
import "./../../Styles/Contacts/Contacts.scss";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Contacts = () => {
  return (
    <div className="main__contacts-bg">
      <div className="wrapper">
        <div className="main__contacts">
          <div className="main__contacts-side">
            <div className="main__contacts-sidebar">
              <Sidebar />
            </div>

            <div className="main__contacts-content">
              <div className="main__contacts-title">Контакты</div>

              <div className="main__contacts-container">
                <div className="main__contacts-rows">
                  <div className="main__contacts-address">
                    <div className="main__contacts-mail">
                      <div className="main__contacts-mail__title">Почта</div>

                      <div className="main__contacts-mail__text">
                        info@retaily.online
                      </div>
                    </div>
                  </div>

                  <div className="main__contacts-mail">
                    <div className="main__contacts-mail__title"> Почтовый адрес</div>

                    <div className="main__contacts-mail__text">
                      677000, г. Якутск, <br /> ул. Крупской 13, офис 505
                    </div>
                  </div>
                </div>

                <div className="main__contacts-mobile">
                  <div className="main__contacts-mail__title">
                    Фактический адрес
                  </div>

                  <div className="main__contacts-mail__text">
                    677000, г. Якутск, ул. Петра <br /> Алексеева, дом. 17, кв.
                    74
                  </div>
                </div>
              </div>

              <div className="main__contacts-map"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
