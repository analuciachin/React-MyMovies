import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Logout ({ logout }) {
    return (
        <Row>
            <Col>
                <button className='logout-btn mt-3 ml-2' onClick={logout}>Logout</button>
            </Col>
        </Row>
    )
}