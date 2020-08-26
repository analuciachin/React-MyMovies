import React from 'react'

export default class Login extends React.Component {
//width="793" height="551.73152"
    render() {
        return (
            <React.Fragment>
                <h1 className='center-text login-h1'>Login Form</h1>
                <div className='center login-img'>
                    <img src={require('../images/login_img.svg')} alt='Login' />
                </div>

                <form method='post' className='center-text'>
                    <label className='login-label'>Username</label>
                    <input type='text' name='username' placeholder='Enter username' className='login-input'/>
                    <br />
                    <label className='login-label'>Password</label>
                    <input type='text' name='password' placeholder='Enter password' className='login-input'/>
                    <br />
                    <input type='submit' value='Login' className='login-btn'/>
                </form>
            </React.Fragment>
        )
    }
}