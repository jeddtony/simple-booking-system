import React, {useState} from 'react';
import {Drawer, PageTitle} from '../../units';
import {useAdminComplaints} from '../../hooks';
import { Collapse, Row, Col, Card, Button, Modal as ConfirmModal  } from 'antd';
import { CaretRightOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { formatDate } from '../../helpers';
import {useApi, usePageValue} from '../../context';

const { Panel } = Collapse;
const { confirm } = ConfirmModal;

export default function ViewComplaint() {
    let api = useApi();
    const [refreshPage, setRefreshPage] = useState(0);
    const { status, data, error, isFetching } = useAdminComplaints(refreshPage);

    let {setPageLoading, setPageError, setPageSuccess, setMessage} = usePageValue();
    const complaints = data? data.complaints : [];
    
    const handleMenuClick = (id, userName) => {

        function showConfirm() {
            confirm({
              title: 'Do you mark as resolved?',
              icon: <ExclamationCircleOutlined />,
              content: 'From ' + userName,
              onOk() {
               postApproval();
              },
              onCancel() {
                console.log('Cancel');
              },
            });
          }
          showConfirm();

          const postApproval = async() => {
              let results = await api.markAsResolved(id);
              let {success} = results;
              if(success){
                  setMessage(results.message);
                  setPageSuccess(true);
                  setTimeout(()=> {
                    setRefreshPage(Math.random() * 1000);
                  }, 2000);
              }
          }
    }

    return (
        <Drawer>
            <Card>
        <PageTitle title={"Complaints"} /> 
        <Row gutter={24}>
        <Col span={24}>
        <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
  >
      {
          complaints.map((complain, index) => (
            <Panel header={<><strong>{complain.title}</strong> <em>By {complain.user.name}</em></>} key={index} className="site-collapse-custom-panel"
            extra={complain.is_resolved ? <Button style={{backgroundColor: "greenyellow"}} >Resolved</Button>: 
            (<>
            <Button type='primary' danger size="small">Pending</Button> &nbsp; 
            <Button type='primary'  size="small" onClick={() => handleMenuClick(complain.id, complain.user.name)}>Mark As Resolved</Button></>)}>
            <p>{complain.description}</p>
            <p style={{float: 'right'}}>{formatDate(complain.updated_at)}</p>
          </Panel>
          ))
      }
    
  </Collapse>,
        </Col>
        </Row>
        </Card>
        </Drawer>
    )
}
