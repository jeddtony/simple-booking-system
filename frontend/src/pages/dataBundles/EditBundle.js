import React, {useState, useEffect} from 'react';
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {Card, Row, Col, Form, Input, Button, Select} from 'antd';
import {useApi, usePageValue} from '../../context';
import {Redirect} from 'react-router-dom';
import {FormGroup} from '../../units';
import {useOneBundle} from '../../hooks';

const {TextArea} = Input;
const {Option} = Select;

export default function EditBundle(props) {
    let id = props.match.params.bundleId;
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    let api = useApi();

    const { status, data, error, isFetching } = useOneBundle(id);

    const bundle = data? data.bundle : {};
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

      useEffect(() => {
        form.resetFields();
        return () => {}
      }, [bundle])

    const onFinish = values => {
        setIsLoading(true);

        let data = {
          name: values.name,
          description: values.description,
          amount: values.amount,
          duration: values.duration,
          unit: values.unit
        };

        const postForm = async() => {
          let results = await api.updateBundle(data, id);
          console.log(results);
          setIsLoading(false);
          let resultSuccessful = results.success;
          setMessage(results.message)
          if(resultSuccessful){
            
            setPageSuccess(true);
            setTimeout(() => {
                setSuccess(true);
              setPageSuccess(false);
            }, 2000);
          } else{
           setPageError(true);
          }
        }
        postForm();
      }

    return (
        <Drawer>
            {success && <Redirect to={bundle.network? "/vendors/" + bundle.network.name: "#"} />}
            <Card>
            <PageTitle title="Edit Bundle" /> 
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
 initialValue = {bundle.name}> 
          <Input placeholder="John" />
        </FormGroup>

<FormGroup label="Description" required={true} name="description"
initialValue = {bundle.description}>
          <TextArea>

          </TextArea>
        </FormGroup>

        <FormGroup label="Amount" required={true} name="amount" type="number"
        initialValue={bundle.amount}>
          <Input placeholder="50" />
        </FormGroup>

        <FormGroup label="Duration" required={true} name="duration"
        initialValue={bundle.duration}>
          <Input placeholder="5" />
        </FormGroup>
        
        <FormGroup label="Duration Unit" required={true} name="unit"
        initialValue={bundle.unit}>
            <Select>
              <Option value="hours" >Hours</Option>
              <Option value="days">Days</Option>
          </Select>
        </FormGroup>

        <Form.Item>
            <Col offset={6}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Update Bundle
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
