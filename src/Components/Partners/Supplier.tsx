import React, { useState } from "react";
import "../../Styles/Partners/Supplier.scss";
import { Button, Modal } from "antd";

const Supplier = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main__supplier-bg">
      <div className="wrapper">
        <div className="main__supplier">
          <div className="main__supplier_title">КАК СТАТЬ ПОСТАВЩИКОМ?</div>
          <div className="main__supplier-step">
            <div className="main__supplier-step-leftSide">
              <div className="main__supplier-step-item">
                <div className="main__supplier-step-item_hide">1</div>
                <div className="main__supplier-step-item_text">
                  Заключение договора
                </div>
                <div className="main__supplier-step-item_btn">
                  <Button
                    type="primary"
                    style={{
                      fontSize: "14px",
                      height: "32px",
                      width: "200px",
                      borderRadius: "20px",
                      backgroundColor: "#0C97F9",
                    }}
                  >
                    СКАЧАТЬ ОБРАЗЕЦ
                  </Button>
                </div>
              </div>
              <div className="main__supplier-step-item">
                <div className="main__supplier-step-item_hide">3</div>
                <div className="main__supplier-step-item_text">
                  Тестирование на фирменной торговой сети (при наличии)
                </div>
                <div className="main__supplier-step-item_btn"></div>
              </div>
            </div>

            <div className="main__supplier-step-bar">
              <div className="main__supplier-step-bar-line"></div>
              <div className="main__supplier-step-bar-items">
                <div className="main__supplier-step-bar-item">
                  <div className="main__supplier-step-bar-item_circle">
                    <div className="main__supplier-step-bar-item_circle__active"></div>
                  </div>
                </div>

                <div className="main__supplier-step-bar-item">
                  <div className="main__supplier-step-bar-item_circle"></div>
                </div>
                <div className="main__supplier-step-bar-item">
                  <div className="main__supplier-step-bar-item_circle"></div>
                </div>
                <div className="main__supplier-step-bar-item">
                  <div className="main__supplier-step-bar-item_circle"></div>
                </div>
                <div className="main__supplier-step-bar-item">
                  <div className="main__supplier-step-bar-item_circle"></div>
                </div>
              </div>
            </div>

            <div className="main__supplier-step-rightSide">
              <div className="main__supplier-step-item">
                <div className="main__supplier-step-item_hide">2</div>
                <div className="main__supplier-step-item_text1">
                  Передача API и интеграция с 1С поставщика
                </div>
                <div className="main__supplier-step-item_btn1">
                  <Button
                    type="primary"
                    style={{
                      fontSize: "14px",
                      height: "32px",
                      width: "200px",
                      borderRadius: "20px",
                      backgroundColor: "#0C97F9",
                    }}
                  >
                    СПЕЦИФИКАЦИЯ
                  </Button>
                </div>
              </div>
              <div className="main__supplier-step-item">
                <div className="main__supplier-step-item_hide">4</div>
                <div className="main__supplier-step-item_text">
                  Пользование и техническое сопровождение
                </div>
                <div className="main__supplier-step-item_btn"></div>
              </div>
            </div>
          </div>

          <div className="main__supplier-btn">
            <Button
              type="primary"
              onClick={showModal}
              style={{
                fontSize: "15px",
                height: "35px",
                width: "250px",
                borderRadius: "20px",
                backgroundColor: "#0C97F9",
              }}
            >
              ПОДРОБНЕЕ
            </Button>
          </div>
          <div className="main__supplier_btn_more">
            <Modal
              title="Подключение к системе Retaily (Ретейли) состоит из нескольких этапов."
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>
                1. Заключение договора оказания информационных услуг и
                назначение ответственного за интеграцию со стороны поставщика;
                На данном этапе подписывается договор оказания услуг любым
                удобным способом (ЭДО, сканом на электронную почту или на бумаге
                Почтой России). Далее Поставщик обязан будет назначить
                ответственного, который будет контактным лицом по всем вопросам,
                связанным с подключением к системе.
              </p>
              <br />
              <p>
                2. Передача API и интеграция с 1C поставщика, настройка Личного
                кабинета на Web-портале, краткое обучение общему функционалу и
                инструментам сайта. Срок – от 7 дней, в зависимости от скорости
                настройки со стороны поставщика услуг 1С.
              </p>
              <br />
              <p>
                3. Тестирование. На фирменной торговой сети – при наличии. При
                отсутствии – на любом выбранном Вами магазине. Срок от 7 дней в
                зависимости от пожеланий поставщика. На данном этапе
                прорабатываются все специфические моменты, учитываются все
                пожелания поставщика.
              </p>
              <br />
              <p>
                4. После завершения тестового режима с согласия всех сторон
                начинается пилотный запуск на открытый рынок.
              </p>
              <br />
              <p>5. Начало пользования и техническое сопровождение.</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Supplier;
