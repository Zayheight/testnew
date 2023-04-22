import React from "react";
import { Card } from 'antd';

import linecontact from "./line.png";
import emailcontact from "./envelope.png";
import facebookecontact from "./facebook.png";



function About1() {
  return (
    <div>
        
      <div>
        <h1 className="head-text"> About us</h1>
        <section className="abouts">
          <div className="about1">
            <p className="infobox-slimtext">เกี่ยวกับเรา </p>
            <span className="infobox-boldtext">Buffet EA </span>
            <span className="sub-boldtext">คือใคร?</span>
            <br></br>
            <p className="infobox-slimtext">
              Buffet EA เป็นผู้พัฒนาระบบเทรด Forex อัตโนมัติ
              โดยมีประสบการณ์การเทรดจริงในตลาดมาแล้วมากกว่า 5 ปี เราต้องการสร้าง
              EA ที่สามารถนำไปทดลองปรับเปลี่ยน Parameter และลอง Demo ได้ทุก
              features โดยที่ไม่ต้องซื้อ
              และเมื่อต้องการนำ EA ของเราไปใช้จริงจึงขอสิทธิในการใช้งาน EA ผ่านการติดต่อผู้ดูแลระบบ
            </p>
          </div>
          
        </section>

        <section className="abouts">
          <div className="about2">
            <p className="infobox-slimtext">ความพิเศษของเรา </p>
            <span className="sub-boldtext">ทำไมต้องเป็น</span>
            <span className="infobox-boldtext"> Buffet EA </span> <br></br>
            <div className="container">
              <div className="row">
                <div className="col-sm">สามารถนำ EA ไปใช้ได้เลยโดยไม่ต้องซื้อ เพื่อประหยัดต้นทุนในการลงทุนและสามารถปรับเปลี่ยนพารามิเตอร์ได้ในลักษณะบุฟเฟ่ไม่อั้น! </div>
                <div className="col-sm">การออกออเดอร์ (Indicators) สามารถใช้อินดิเคเตอร์ได้ดังนี้ 
                <li>Average Directional Movement Index </li> 
                <li>Moving Average Cross</li>
                <li>Bollinger Bands</li>
                <li>Commodity Channel Index </li>
                <li>LinearRegression Channel </li>
                </div>
                <div className="col-sm">การจัดการออเดอร์ได้โดยใช้เทคนิคได้ดังนี้
                <li>SL&TP Values</li> 
                <li>Martingale strategy </li> 
                <li>Average True Range(ATR)</li>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        <section className="abouts">
          <div className="about3">
            <span className="infobox-boldtext">Contact us</span> <br></br>
            <p className="infobox-slimtext">
              หากต้องการเข้าใช้งาน Expert Advisor สามารถติดต่อเราได้ผ่านผ่านช่องทางต่างๆดังนี้
            </p>
            <div className="container">
            <a href="https://line.me/ti/p/ay8m9YktE8" className="linkcontac">
            <Card hoverable className="contac"  >
                <img className="contenimg" src={linecontact} alt=""/>
                <p>Line</p>
              </Card>
            </a>
            <a href="mailto:s6204062616308@email.kmutnb.ac.th" className="linkcontac">
            <Card hoverable className="contac"  >
                <img className="contenimg" src={emailcontact} alt=""/>
                <p>Email</p>
              </Card>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100057122843991" className="linkcontac">
            <Card hoverable className="contac"  >
                <img className="contenimg" src={facebookecontact} alt=""/>
                <p>facebook</p>
              </Card>
            </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About1;
