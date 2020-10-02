import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav () {
    return (
        <Row>
            <Col>
                <nav className='row space-between mb-3 ml-2'>
                    <ul className='row nav'>
                        <li>
                            <NavLink
                                to='/search'
                                activeStyle={activeStyle}
                                className='nav-link'
                            >
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/all'
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
            </Col>
        </Row>
    )
}
