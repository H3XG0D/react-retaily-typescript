import React from "react";
import "./../../Styles/Vacancies/Vacancies.scss";
import Footer from "../Footer/Footer";

const Vacancies = () => {
  return (
    <div className="main__vacancies-bg">
      <div className="wrapper">
        <div className="main__vacancies">
          <div className="main__vacancies-title">Вакансии</div>
          <div className="main__vacancies-content">
            <div className="main__vacancies-offer">
              <div className="main__vacancies-subtitle">
                Региональный представитель
                <div className="main__vacancies-subtitle_cost">
                  100 000 руб./месяц и выше
                </div>
              </div>
            </div>

            <div className="main__vacancies-things">
              <div className="main__vacancies-text">
                Требуемый опыт работы: 3—6 лет
                <div className="main__vacancies-text">
                  Частичная занятость, удаленная работа
                  <div className="main__vacancies-text">
                    Воможно временное оформление: договор услуг, подряда, ГПХ,
                    самозанятые, ИП
                  </div>
                </div>
              </div>

              <div>
                <div className="main__vacancies-bold_text">Обязанности:</div>
                <div className="main__vacancies-text">
                  Работа по подключению новых контрагентов к системе
                  автоматизированной обработки заявок (Retaily) сопровождение
                  сделок по подключению новых контрагентов (организация встреч с
                  ТОП-менеджментом крупных региональных производителей продуктов
                  питания, оптовых поставщиков, доведение до первых продаж
                  поставщика через систему Retaily).
                </div>
              </div>

              <div>
                <div className="main__vacancies-bold_text">Требования:</div>
                <div className="main__vacancies-text">
                  Большой опыт работы в коммерческих подразделениях
                  хлебопекарен, молокозаводов, мясных комбинатов и др.
                  производствах продуктов питания. Сильные коммуникационные
                  навыки и навыки ведения деловых переговоров.
                </div>
              </div>

              <div>
                <div className="main__vacancies-bold_text">Условия:</div>
                <div className="main__vacancies-rules">
                  <div className="main__vacancies-text">
                    · Совмещение с основной работой (дополнительный заработок)
                  </div>
                  <div className="main__vacancies-text">· Свободный график</div>
                  <div className="main__vacancies-text">· Удаленная работа</div>
                  <div className="main__vacancies-text">
                    · Высокий % от сделок
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main__vacancies-feedback">
            Резюме направлять на info@retaily.online
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vacancies;
