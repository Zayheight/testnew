import React from "react";
import img1 from "../../img/Investment data-amico.png";
import { Link } from "react-router-dom";

function ContenBox1() {
  return (
    <div className="box">
      <div className="infobox">
        <p className="infobox-slimtext">Expert Advisor </p>
        <p className="infobox-boldtext">สุดยอด <span className="infobox-boldtextcolor"> EA Forex</span> </p> 
         <br></br>
        <p className="infobox-boldtext">ที่เปิดให้ใช้โดยไม่ต้องซื้อ!! </p>
        <p className="infobox-slimtext">
          ทำกำไรเฉลี่ยเดือนละ 20-30% การันตีด้วยผล Back Test และสามารถเลือกแผนการเทรดได้ด้วยตัวเอง
        </p>
        
        <div className="card-info">
          <Link className="link_A" to="/About">
            <p>Take a look at what we do</p>
            <svg viewBox="0 0 20 10">
              <line x1="0" y1="5" x2="20" y2="5" />
              <line x1="15" y1="0" x2="20" y2="5" />
              <line x1="15" y1="10" x2="20" y2="5" />
            </svg>
          </Link>
        </div>
        
      </div>
      <div className="infobox">
        <img className="contenimg1" src={img1} alt=""/>
      </div>
    </div>
  );
}

export default ContenBox1;
