import React from "react";
import notime from '../../img/time-management.png'
import lowbudget from'../../img/expense.png';
import loss from '../../img/candlestick-chart.png'
import trader from '../../img/broker.png'
import study from '../../img/study.png'
import profit from '../../img/stock-market.png'
function ContenBox2() {
  return (
    <div className="box2">
      <div className="infobox">
        <p className="infobox-boldtext">ระบบเทรดอัตโนมัติ Buffet EA ที่จะช่วยให้คุณมีอิสระทางการเงินมากขึ้น!! </p> 
        
        <p className="infobox-slimtext">
        Buffet EA เป็นผู้พัฒนาระบบเทรด Forex อัตโนมัติ 
        โดยมีประสบการณ์การเทรดจริงในตลาดมาแล้วมากกว่า 5 ปี เราต้องการสร้าง EA ที่สามารถนำไปทดลองปรับเปลี่ยน Parameter 
        และลอง Demo ได้ทุก features โดยที่ไม่ต้องซื้อ ซึ่ง ช่วยให้ผู้เทรดไม่พลาดโอกาสที่ดีในการเทรดและทำกำไรอย่างมีประสิทธิภาพ
        </p>
      </div>
      <div className="infobox2">
          <div className="infobox2-items">
          <div className="itemwrapper">
            <div className="infobox2-items-item">
              <img src={notime} width="80" height="80" alt=""/>
            </div>
            <p>เหมาะกับคนที่ไม่มีเวลาในการเทรด</p>

          </div>
          <div className="itemwrapper">
            <div className="infobox2-items-item">
            <img src={study} width="80" height="80" alt=""/>
            </div>
            <p>เหมาะกับคนที่อยากเริ่มเทรดแต่เริ่มต้นไม่ถูก</p>
          </div> 
          <div className="itemwrapper">
            <div className="infobox2-items-item">
            <img src={trader} width="80" height="80" alt=""/>
            </div>
            <p>เหมาะสำหรับนักเทรดมือใหม่ที่ขาดความรู้และประสบการณ์</p>
          </div>

          <div className="itemwrapper">
            <div className="infobox2-items-item">
            <img src={lowbudget} width="80" height="80" alt=""/>
            </div>
            <p>เหมาะกับคนที่งบประมาณงบประมาณเริ่มต้นน้อย</p>
          </div>

          <div className="itemwrapper">
            <div className="infobox2-items-item">
              <img src={loss} width="80" height="80" alt=""/>
            </div>
            <p>เหมาะกับคนที่เริ่มต้นเทรดแล้วแต่ก็ยังไม่ได้กำไร</p>
          </div>

          <div className="itemwrapper">
            <div className="infobox2-items-item">
            <img src={profit} width="80" height="80" alt=""/>
            </div>
            <p>เหมาะกับคนที่ต้องการทำกำไรได้เรื่อยๆ</p>
          </div>
          </div>
        </div>
    </div>

    
  );
}

export default ContenBox2;
