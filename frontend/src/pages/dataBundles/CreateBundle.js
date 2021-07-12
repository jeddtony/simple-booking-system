import React, {useState, useEffect} from 'react';
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {Card, Row, Col, Form, Input, Button, Select} from 'antd';
import {useApi, usePageValue} from '../../context';
import {Redirect} from 'react-router-dom';
import {FormGroup} from '../../units';
import {useOneBundle} from '../../hooks';

const {TextArea} = Input;
const {Option} = Select;

export default function CreateBundle(props) {
    let id = props.match.params.networkId;
    let networkName = props.match.params.networkName
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    let api = useApi();

    let {setPageLoading, setPageError, setPageSuccess, setMessage} = usePageValue();

    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
      }

    

    const onFinish = values => {
        setIsLoading(true);

        let data = {
          name: values.name,
          description: values.description,
          amount: values.amount,
          duration: values.duration,
          unit: values.unit,
          network: id
        };

        const postForm = async() => {
          let results = await api.createBundle(data);
          console.log(results);
          setIsLoading(false);
          let resultSuccessful = results.success;
          setMessage(results.message)
          if(resultSuccessful){
            
            setPageSuccess(true);
            setTimeout(() => {
              setPageSuccess(false);
              setSuccess(true)
            }, 2000);
          } else{
           setPageError(true);
          }
        }
        postForm();
      }

    return (
        <Drawer>
            {success && <Redirect to={"/vendors/" +networkName} />}
            <Card>
            <PageTitle title={"Create Bundle for "+networkName} /> 
            <Row>
                <Col xs={24} md={12}>
                <Form
        {...formItemLayout}
        layout={"horizontal"}
        form={form}
        initialValues={{
          remember: true,
          layout: "horizontal",
        }}

        onFinish={onFinish}
      >

<FormGroup label="Name" required={true} name="name"
 > 
          <Input placeholder="John" />
        </FormGroup>

<FormGroup label="Description" required={true} name="description"
>
          <TextArea>

          </TextArea>
        </FormGroup>

        <FormGroup label="Amount" required={true} name="amount" type="number"
        >
          <Input placeholder="50" />
        </FormGroup>

        <FormGroup label="Duration" required={true} name="duration"
        >
          <Input placeholder="5" />
        </FormGroup>
        
        <FormGroup label="Duration Unit" required={true} name="unit"
        >
            <Select>
              <Option value="hours" >Hours</Option>
              <Option value="days">Days</Option>
          </Select>
        </FormGroup>

        <Form.Item>
            <Col offset={6}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Create Bundle
        </Button>
        </Col>
        </Form.Item>
          </Form>

                </Col>
            </Row>

            </Card>
        </Drawer>
    )
}
