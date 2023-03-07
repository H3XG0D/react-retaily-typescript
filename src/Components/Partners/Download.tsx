import React from "react";
import "./../../Styles/Partners/Download.scss";
import { Button } from "antd";

const Download = () => {
  return (
    <div className="wrapper">
      <div className="main__download">
        <div className="main__download-items">
          <div className="main__download-item">
            <div className="main__download-title">
              СКАЧАЙТЕ ПРИЛОЖЕНИЕ ИЛИ <br /> ОФОРМЛЯЙТЕ ЗАКАЗЫ НА САЙТЕ <br />{" "}
              RETAILY.ONLINE!
            </div>
            <div className="main__download-btn">
              <Button
                type="primary"
                style={{
                  fontSize: "15px",
                  height: "35px",
                  width: "230px",
                  borderRadius: "20px",
                  backgroundColor: "#0C97F9",
                  top: "20px",
                }}
              >
                ПОПРОБОВАТЬ
              </Button>
            </div>
          </div>
          <div className="main__download-images">
            <div className="main__download-images_macbook"></div>
            <div className="main__download-images_iphone"></div>
          </div>
        </div>
        <div className="main__download-apps">
          <div className="main__download-app">
            <div className="main__download-app-play">
              <div className="main__download-app-googlePlay_image"></div>
              <div className="main__download-app-play_download">
                Загрузите в
                <div style={{ fontWeight: "600", fontFamily: "Montserrat" }}>
                  Google Play
                </div>
              </div>
            </div>
          </div>
          <div className="main__download-app">
            <div className="main__download-app-googlePlay_qrCode"></div>
          </div>
          <div className="main__download-app">
            <div className="main__download-app-play">
              <div className="main__download-app-applePlay_image"></div>
              <div className="main__download-app-play_download">
                Загрузите в
                <div style={{ fontWeight: "600", fontFamily: "Montserrat" }}>
                  App Store
                </div>
              </div>
            </div>
          </div>
          <div className="main__download-app">
            <div className="main__download-app-applePlay_qrCode"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
