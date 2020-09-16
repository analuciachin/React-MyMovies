import React from 'react'
import Spinner from 'react-spinner-material'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default function Login ({ login, onGetUsername, onGetPassword, username, password, login_error, visible }) {

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h1 className='center-text login-h1'>Login Form</h1>
                    <div className='center login-img'>
                        <img src={require('../images/login_img.svg')} alt='Login' className='login-img'/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='center-text login-error'>{ login_error !== '' ? login_error : null }</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form method='post' className='center-text' onSubmit={login}>
                        <Form.Group controlId='formBasicLogin'>
                            <Form.Label className='d-flex align-items-start'>Username</Form.Label>
                            <Form.Control type='username' placeholder='Enter username' className='mt-3 mb-3' onChange={onGetUsername} 
                                value={username} />
                            <Form.Label className='d-flex align-items-start'>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' className='mt-3 mb-5' onChange={onGetPassword} 
                                value={password} />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>

{/*                    <form method='post' className='center-text' onSubmit={login}>
                        <label className='login-label'>Username</label>
                        <input type='text' name='password' placeholder='Enter username' className='login-input' 
                            onChange={onGetUsername} value={username} />
                        <br />
                        <label className='login-label'>Password</label>
                        <input type='text' name='password' placeholder='Enter password' className='login-input' 
                            onChange={onGetPassword} value={password} />
                        <br />
                        <input type='submit' value='Login' className='login-btn'/>
                    </form>
*/}
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='center-spinner'>
                    <Spinner radius={40} color={"#ff4d6a"} stroke={3} visible={visible} />
                    </div>
                </Col>
            </Row>

        </React.Fragment>
    )
}