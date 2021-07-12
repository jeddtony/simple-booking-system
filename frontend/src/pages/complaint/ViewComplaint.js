import React from 'react';
import {Drawer, PageTitle} from '../../units';
import {useComplaints} from '../../hooks';
import { Collapse, Row, Col, Card, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { formatDate } from '../../helpers';

const { Panel } = Collapse;

export default function ViewComplaint() {

    const { status, data, error, isFetching } = useComplaints();
    const complaints = data? data.complaints : [];
    
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
            <Panel header={complain.title} key={index} className="site-collapse-custom-panel"
            extra={complain.is_resolved ? <Button style={{backgroundColor: "greenyellow"}} >Resolved</Button>: <Button type='primary' danger size="small">Pending</Button>}>
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
