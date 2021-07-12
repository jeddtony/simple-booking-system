import React, {useState, useEffect} from 'react';
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {Card, Row, Col, Form, Input, Button, Select} from 'antd';
import {useApi, usePageValue} from '../../context';
import {Redirect} from 'react-router-dom';
import {FormGroup} from '../../units';
import {useOneBundle} from '../../hooks';

const {TextArea} = Input;
const {Option} = Select;

export default function CreateComplaint(props) {
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
          title: values.title,
          description: values.description,
          
        };

        const postForm = async() => {
          let results = await api.createComplaint(data);
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
            {success && <Redirect to={"/complaints"} />}
            <Card>
            <PageTitle title={"Lodge Complaint"} /> 
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

<FormGroup label="Title" required={true} name="title"
 > 
          <Input placeholder="" />
        </FormGroup>

<FormGroup label="Description" required={true} name="description"
>
          <TextArea allowClear>

          </TextArea>
        </FormGroup>


        <Form.Item>
            <Col offset={6}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit Complaint
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
