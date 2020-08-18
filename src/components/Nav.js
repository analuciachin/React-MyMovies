import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav () {
    return (
        <nav className='row space-between'>
            <ul className='row nav'>
                <li>
                    <NavLink
                        to='/'
                        activeStyle={activeStyle}
                        className='nav-link'
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/wishlist'
                        activeStyle={activeStyle}
                        className='nav-link'
                    >
                        Wish List
                    </NavLink>
                </li>                
                <li>
                    <NavLink 
                        to='/watched'
                        activeStyle={activeStyle}
                        className='nav-link'
                        >
                            Watched
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
