import React from "react";
import "./../../Styles/AboutUs/About.scss";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div className="main__about-bg">
      <div className="wrapper">
        <div className="main__about">
          <div className="main__about-company">
            <div className="main__about-title">О компании</div>
            <div className="main__about-retailyImage"></div>
            <div className="main__about-text">
              <div className="main__about-text_items">
                <div className="main__about-text_title">
                  КОМПАНИЯ «РЕТЕЙЛИ» стартовала на рынке IT услуг в начале 2021
                  года.
                </div>
                <div className="main__about-text_content">
                  За короткий период мы стали официальными партнерами крупнейших
                  товаропроизводителей Республики Саха (Якутия) (Россия) - АО
                  «Якутский хлебокомбинат», ООО «Якутский Гормолзавод», АО ФАПК
                  «Якутия» и др.
                </div>
                <div className="main__about-text_content">
                  За неполный год работы мы смогли поднять продажи наших
                  партнеров, систематизировали работу торговых агентов,
                  оптимизировали работу диспетчеров (снижение нагрузки до 40%),
                  создали уникальные инструменты продвижения новинок на рынки
                  сбыта, позволили сэкономить ФОТ, создали новую полноценную
                  экосистему для товаропроизводителей и оптовиков по продвижению
                  продуктов питания на рынки сбыта. Уже сегодня, на нашу систему
                  приходится более 50% продаж наших партнеров.
                </div>
              </div>
            </div>
          </div>

          <div className="main__about-team">
            <div className="main__about-team__wrapper">
              <div className="main__about-title">Команда</div>
              <div className="main__about-teamImage">
                <div className="main__about-image">
                  <div className="main__about-image__image"></div>
                  <div className="main__about-image_title">ЗАХАРОВ</div>
                  <div className="main__about-image_subtitle">
                    Афанасий Иванович
                  </div>
                  <div className="main__about-image_info">
                    Основатель / <br /> генеральный директор
                  </div>
                </div>

                <div className="main__about-image">
                  <div className="main__about-image__image2"></div>

                  <div className="main__about-image_title">ГОРОХОВ</div>
                  <div className="main__about-image_subtitle">
                    Илья Гаврильевич
                  </div>
                  <div className="main__about-image_info">
                    Финансовый директор
                  </div>
                </div>

                <div className="main__about-image">
                  <div className="main__about-image__image3"></div>

                  <div className="main__about-image_title">СТАРОСТИН</div>
                  <div className="main__about-image_subtitle">
                    Петр Николаевич
                  </div>
                  <div className="main__about-image_info">
                    Технический директор
                  </div>
                </div>

                <div className="main__about-image">
                  <div className="main__about-image__image4"></div>

                  <div className="main__about-image_title">БОЛЬШАКОВ</div>
                  <div className="main__about-image_subtitle">
                    Егор Егорович
                  </div>
                  <div className="main__about-image_info">
                    Главный архитектор <br /> программного <br /> обеспечения
                  </div>
                </div>

                <div className="main__about-image">
                  <div className="main__about-image__image5"></div>

                  <div className="main__about-image_title">СЕДАЛИЩЕВ</div>
                  <div className="main__about-image_subtitle">
                    Айаал Романович
                  </div>
                  <div className="main__about-image_info">
                    Директор по работе <br /> с ключевыми клиентами
                  </div>
                </div>

                <div className="main__about-image">
                  <div className="main__about-image__image6"></div>

                  <div className="main__about-image_title">ПОПОВ</div>
                  <div className="main__about-image_subtitle">
                    Николай Сергеевич
                  </div>
                  <div className="main__about-image_info">
                    Директор по <br /> управлению данными
                  </div>
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

export default AboutUs;
