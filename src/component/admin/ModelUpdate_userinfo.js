import React from "react";


import { Form, Input, Modal } from "antd";

function ModelupdatePort({ open, onCreate, onCancel,Emailinfo,Nameinfo }) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Edit user information"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
          
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid email!",
            },
            {
              required: true,
              message: "Please input email",
            },
          ]}
        >
          <Input type="textarea" placeholder={Emailinfo} />
        </Form.Item>

        <Form.Item
          name="Name"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Please input Name",
            },
          ]}
        >
          <Input type="textarea"  placeholder={Nameinfo} />
        </Form.Item>
        
      </Form>
    </Modal>
  );
}

export default ModelupdatePort;
