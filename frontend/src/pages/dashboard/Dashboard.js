import React from 'react'
import {Drawer} from '../../units';
import {useDashboard, useNetworks} from '../../hooks';
import {useQueryCache} from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import {Card} from '../../units';
import {Row, Col, Divider} from 'antd';
import {usePageValue} from '../../context';
import {NumberFormat} from '../../units';


export default function Dashboard() {
    const { status, data, error, isFetching } = useDashboard();
    const network = useNetworks();
    const finalData = data? data : {};

    let {setPageLoading, setPageError, setPageSuccess, setMessage} = usePageValue();

    setPageLoading(isFetching)
    return (
        <>
        <Drawer selectedKey="01">
          <Row gutter={24}>
                
                    <Col xs={24} sm={24} md={6}>
  <Card label={"Airtime Transfers"} value={finalData.numberOfAirtimeTransfers} />
  </Col>

  <Col xs={24} sm={24} md={6}>
  <Card label={"Data Transfers"} value={finalData.numberOfDataTransfers} />
  </Col>

  <Col xs={24} sm={24} md={6}>
  <Card label={"Complains Lodged"} value={finalData.numberOfComplaints} />
  </Col>
               
        </Row>
  {/* 
        <Row gutter={24} style={{marginTop: '20px'}}>
            <Divider orientation="left">VTU Balance</Divider>
             {network.data && network.data.data.map ((dat, index) => (
                 <Col xs={24} sm={24} key={index} md={6}>
                 <Card label={dat.name} value={<NumberFormat value={dat.balance} />} />
                 </Col>
             ))}   
        </Row> */}
        </Drawer>
 <ReactQueryDevtools initialIsOpen />
 </>
    )
}
