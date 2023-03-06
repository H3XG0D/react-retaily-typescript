import React, { useState } from "react";
import "./../../Styles/Partners/Feedback.scss";
import { Button } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const Feedback = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    fio: "",
    email: "",
    company: "",
    link: "",
  });
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
      `ФИО: ${data.fio}, EMAIL: ${data.email}, COMPANY: ${data.company}, LINK: ${data.link}`
    );
  };

  return (
    <div className="main__feedback">
      <div className="main__feedback_title">ПИШИТЕ ПО ВСЕМ ВОПРОСАМ</div>
      <div className="main__feedback_input">
        <div className="main__feedback_input_name">
          <input
            type="text"
            placeholder="ФИО"
            onChange={(e: any) => {
              changeData(e, "fio");
            }}
          />
        </div>
        <div className="main__feedback_input_email">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e: any) => {
              changeData(e, "email");
            }}
          />
        </div>
        <div className="main__feedback_input_company">
          <input
            type="text"
            placeholder="Название компании"
            onChange={(e: any) => {
              changeData(e, "company");
            }}
          />
        </div>
        <div className="main__feedback_input_website">
          <input
            type="text"
            placeholder="Ссылка на сайт компании"
            onChange={(e: any) => {
              changeData(e, "link");
            }}
          />
        </div>
        <div className="main__feedback-checkbox">
          <div
            className="main__feedback-checkbox_check"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <div className="main__feedback-checkbox_check__active"></div>
            ) : null}
          </div>
          <div className="main__feedback-checkbox_text">
            Я согласен на обработку персональных данных
          </div>
        </div>
        <div className="main__feedback_btn">
          <Button
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
              position: "absolute",
              fontSize: "16px",
              height: "40px",
              width: "450px",
              borderRadius: "20px",
              backgroundColor:
                !check ||
                data.fio === "" ||
                data.email === "" ||
                data.company === "" ||
                data.link === ""
                  ? "gray"
                  : "#0C97F9",
              marginTop: "45px",
              right: "530px",
            }}
          >
            ОТПРАВИТЬ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
