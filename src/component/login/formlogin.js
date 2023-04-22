import React from "react";
import Axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom"
import { Button, Form, Input } from "antd";
import { Divider } from 'antd';


function FormloginNew({ setToken }){
    //console.log("t");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const signin =async (e)=>{
        //e.preventDefault();
        Axios.post("http://localhost:3001/signin",{
            email:email,
            password:password,
        }).then((response)=>{
            if(response.data.error){
            }else{
                setToken(response.data[0].user_name);
                console.log(response);
                if(response.data[0].user_name==="admin"){
                    navigate("/dashbord");
                }
                else{
                    navigate("/");
                }
            }
        });
    }
    return(
      <div >
      
           <Form className="Formlogin"
            layout="vertical"
            size="large"
            form={form}
            onFinish={signin}
            name="wrap"
            labelCol={{
              flex: "40px",
            }}
            labelAlign="left"
            labelWrap
            wrapperCol={{
              flex: 1,
            }}
            colon={false}
          >
            <h1 className="font-login"> Log In</h1>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email!",
                },
                {
                  required: true,
                  message: "Please enter Email",
                },
              ]}
              onChange={(event) => {
                setEmail(event.target.value)
               }}
            >
              <Input style={{
                height:50
              }}/>
            </Form.Item>
            <Form.Item
              label="Password"
              type="password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}
              
              onChange={(event) => {
                setPassword(event.target.value)
            }}
            >
              <Input.Password style={{height:50}}/>
              
            </Form.Item>
            <Divider plain></Divider>

            <Form.Item >
              <Button className="btn-submitform" type="primary" htmlType="submit" size="large" 
              style={{
                width: '100%',
                height:60,
                marginTop:30,
              }}
              >
                 Sign in
              </Button>
            </Form.Item>
          </Form>
          
      </div>
    );
}

export default FormloginNew;