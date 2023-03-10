import React, {useEffect} from 'react';
import './../../Styles/Sidebar/Sidebar.scss';
import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    let location = useLocation();

    useEffect(() => {
        console.log(location)
    }, [location]);


    return (
        <div className="main__sidebar-bg">
                <div className="main__sidebar">
                    <div className="main__sidebar-items">
                        <NavLink to="/AboutUs" className={"main__sidebar-item " + (location.pathname === '/AboutUs' ? 'main__sidebar-item__active' : '') }>
                            О компании
                        </NavLink>

                        <NavLink to="/Documents" className={"main__sidebar-item " + (location.pathname === '/Documents' ? 'main__sidebar-item__active' : '') }>
                            Документы
                        </NavLink>

                        <NavLink to="/Vacancies" className={"main__sidebar-item " + (location.pathname === '/Vacancies' ? 'main__sidebar-item__active' : '') }>
                            Вакансии
                        </NavLink>

                        <NavLink to="/Contacts" className={"main__sidebar-item " + (location.pathname === '/Contacts' ? 'main__sidebar-item__active' : '') }>
                            Контакты
                        </NavLink>
                    </div>
                </div>
        </div>
    );
};

export default Sidebar;