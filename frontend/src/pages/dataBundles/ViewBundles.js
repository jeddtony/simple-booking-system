import React, {useMemo} from 'react';
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {Card, Row, Col} from 'antd';
import {ReactTable} from '../../units';
import {formatDate} from '../../helpers';
import {useBundles} from '../../hooks';
import { act } from 'react-dom/test-utils';

export default function ViewBundles(props) {
    let name = props.match.params.name;

    const { status, data, error, isFetching } = useBundles(name);

    const actualData = data? data.network.bundles : [];

    const networkId = data? data.network.id : 0;
    const columns = useMemo(() => [
        {
            id: 'date',
            Header: 'Date Added',
            accessor: d => formatDate(d.updatedAt),
            Cell: d=><span>{d.value}</span>
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Amount',
            accessor: 'amount',
        },
        {
            id: 'validity',
            Header: 'Duration',
            accessor: 'duration',
            
        },
        {
            Header: 'Duration Unit',
            accessor: 'unit',
        },
        {
            id: 'action',
            Header: 'Action',
            accessor: 'id',
            Cell: d => <span><ButtonLink type="primary" size="small" 
            to={`/bundle/edit/${d.value}`} label="Edit" /></span>
        }
    ], actualData)

    return (
        <Drawer>
                 <Card>
                <Row gutter={24}>
                    <Col span={20}>
            <PageTitle title={name + "Data Bundle"} />
            </Col>
               <Col span={4} style={{padding: '10px'}}>
                <ButtonLink style={{borderRadius: '5px'}} type="primary" to={`/bundle/create/${networkId}/${name}`} label="New Bundle" />
                </Col>
            </Row>

            <ReactTable 
            columns={columns}
            data = {actualData}
            filterable={true}
            />
            </Card>
        </Drawer>
    )
}
