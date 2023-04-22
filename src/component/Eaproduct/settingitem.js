import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button,  Result, Modal } from "antd";
import { Card, Col, Row } from 'antd';


import { useState } from "react";
import useToken from "../../page/useToken";
import { useNavigate } from "react-router-dom";

const ZIP_FILE_CADCHF_26_50 = "https://localhost:3000/mickey_CADCHF_26_50.zip";
const ZIP_FILE_EURAUD_50_100 = "https://localhost:3000/mickey_EURAUD_50_100.zip";
const ZIP_FILE_GBPNZD_6_20_001 = "https://localhost:3000/mickey_GBPNZD_6_20_001.zip";
const ZIP_FILE_GBPNZD_30_105_005 = "://localhost:3000/mickey_GBPNZD_30_105_005.zip";
const ZIP_FILE_GOLD_50_200 = "https://localhost:3000/mickey_GOLD_50_200.zip";


function Settingitem() {

  const { token, setToken } = useToken();
  const [ filedownlode, setfile ] = useState();

  const navigate = useNavigate();
  const [modal2Open, setModal2Open] = useState(false);

  const Downloadfile = (url) => {
    const filename = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("downlode", filename);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
    setModal2Open(false);
  };

  const CheckLogin=()=>{
    if(!token){
        setModal2Open(true)
    }else{
        console.log(filedownlode);
        if(filedownlode ==="CADCHF_26_50"){
            Downloadfile(ZIP_FILE_CADCHF_26_50);
        }else if (filedownlode==="EURAUD_50_100"){
            Downloadfile(ZIP_FILE_EURAUD_50_100);
        }else if (filedownlode==="GBPNZD_6_20_001"){
            Downloadfile(ZIP_FILE_GBPNZD_6_20_001);
        }else if (filedownlode==="GBPNZD_30_105_005"){
            Downloadfile(ZIP_FILE_GBPNZD_30_105_005);
        }else if (filedownlode==="GOLD_50_200"){
            Downloadfile(ZIP_FILE_GOLD_50_200);
        }
        
    }
  }

  const handleOk =()=>{
    navigate("/Signin");
    setModal2Open(false);
  }

  return (
    <div className="settingitems" >
        <Row className="settingitems-flex"gutter={20}>
            
        <Col className="Col-flex" span={8}>
        <Card className="Carditem" title="CAD / CHF" bordered={false} >
            <p>profit 26 usd/month <br></br> max drawdown 100 usd/month</p>
            <br></br>
            <Button type="primary" icon={<DownloadOutlined />} size={"middle"}
            onFocus={() => {setfile("CADCHF_26_50")}}
            onClick={CheckLogin} 
            okText="Go sing in"
            cancelText="Cancel">Download</Button>
        </Card>
        </Col>

        <Col className="Col-flex"span={8}>
        <Card className="Carditem" title="EUR / AUD" bordered={false}>
            <p>profit 50 usd/month <br></br>max drawdown 50 usd/month</p>
            <br></br>
            <Button type="primary" icon={<DownloadOutlined />} size={"middle"}
            onFocus={() => {setfile("EURAUD_50_100")}}
            onClick={CheckLogin}
            okText="Go sing in"
            cancelText="Cancel">Download
            </Button>
        </Card>
        </Col>

        <Col className="Col-flex"span={8}>
        <Card className="Carditem" title="GBP / NZD" bordered={false}>
            <p>profit 6 usd/month <br></br>max drawdown 20 usd/month</p>
            <br></br>
            <Button type="primary" icon={<DownloadOutlined />} size={"middle"}
            onFocus={() => {setfile("GBPNZD_6_20_001")}}
            onClick={CheckLogin}
            okText="Go sing in"
            cancelText="Cancel">Download
            </Button>
        </Card>
        </Col>

        <Col className="Col-flex"span={8}>
        <Card className="Carditem"   title="GBP / NZD " bordered={false}>
        <p>profit 30 usd/month <br></br> max drawdown 105 usd/month</p>
            <br></br>
            <Button type="primary" icon={<DownloadOutlined />} size={"middle"}
            onFocus={() => {setfile("GBPNZD_30_105_005")}}
            onClick={CheckLogin}
            okText="Go sing in"
            cancelText="Cancel">Download
            </Button>
        </Card>
        </Col>

        <Col className="Col-flex"span={8}>
        <Card className="Carditem"  title="GOLD" bordered={false}>
            <p>profit 50 usd/month<br></br>max drawdown 200 usd/month</p>
            <br></br>
            <Button type="primary" icon={<DownloadOutlined />} size={"middle"}
            onFocus={() => {setfile("GOLD_50_200")}}
            onClick={CheckLogin}
            okText="Go sing in"
            cancelText="Cancel">Download
            </Button>
        </Card>
        </Col>
        </Row>
        


        <Modal className="model" width={450} open={modal2Open} title="" onOk={handleOk}
        onCancel={() => setModal2Open(false)}
        footer={[
          <Button key="back" onClick={() => setModal2Open(false)}>
            Cancel
          </Button>,
          <Button className="Btn-singin" key="link" type="primary" onClick={handleOk}> sing in </Button>,
        ]}>
        <Result className="warningmessage"  status="warning"title="กรุณาเข้าสู่ระบบ"/>
        </Modal>
    </div>
  );
}

export default Settingitem;
