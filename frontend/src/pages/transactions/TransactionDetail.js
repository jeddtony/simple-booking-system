import React from 'react';
import {Drawer, PageTitle, NumberFormat} from '../../units';
import {ReactTable} from '../../units';
import {formatDate} from '../../helpers';
import {Card, Row, Col} from 'antd';

export default function TransactionDetail(props) {

    return (
        <Drawer selectedKey="sub2">
            <Card>
            <PageTitle title="Transaction Details" />
            </Card>
        </Drawer>
    )
}
