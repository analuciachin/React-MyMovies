import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default function Search ({ onChangeStartDate, onChangeEndDate, onSubmitForm, onGetMaxDate }) {

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h1 className='mt-5 mb-3'>Select the period of the review</h1>
                    <Form onSubmit={onSubmitForm}>
                        <Form.Label className='mt-3'>Start date:</Form.Label>
                        <Form.Control type='date' id='start-date' className='mb-3' onChange={onChangeStartDate} max={onGetMaxDate()} />
                        <Form.Label className='mt-3'>End date:</Form.Label>
                        <Form.Control type='date' id='end-date' className='mb-3' onChange={onChangeEndDate} max={onGetMaxDate()}/>
                        <Button variant='primary' type='submit' className='mt-3'>Submit</Button>
                    </Form>
                </Col>
            </Row>       
        </React.Fragment>
    )
}