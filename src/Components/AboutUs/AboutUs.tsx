import React from "react";
import "./../../Styles/AboutUs/About.scss";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const AboutUs = () => {
  return (
    <div className="main__about-bg">
      <div className="wrapper">
        <div className="main__about">
          <div className="main__about-side">
            <div className="main__about-sidebar">
              <Sidebar />
            </div>
            <div className="main__about-content">
              <div className="main__about-company">
                <div className="main__about-company_title">О компании</div>
                <div className="main__about-retailyImage"></div>
                <div className="main__about-text">
                  <div className="main__about-text_items">
                    <div className="main__about-text_title">
                      КОМПАНИЯ «РЕТЕЙЛИ» стартовала на рынке IT услуг в начале
                      2021 года.
                    </div>
                    <div className="main__about-text_content">
                      За короткий период мы стали официальными партнерами
                      крупнейших товаропроизводителей Республики Саха (Якутия)
                      (Россия) - АО «Якутский хлебокомбинат», ООО «Якутский
                      Гормолзавод», АО ФАПК «Якутия» и др.
                    </div>
                    <div className="main__about-text_content">
                      За неполный год работы мы смогли поднять продажи наших
                      партнеров, систематизировали работу торговых агентов,
                      оптимизировали работу диспетчеров (снижение нагрузки до
                      40%), создали уникальные инструменты продвижения новинок
                      на рынки сбыта, позволили сэкономить ФОТ, создали новую
                      полноценную экосистему для товаропроизводителей и
                      оптовиков по продвижению продуктов питания на рынки сбыта.
                      Уже сегодня, на нашу систему приходится более 50% продаж
                      наших партнеров.
                    </div>
                  </div>
                </div>
              </div>

              <div className="main__about-team">
                <div className="main__about-team__wrapper">
                  <div className="main__about-title">Команда</div>
                  <div className="main__about-teamImage">
                    <div className="main__about-image">
                      <div className="main__about-image__all">
                        <div className="main__about-image__image"></div>
                      </div>
                      <div className="main__about-image__mobile"></div>
                      <div className="main__about-image_title">ЗАХАРОВ</div>
                      <div className="main__about-image_subtitle-computer">
                        Афанасий Иванович
                      </div>
                      <div className="main__about-image_subtitle-mobile">
                        Афанасий Захаров
                      </div>
                      <div className="main__about-image_info-computer">
                        Основатель / <br /> генеральный директор
                      </div>
                      <div className="main__about-image_info-mobile">
                        Основатель & SEO
                      </div>
                    </div>

                    <div className="main__about-image">
                      <div className="main__about-image__all">
                        <div className="main__about-image__image2"></div>
                      </div>
                      <div className="main__about-image__mobile"></div>

                      <div className="main__about-image_title">ГОРОХОВ</div>
                      <div className="main__about-image_subtitle-computer">
                        Илья Гаврильевич
                      </div>
                      <div className="main__about-image_subtitle-mobile">
                        Афанасий Захаров
                      </div>
                      <div className="main__about-image_info-computer">
                        Финансовый директор
                      </div>
                      <div className="main__about-image_info-mobile">
                        Основатель & SEO
                      </div>
                    </div>

                    <div className="main__about-image">
                      <div className="main__about-image__all">
                        <div className="main__about-image__image3"></div>
                      </div>
                      <div className="main__about-image__mobile"></div>

                      <div className="main__about-image_title">СТАРОСТИН</div>
                      <div className="main__about-image_subtitle-computer">
                        Петр Николаевич
                      </div>
                      <div className="main__about-image_subtitle-mobile">
                        Афанасий Захаров
                      </div>
                      <div className="main__about-image_info-computer">
                        Технический директор
                      </div>
                      <div className="main__about-image_info-mobile">
                        Основатель & SEO
                      </div>
                    </div>

                    <div className="main__about-image">
                      <div className="main__about-image__all">
                        <div className="main__about-image__image4"></div>
                      </div>
                      <div className="main__about-image__mobile"></div>
                      <div className="main__about-image_title">БОЛЬШАКОВ</div>
                      <div className="main__about-image_subtitle-computer">
                        Егор Егорович
                      </div>
                      <div className="main__about-image_subtitle-mobile">
                        Афанасий Захаров
                      </div>
                      <div className="main__about-image_info-computer">
                        Главный архитектор <br /> программного <br />{" "}
                        обеспечения
                      </div>
                      <div className="main__about-image_info-mobile">
                        Основатель & SEO
                      </div>
                    </div>

                    <div className="main__about-image">
                      <div className="main__about-image__all">
                        <div className="main__about-image__image5"></div>
                      </div>
                      <div className="main__about-image__mobile"></div>
                      <div className="main__about-image_title">СЕДАЛИЩЕВ</div>
                      <div className="main__about-image_subtitle-computer">
                        Айаал Романович
                      </div>
                      <div className="main__about-image_subtitle-mobile">
                        Афанасий Захаров
                      </div>
                      <div className="main__about-image_info-computer">
                        Директор по работе <br /> с ключевыми клиентами
                      </div>
                      <div className="main__about-image_info-mobile">
                        Основатель & SEO
                      </div>
                    </div>

                    <div className="main__about-image">
                      <div className="main__about-image__all">
                        <div className="main__about-image__image6"></div>
                      </div>
                      <div className="main__about-image__mobile"></div>

                      <div className="main__about-image_title">ПОПОВ</div>
                      <div className="main__about-image_subtitle-computer">
                        Николай Сергеевич
                      </div>
                      <div className="main__about-image_subtitle-mobile">
                        Афанасий Захаров
                      </div>
                      <div className="main__about-image_info-computer">
                        Директор по <br /> управлению данными
                      </div>
                      <div className="main__about-image_info-mobile">
                        Основатель & SEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main__about-image_info-mobileReview">
                <div className="main__about-image_info-mobileReview_text">
                  · 10 штатных разработчиков
                </div>
                <div className="main__about-image_info-mobileReview_text">
                  · Более 10 лет опыта разработки крупных цифровых систем, в том{" "}
                  <br />
                  числе государственных
                </div>
                <div className="main__about-image_info-mobileReview_text">
                  · WEB, iOS и Android разработка
                </div>
                <div className="main__about-image_info-mobileReview_text">
                  · Ведение без данных
                </div>
                <div className="main__about-image_info-mobileReview_text">
                  · Собственные платформы и системы
                </div>
                <div className="main__about-image_info-mobileReview_text">
                  · Комплексная разработка и техническая поддержка
                </div>
                <div className="main__about-image_info-mobileReview_text">
                  · Персональный подход к решению задач заказчика
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__about-copyright">
        ООО «Ретейли», ИНН 1435357777/ КПП 143501001/ ОГРН 1211400000657 от
        28.01.2021 г.
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
