import React from 'react';
import './../../Styles/Partners/Feedback.scss';
import {Button} from "antd";

const Feedback = () => {
    return (
        <div className="main__feedback">
            <div className="main__feedback_title">
                ПИШИТЕ ПО ВСЕМ ВОПРОСАМ
            </div>
            <div className="main__feedback_input">
                <div className="main__feedback_input_name">
                    <input type="text" placeholder="ФИО"/>
                </div>
                <div className="main__feedback_input_email">
                    <input type="email" placeholder="E-mail"/>
                </div>
                <div className="main__feedback_input_company">
                    <input type="text" placeholder="Название компании"/>
                </div>
                <div className="main__feedback_input_website">
                    <input type="text" placeholder="Ссылка на сайт компании"/>
                </div>
                <div className="main__feedback_btn">
                    <Button type="primary" style={{
                        position: "absolute",
                        fontSize: "16px",
                        height: "40px",
                        width: "450px",
                        borderRadius: "20px",
                        backgroundColor: "#0C97F9",
                        marginTop: "45px",
                        right: "530px"
                    }}>ОТПРАВИТЬ</Button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;