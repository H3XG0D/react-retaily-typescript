import React from "react";
import "../../Styles/Partners/Analytics.scss";

type PropsType = {
  slider: boolean;
};

const Analytics = (props: PropsType) => {
  return (
    <div className="wrapper">
      <div className="main__analytics">
        <div className="main__analytics_title">
          СОХРАНЯЙТЕ ВРЕМЯ И ДЕНЬГИ ДЛЯ ВАШЕГО БИЗНЕСА
        </div>
        {props.slider ? (
          <div className="main__analytics-itemsTwo">
            <div className="main__analytics_subtitle_itemTwo">
              Оформляйте заявки
              <div className="main__analytics_number_itemTwo">
                без лишних звонков
              </div>
            </div>
            <div className="main__analytics_subtitle_itemTwo">
              Заключайте договора
              <div className="main__analytics_number_itemTwo">
                с поставщиками
              </div>
            </div>
            <div className="main__analytics_subtitle_itemTwo">
              Полный каталог
              <div className="main__analytics_number_itemTwo">
                продукции поставщика
              </div>
            </div>
          </div>
        ) : (
          <div className="main__analytics-items">
            <div className="main__analytics_subtitle_item">
              заказов в месяц
              <div className="main__analytics_number_item">&gt;10 000</div>
            </div>
            <div className="main__analytics_subtitle_item">
              предпринимателей
              <div className="main__analytics_number_item">&gt;1000</div>
            </div>
            <div className="main__analytics_subtitle_item">
              увеличим средний чек
              <div className="main__analytics_number_item">от 20%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
