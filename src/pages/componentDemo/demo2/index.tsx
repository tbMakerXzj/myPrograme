/* eslint-disable no-console */
import ModuleWrapper from "@/component/moduleWrapper";
import { Button, Form, Input } from "antd";
import React from "react";

const Demo2: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <ModuleWrapper>
      <Form
        form={form}
        onFinish={() => {
          form.validateFields().then(() => {
            console.log(form.getFieldsValue(true));
          });
        }}
      >
        <Form.Item
          label="姓名"
          name={"name"}
          getValueFromEvent={(e: any) => {
            const value = e.target.value?.replace(/-/g, "");
            return value;
          }}
          getValueProps={(value: string) => {
            if (!value || value?.length < 6) return { value };
            const item1 = value.substring(0, 6);
            const item2 = value.substring(6, 8);
            const item3 = value.substring(8);
            const id = [item1, item2, item3].filter(Boolean).join("-");
            return { value: id };
          }}
          rules={[
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject("请输入姓名");
                }

                if (value.length !== 12) {
                  return Promise.reject("请输入正确id");
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form>
    </ModuleWrapper>
  );
};

export default Demo2;
