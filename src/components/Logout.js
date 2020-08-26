import React from 'react'

export default function Logout ({ logout }) {
    return (
        <button className='logout-btn' onClick={logout}>Logout</button>
    )
}