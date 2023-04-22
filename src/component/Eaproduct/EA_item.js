import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const ZIP_FILE_URL = "https://localhost:3000/EA-file.zip";

function Eaitem() {
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

  const onClick=()=>{
    Downloadfile(ZIP_FILE_URL);
  }


  
  return (
    <div className="Eaitems" >
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size={"middle"}
        onClick={onClick}
        okText="Go sing in"
        cancelText="Cancel"
      >
        Download
      </Button>
    </div>
  );
}

export default Eaitem;
