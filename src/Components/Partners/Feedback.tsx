import React, { useState } from "react";
import "./../../Styles/Partners/Feedback.scss";
import { Button } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

type PropsType = {
  slider: boolean;
};

const Feedback = (props: PropsType) => {
  const [check, setCheck] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    fio: "",
    email: "",
    company: "",
    link: "",
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
      `ФИО: ${data.fio}, EMAIL: ${data.email}, COMPANY: ${data.company}, LINK: ${data.link}`
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
        style={{
          backgroundColor: props.slider ? "#FFF" : "#FAFAFA"
        }}
      />
    );
  };

  return (
    <div className={props.slider ? "" : "main__feedback-bg"}>
      <div className="wrapper">
        <div className="main__feedback">
          <div className="main__feedback_title">
            ПИШИТЕ <br /> ПО ВСЕМ <br /> ВОПРОСАМ
          </div>
          <div className="main__feedback_input">
            <div className="main__feedback_input_name">
              {renderInput("text", "ФИО", "fio")}
            </div>
            <div className="main__feedback_input_email">
              {renderInput("email", "E-mail", "email")}
            </div>
            <div className="main__feedback_input_company">
              {renderInput("text", "Название компании", "company")}
            </div>
            <div className="main__feedback_input_website">
              {renderInput("text", "Ссылка на сайт компании", "link")}
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
    </div>
  );
};

export default Feedback;
