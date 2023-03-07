import React from 'react';
import Content from "./Content";
import Strategy from "./Strategy";
import Retake from "./Retake";
import Analytics from "./Analytics";
import Supplier from "./Supplier";
import Faq from "./Faq";
import Feedback from "./Feedback";
import Footer from "../Footer/Footer";
import Download from "./Download";

type PropsType = {
    slider: boolean
}
const Partners = (props: PropsType) => {
    return (
        <div>
            {<Content />}
            <Strategy />
            {<Retake slider={props.slider}/>}
            <Analytics slider={props.slider}/>
            <Supplier />
            {/* Если слайдер активирован, то подключается новый компонент */}
            {props.slider ? <Download /> : null}
            <Faq slider={props.slider}/>
            <Feedback slider={props.slider} />
            <Footer />
        </div>
    );
};

export default Partners;