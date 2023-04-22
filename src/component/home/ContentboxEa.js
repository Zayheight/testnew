
import React from "react";
import tradindimg from "../../img/6240057.jpg";
import { Link } from "react-router-dom";

function ContentBoxEa(){
    return(
        <div className="Box3">
            <div className="content1-home">
              <div className="container">
                <p className="infobox-boldtext">
                  EA Forex (Expert Advisor)คืออะไร?
                </p>
                <div className="row">
                  <div className="col-sm">
                    <p className="infobox-slimtext">
                      Expert Advisor หรือ EA คือ
                      โปรแกรมที่เขียนขึ้นเพื่อช่วยให้ผู้เทรดสามารถทำการซื้อ-ขายในตลาด
                      Forex ได้อัตโนมัติ
                      โดยผู้เทรดไม่จำเป็นต้องอยู่หน้าจอตลอดเวลาเพื่อรอเปิด-ปิดออร์เดอร์
                      โดยเป็นระบบที่ทำงานคล้ายกับบ็อท (BOT)
                      หรือหุ่นยนต์ที่ทำการซื้อ-ขายแทนเราได้อย่างเหมาะสม
                      ช่วยให้ผู้เทรดไม่พลาดโอกาสที่ดีในการเทรดและทำกำไรอย่างมีประสิทธิภาพ
                    </p>
                    <Link to="/ArticleEa"> <button size="large" className="seemorebtn" type="primary"  >
                      อ่านเพิ่มเติม
                    </button></Link>
                    
                  </div>

                  <div className="wrap">
                    <img width="450" height="360" className="imgEais" src={tradindimg} alt=""/>
                  </div>

                </div>
              
              </div>
            </div>
        </div>
    );
}

export default  ContentBoxEa ;