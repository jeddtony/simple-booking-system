import React, {useMemo} from 'react';
import {Drawer, PageTitle, NumberFormat} from '../../units';
import {Card, Row, Col} from 'antd';
import {ReactTable} from '../../units';
import { ReactQueryDevtools } from 'react-query-devtools';
import {formatDate} from '../../helpers';
import {useAirtimeTransactions} from '../../hooks';

export default function ViewCreditTransactions() {
    const { status, data, error, isFetching } = useAirtimeTransactions();

    const actualData = data? data.transactions: [];
    const columns = useMemo(() => [
        {
            id: 'date',
            Header: 'Date',
            accessor: d => formatDate(d.createdAt),
            Cell: d => <span>{d.value}</span>
        },
        {
            Header: 'Recipient',
            accessor: 'recipient'
        },
        
        {
            id: 'network',
            Header: 'Network',
            accessor: 'network.name'
        },
        {
            Header: 'Amount',
            accessor: 'amount',
            Cell: d => <NumberFormat value={d.value} />
        },
        // {
        //     Header: 'Balance',
        //     accessor: "currentAmount",
        //     Cell: d => <NumberFormat value={d.value} />
        // }
    ], actualData);


    return (
       <Drawer selectedKey="21">
        <Card>
        <Row gutter={24}>
                    <Col span={20}>
            <PageTitle title="Airtime Transfers" />
            </Col>
               <Col span={4} style={{padding: '10px'}}>
                {/* <ButtonLink style={{borderRadius: '5px'}} type="primary" to="/users/create" label="New User" /> */}
                </Col>
            </Row>

            <ReactTable 
            columns={columns}
            data = {actualData}
            filterable={true}
            />
        </Card>
        <ReactQueryDevtools initialIsOpen />
       </Drawer>
    )
}
