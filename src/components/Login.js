import React from 'react'

export default function Login ({ login, onGetUsername, onGetPassword, username, password, login_error }) {

    return (
        <React.Fragment>
            <h1 className='center-text login-h1'>Login Form</h1>
            <div className='center login-img'>
                <img src={require('../images/login_img.svg')} alt='Login' />
            </div>

            <p className='center-text login-error'>{ login_error !== '' ? login_error : null }</p>

            <form method='post' className='center-text' onSubmit={login}>
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
            
        </React.Fragment>
    )
}