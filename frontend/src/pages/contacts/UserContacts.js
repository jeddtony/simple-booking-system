import React, {useMemo} from 'react';
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {useContacts} from '../../hooks';
import { ReactQueryDevtools } from 'react-query-devtools';
import {Card, Button, Row, Col} from 'antd';
import {ReactTable} from '../../units';
import {formatDate} from '../../helpers';
import {Link} from 'react-router-dom'


export default function UserContacts() {
    const { status, data, error, isFetching } = useContacts();
    
    const actualData = data? data.data : [];
    
    const columns = useMemo(() => [
        {
            id: 'date',
            Header: 'Date Added',
            accessor: d=> formatDate(d.createdAt),
            Cell: d => <span>{d.value}</span>
    }, {
        Header: 'Name',
        accessor: 'name'
    },{
        Header: 'Email',
        accessor: 'email'
    }, 
    {
        Header: 'Phone Number',
        accessor: 'phoneNumber'
    },
    {
        Header: 'Network',
        accessor: 'network'
    },
    {
        Header: 'Status',
        accessor: 'network'
    },
    {
        Header: 'Action',
        accessor: '_id',
        Cell: d => (
            <ButtonLink to={"/users/"+d.value} label="Edit" size="small" type="primary" />
        )
    },
    
],actualData )

    return (
        <>
          <Drawer selectedKey="3">
            <Card>
            <Row gutter={24}>
                    <Col span={20}>
            <PageTitle title="Contacts" />
            </Col>
              
            </Row>
            <ReactTable 
            columns={columns}
            data = {actualData}
            filterable={true}
            />

            </Card>
              </Drawer>  
              <ReactQueryDevtools initialIsOpen />
        </>
    )
}
