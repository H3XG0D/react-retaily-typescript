import React from "react";
import "./../../Styles/Documents/Documents.scss";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Documents = () => {
  return (
    <div className="main__documents-bg">
      <div className="wrapper">
        <div className="main__documents">
          <div className="main__documents-side">
            <div className="main__documents-sidebar">
              <Sidebar />
            </div>

            <div className="main__documents-content">
              <div className="main__documents-title">Документы</div>

              <div className="main__documents-items">
                <div className="main__documents-item">
                  <div className="main__documents-subtitle">Правила работы</div>
                  <div className="main__documents-element"></div>
                </div>

                <div className="main__documents-item">
                  <div className="main__documents-subtitle">
                    Официальное уведомление
                  </div>
                  <div className="main__documents-element"></div>
                </div>

                <div className="main__documents-item">
                  <div className="main__documents-subtitle">
                    Политика в отношении обработки персональных данных
                  </div>
                  <div className="main__documents-element"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documents;
