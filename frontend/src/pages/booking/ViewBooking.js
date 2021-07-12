import React, {useMemo} from 'react';
import {ButtonLink, Drawer, PageTitle} from '../../units';
import {useBooking} from '../../hooks';
import { ReactQueryDevtools } from 'react-query-devtools';
import {Card, Row, Col} from 'antd';
import {ReactTable} from '../../units';
import {formatDate, formatDateAndTime} from '../../helpers';


export default function ViewTrips() {
    const { status, data, error, isFetching } = useBooking();
    
    const actualData = data? data.data : [];
    
    const columns = useMemo(() => [
        {
            id: 'date',
            Header: 'Date Added',
            accessor: d=> formatDate(d.created_at),
            Cell: d => <span>{d.value}</span>
    }, 
    {
        Header: 'Customer',
        accessor: 'customer_name'
    },
    {
        Header: 'Pickup location',
        accessor: 'end_location.name'
    }, 
    {
        Header: 'Destination',
        accessor: 'end_location.name'
    },
    {
        Header: 'Vehicle',
        accessor: 'vehicle.name'
    },
    {
        Header: 'Departure time',
        accessor: 'trip.start_time',
        Cell: d => <span>{formatDateAndTime(d.value)}</span>
    },
    {
        Header: 'Ticket',
        accessor: 'ticket_code',
       
    },
    {
        Header: 'Action',
        accessor: 'id',
        Cell: d => (
            <ButtonLink to={"/users/"+d.value} label="View" size="small" type="primary" />
        ),
        filterable: false
    },
    
],actualData )

    return (
        <>
          <Drawer selectedKey="02">
            <Card>
                <Row gutter={24}>
                    <Col span={20}>
            <PageTitle title="Booking" />
            </Col>
               <Col span={4} style={{padding: '10px'}}>
                <ButtonLink style={{borderRadius: '5px'}} type="primary" to="/booking/create" label="New Booking" />
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
