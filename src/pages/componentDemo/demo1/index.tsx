/* eslint-disable no-console */
import React, { useEffect } from "react";
import SearchInput from "@/component/searchComponent";
import ModuleWrapper from "@/component/moduleWrapper";
import { Button, Card, Form, Input, Space } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

const Demo1: React.FC = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ asd: [{ list1: "1", list: ["1"] }] });
  }, []);
  return (
    <>
      <ModuleWrapper>
        <SearchInput onChange={(val: any) => console.log(val)} value="123" />
      </ModuleWrapper>
      <ModuleWrapper>
        <Form form={form}>
          <Form.List name="asd">
            {(fields, { add, remove }) => (
              <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Event ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item label="Name" name={[field.name, "list1"]}>
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="List">
                      <Form.List name={[field.name, "list"]}>
                        {(subFields, subOpt) => (
                          <div style={{ display: "flex", flexDirection: "column", rowGap: 16 }}>
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                <Form.Item noStyle name={[subField.name, "first"]}>
                                  <Input placeholder="first" />
                                </Form.Item>
                                <Form.Item noStyle name={[subField.name, "second"]}>
                                  <Input placeholder="second" />
                                </Form.Item>
                                <CloseOutlined
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />
                                <PlusOutlined
                                  onClick={() => {
                                    subOpt.add();
                                  }}
                                />
                              </Space>
                            ))}
                            {/* <Button type="dashed" onClick={() => subOpt.add()} block>
                              + Add Sub Item
                            </Button> */}
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            )}
          </Form.List>
        </Form>
      </ModuleWrapper>
    </>
  );
};

export default Demo1;
