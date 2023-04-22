import React from "react";

import Eaitem from "./EA_item";
import Settingitem from "./settingitem";
import { Divider ,Typography} from 'antd';

function ContentProduct() {
  const { Paragraph} = Typography;


  return (
    <div className="containerProduct">
      <div className="container1">
        <p className="infobox-medium">Buffet EA</p>

        <p className="infobox-headingtext">Free Downlode Expert Advisor </p>
        <Eaitem></Eaitem>
        <p className="infobox-headingtext">Downlode setting  </p>
        <Paragraph className="Paragraph-howto">
        <ul>
          <li>
            <p >ติดต่อสอบถามแอดมินเพื่อขอสิทธิ์เข้าใช้งาน </p> 
          </li>
          <li>
            <p >เข้าสู่ระบบเพื่อยืนยันตัวตน</p>
          </li>
          <li>
            <p >คลิ๊กดาวน์โหลดบนเว็บไซต์</p>
          </li>
        </ul>
        </Paragraph>
        <Settingitem></Settingitem>
        <Divider className="Divider" plain></Divider>


        <p className="infobox-slimtext">
          Expert Advisor หรือ EA ของเราประกอบไปด้วยส่วนของการออกออเดอร์
          (Indicators)ซึ่งจะประกอบไปด้วย
          <li>Average Directional Movement Index </li>
          <li>Moving Average Cross</li>
          <li>Bollinger Bands</li>
          <li>Commodity Channel Index </li>
          <li>LinearRegression Channel </li>
          และการจัดการออร์เดอร์ ประกอบไปด้วย
          <li>SL&TP Values</li>
          <li>Martingale strategy </li>
          <li>Average True Range(ATR)</li> 
          ที่ท่านจะสามารถนำไปประยุกต์ใช้ได้ตามที่ต้องการ ในลักษณะของการปรับแต่งพารามิเตอร์
        </p>

        
      </div>
    </div>
  );
}

export default ContentProduct;
