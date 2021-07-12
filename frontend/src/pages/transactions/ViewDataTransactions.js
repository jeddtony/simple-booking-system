import React, {useMemo} from 'react';
import {Drawer, PageTitle, NumberFormat} from '../../units';
import {Card, Row, Col} from 'antd';
import {useDataTransactions} from '../../hooks';
import {ReactTable} from '../../units';
import { ReactQueryDevtools } from 'react-query-devtools';
import {formatDate} from '../../helpers';


export default function ViewDebitTransactions() {
    const { status, data, error, isFetching } = useDataTransactions();

    const actualData = data? data.transactions: [];

    const columns = useMemo(() => [
        {
            id: 'date',
            Header: "Date",
            accessor: d => formatDate(d.createdAt),
            Cell: d => <span>{d.value}</span>

        },
        {
            Header: 'Recipient',
            accessor: 'recipient'
        },
        {
            Header: 'Bundle',
            accessor: 'bundle.name'
        },
        {
            Header: 'Network',
            accessor: 'network.name'
        },
        // {
        //     Header: 'Recipient Name',
        //     accessor: 'recipientName'
        // },
        {
            Header: 'Amount',
            accessor: 'amount',
            Cell: d => <NumberFormat value={d.value} />
        },
        // {
        //     Header: 'Status',
        //     accessor: 'status'
        // }
    ], actualData);


    return (
        <Drawer selectedKey="20">
            
        <Card>
        <Row gutter={24}>
                    <Col span={20}>
            <PageTitle title="Data Transfers" />
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
