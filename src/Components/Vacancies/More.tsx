import React, { useState } from "react";
import "./../../Styles/Vacancies/More.scss";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Button, message, Upload, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { NavLink } from "react-router-dom";

const props: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const More = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    name: "",
    surname: "",
    telephone: "",
  });
  // eslint-disable-next-line
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  let changeData = (e: any, field: string) => {
    let newData = data;
    newData[field] = e.target.value;
    setData(newData);
  };

  let sendMessage = () => {
    alert(
      `ИМЯ: ${data.name}, ФАМИЛИЯ: ${data.surname}, НОМЕР ТЕЛЕФОНА: ${data.telephone}`
    );
  };

  let renderInput = (type: string, name: string, field: string) => {
    return (
      <input
        type={type}
        placeholder={name}
        onChange={(e: any) => {
          changeData(e, field);
        }}
      />
    );
  };
  return (
    <div className="main__more-bg">
      <div className="main__more">
        <div className="main__vacancies-side">
          <div className="main__vacancies-sidebar">
            <Sidebar />
          </div>

          <div className="main__more-header">
            <div className="main__more-header__title">
              <NavLink
                to="/Vacancies"
                style={{ textDecoration: "none", color: "#7D7D7D" }}
              >
                Вакансии/
              </NavLink>
              Менеджер по продажам
            </div>
            <div className="main__more-header__subtitle">
              от 135 000 - 150 000 руб./месяц
            </div>
          </div>

          <div className="main__more-container">
            <div className="main__more-info">
              <div className="main__more-content">
                <div className="main__more-content__subcontent">
                  Обязанности: <br />
                  - Сопровождение и мониторинг сетевой составляющей работы
                  серверов; <br />
                  - работа с системами автоматизации конфигураций; <br />
                  - настройка систем виртуализации; <br />
                  - ввод в строй и техническое сопровождение серверного
                  оборудования; <br />- настройка и обслуживание сервисов под
                  управлением ОС Linux; <br />
                  - документирование решений своих задач. <br />
                </div>

                <div className="main__more-content__subcontent">
                  Требования: <br />
                  - Знание Docker, систем виртуализации, Linux; <br />
                  - опыт работы с СУБД (MySQL/Postgres); <br />
                  - понимание модели OSI. <br />
                </div>

                <div className="main__more-content__subcontent">
                  Желательно: <br />
                  - плюсом будет умение настройки DNS-серверов, VPN: Strongswan,
                  wireguard, системы. <br />
                  виртуализации: QEMU, язык программирования: Python; <br />-
                  умение читать, понимать, создавать техническую документацию.{" "}
                  <br />
                </div>

                <div className="main__more-content__subcontent">
                  Условия работы: <br />
                  - стабильную заработную плату, соблюдение ТК РФ, ДМС со
                  стоматологией; <br />
                  - современные MacBook Pro и другое необходимое для работы
                  оборудование; <br />
                  - гибридный график работы с возможностью частичной удаленной
                  занятости; <br />
                  - неограниченные возможности профессионального и карьерного
                  роста, регулярное внешнее и внутреннее обучение от наших
                  партнеров; <br />
                  - частично или полностью оплачиваемые дополнительные обучающие
                  курсы, в том числе занятия английским языком; <br />
                  - бесплатное посещение всех мастер-классов в центре
                  IT-развития “Смарт”; <br />- возможность стать частью
                  международной команды профессионалов и просто хороших людей,
                  которые все вместе создают одну из самых крутых историй успеха
                  в мировой IT-индустрии.
                </div>
              </div>
            </div>
          </div>

          <div className="main__more-feedback">
            <div className="main__more-feedback-header">
              <div className="main__more-feedback-header__title">
                ЧТОБЫ НАЧАТЬ ЗАРАБАТЫВАТЬ
              </div>
              <div className="main__more-feedback-header__subtitle">
                Введите фамилию, имя и номер телефона.
              </div>
            </div>
            <div className="main__more-feedback_input">
              <div className="main__more-feedback_input_name">
                {renderInput("text", "Имя", "name")}
              </div>
              <div className="main__more-feedback_input_email">
                {renderInput("text", "Фамилия", "surname")}
              </div>
              <div className="main__more-feedback_input_company">
                {renderInput("text", "Номер телефона", "telephone")}
              </div>
            </div>
            <div className="main__more-file">
              <Upload {...props}>
                <Button
                  icon={<UploadOutlined />}
                  style={{ backgroundColor: "#FAFAFA" }}
                >
                  ПРИКРЕПИТЬ ФАЙЛ
                </Button>
              </Upload>
            </div>
            <div className="main__more-checkbox">
              <div
                className="main__more-checkbox_check"
                onClick={() => {
                  setCheck(!check);
                }}
              >
                {check ? (
                  <div className="main__more-checkbox_check__active"></div>
                ) : null}
              </div>
              <div className="main__more-checkbox_text">
                Нажимая «отправить», вы даёте{" "}
                <div style={{ color: "#0C97F9" }}>
                  {" "}
                  согласие на обработку персональных данных{" "}
                </div>
              </div>
            </div>
            <div className="main__more_btn">
              <Button
                className="main__more-ant"
                type="primary"
                disabled={
                  !check ||
                  data.fio === "" ||
                  data.email === "" ||
                  data.company === "" ||
                  data.link === ""
                }
                onClick={() => {
                  sendMessage();
                }}
                style={{
                  fontSize: "16px",
                  height: "40px",
                  width: "610px",
                  borderRadius: "20px",
                  backgroundColor:
                    !check ||
                    data.fio === "" ||
                    data.email === "" ||
                    data.company === "" ||
                    data.link === ""
                      ? "color: rgba(12, 151, 249, 0.1)"
                      : "#0C97F9",
                  top: "30px",
                }}
              >
                ОТПРАВИТЬ
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default More;
