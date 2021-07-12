import React, {useState} from 'react';
import {ButtonLink, Drawer, PageTitle, Modal, PaymentCard} from '../../units';
import {Button, Form, Input, Card, Row, Col} from 'antd';
import {FormGroup, Select} from '../../units';
import {useApi, usePageValue} from '../../context';
import {useNetworks} from '../../hooks';

const defaultWidth = "400px";

export default function SendAirtime() {

    let api = useApi();

    let {setPageLoading, setPageError, setPageSuccess, setMessage,} = usePageValue();

    const { status, data, error, isFetching } = useNetworks();
    const [showPaymentCard, setShowPaymentCard] = useState(false);
    const [showSuccess, setShowSuccess] = useState();
    const [enterCard, setEnterCard] = useState(false);
    

    const networks = data? data.networks : [];

    const [form] = Form.useForm();

    const onFinish = values => {

        const postForm = async() => {
            let formData = {
                amount: values.amount,
                recipient: values.recipient,
                type: 'AIRTIME',
                network: values.network
            }
            console.log(formData);

            let result = await api.sendAirtime(formData);
            let {success} = result;
            if(success) {
                setMessage('Airtime Sent');
                setPageSuccess(true);
            }
        }
        if(enterCard){
            postForm();
        } else{
            setShowPaymentCard(true);
        }
    }


    return (
       <Drawer>

           {/* PAYMENT CARD MODAL */}

           <Modal 
 visible={showPaymentCard}
 title="Enter Card Details"
//  onOk={setShowPaymentCard}
 onCancel={setShowPaymentCard}
 formId="cardForm"
 >
<PaymentCard showSuccess={setEnterCard} closeModal={setShowPaymentCard}/>
</Modal>

           <Card>
           <PageTitle title="Send Airtime" />
           <Row>
               <Col xs={24} md={12} xl={12}>
               <Form
           id="topUpForm"
           layout="vertical" 
            form={form}
            onFinish={onFinish}
            >
<FormGroup name="recipient" label="Recipient Phone " 
required={true}>
                 <Input placeholder="080 XXX XXX"  />
            </FormGroup>


            <FormGroup name="amount" label="Amount"
            required={true}>
                 <Input placeholder="50"  />
            </FormGroup>

        <FormGroup name="network" label="Network"
        required={true}>
<Select
          
          placeholder="Select"
        showSearch
        //   style={{ width: defaultWidth }}
        >
          
          {networks}
        </Select>
        </FormGroup>
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    {enterCard? "Send Airtime" : "Enter Card To Pay"}
                </Button>
            </Form.Item>
                </Form>
               </Col>
           </Row>
          
                </Card>
       </Drawer>
    )
}
