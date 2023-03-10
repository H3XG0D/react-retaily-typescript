import React, { useEffect, useState } from "react";
import "./../../Styles/Documents/Documents.scss";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Documents = () => {
  const [data, setData] = useState<any>([
    { name: "Правила работы", id: 0, expanded: false },
    { name: "Официальное уведомление", id: 1, expanded: false },
    {
      name: "Политика в отношении обработки персональных данных",
      id: 2,
      expanded: false,
    },
  ]);

  function compareNumeric(a: any, b: any) {
    if (a.id > b.id) return 1;
    if (a.id === b.id) return 0;
    if (a.id < b.id) return -1;
  }

  let click = (id: number) => {
    let newData = data;

    let row = newData.find((a: any) => a.id === id);

    if (row.expanded === true) {
      row.expanded = false;
    } else {
      row.expanded = true;
    }

    let filterData = newData.filter((a: any) => a.id !== id);

    filterData.push(row);

    setData(filterData.sort(compareNumeric));
  };

  let renderItems = () => {
    let jsx: any = [];
      data.map((a: any) => {
        jsx.push(
          <div className="main__documents-item" onClick={() => click(a.id)}>
            <div className="main__documents-subtitle">
              {a.name}
              {a.expanded === true ? "www" : ""}
            </div>
            <div className="main__documents-element"></div>
            <div className="main__document-item__child">
            </div>
          </div>
        );
      });
    return jsx;
  };

  return (
    <div className="main__documents-bg">
      <div className="wrapper">
        <div className="main__documents">
          <div className="main__documents-side">
            <div className="main__documents-sidebar">
              <Sidebar />
            </div>

            <div className="main__documents-content">
              <div className="main__documents-title">Документы</div>

              <div className="main__documents-items">{renderItems()}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documents;
