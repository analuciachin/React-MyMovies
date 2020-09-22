import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default function Logout ({ logout }) {
    return (
        <Row>
            <Col>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </Col>
        </Row>
    )
}