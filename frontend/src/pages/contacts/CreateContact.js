import React, {useState} from 'react'
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {Card, Form, Input, Button, Radio } from 'antd';
import {FormGroup} from '../../units';
import {useNetworks} from '../../hooks';

export default function CreateContact() {

    const [isLoading, setIsLoading] = useState(false);
    const { status, data, error, isFetching } = useNetworks();
    
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }

    return (
        <Drawer selectedKey="2">
            <Card>
<PageTitle title="Create User" />

<Form
        {...formItemLayout}
        layout={"horizontal"}
        form={form}
        initialValues={{
          layout: "horizontal",
        }}
      >

<FormGroup label="Name" required={true}>
          <Input placeholder="John" />
        </FormGroup>

<FormGroup label="Email" required={true}>
          <Input placeholder="john@mail.com" />
        </FormGroup>

        <FormGroup label="Phone Number" required={true}>
          <Input placeholder="080 0000 000" />
        </FormGroup>

        <FormGroup label={null}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Create User
        </Button>
        </FormGroup>
          </Form>

</Card>
        </Drawer>
    )
}
