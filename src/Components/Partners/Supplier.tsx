import React, {useState} from 'react';
import '../../Styles/Partners/Supplier.scss';
import {Button, Modal} from "antd";

const Supplier = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="main__supplier">
            <div className="main__supplier_title">КАК СТАТЬ ПОСТАВЩИКОМ?</div>
            <div className="main__supplier_progressBar"></div>
            <div className="main__supplier_num_one">1</div>
            <div className="main__supplier_document">
                Заключение договора
                <br/><Button type="primary" style={{
                fontSize: "14px",
                height: "32px",
                width: "200px",
                borderRadius: "20px",
                marginLeft: "15px",
                backgroundColor: "#0C97F9",
                marginTop: "15px"
            }}>СКАЧАТЬ ОБРАЗЕЦ</Button>
            </div>
            <div className="main__supplier_num_two">2</div>
            <div className="main__supplier_api">Передача API и интеграция с 1C
                <br/><Button type="primary" style={{
                    position: "absolute",
                    fontSize: "14px",
                    height: "32px",
                    width: "200px",
                    borderRadius: "20px",
                    backgroundColor: "#0C97F9",
                    marginTop: "21px",
                }}>СПЕЦИФИКАЦИЯ</Button>
            </div>
            <div className="main__supplier_num_three">3</div>
            <div className="main__supplier_test">Тестирование на фирменной торговой сети (при наличии)</div>
            <div className="main__supplier_num_four">4</div>
            <div className="main__supplier_user">Пользовательское и техническое сопровождение</div>
            <div className="main__supplier_btn_more">
                <Button type="primary" onClick={showModal} style={{
                    position: "absolute",
                    fontSize: "15px",
                    height: "35px",
                    width: "250px",
                    borderRadius: "20px",
                    backgroundColor: "#0C97F9",
                    marginTop: "535px",
                    left: "830px"
                }}>ПОДРОБНЕЕ</Button><Modal
                title="Подключение к системе Retaily (Ретейли) состоит из нескольких этапов." open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <p>1. Заключение договора оказания информационных услуг и назначение ответственного за интеграцию со
                    стороны поставщика;
                    На данном этапе подписывается договор оказания услуг любым удобным способом (ЭДО, сканом на
                    электронную почту или на бумаге Почтой России). Далее Поставщик обязан будет назначить
                    ответственного, который будет контактным лицом по всем вопросам, связанным с подключением к
                    системе.</p><br/>
                <p>2. Передача API и интеграция с 1C поставщика, настройка Личного кабинета на Web-портале, краткое
                    обучение общему функционалу и инструментам сайта. Срок – от 7 дней, в зависимости от скорости
                    настройки со стороны поставщика услуг 1С.</p><br/>
                <p>3. Тестирование. На фирменной торговой сети – при наличии. При отсутствии – на любом выбранном
                    Вами магазине. Срок от 7 дней в зависимости от пожеланий поставщика. На данном этапе
                    прорабатываются все специфические моменты, учитываются все пожелания поставщика.</p><br/>
                <p>4. После завершения тестового режима с согласия всех сторон начинается пилотный запуск на
                    открытый рынок.</p><br/>
                <p>5. Начало пользования и техническое сопровождение.</p>
            </Modal></div>
        </div>
    );
};

export default Supplier;