import React from 'react'
import { FaHeart, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import { Row, Col, Card } from 'react-bootstrap'

export default function WishList ({ movies, onShowMenu, onChangeStatusToWatched }) {

return (
    <Row>
        <Col>
            <ul className='grid space-around'>
                { movies.map((movie) => {
                    const { display_title, opening_date, byline, summary_short, link, isSelected, isWishListDisabled, status } = movie
                    const { url } = link
                    return ( status === 'wish_list' &&
                    <Card className='movie bg-light'>
                        <li key={url}>
                            { isSelected
                                ? (
                                <button id={url} className='arrow-btn' onClick={(event) => onShowMenu(event, movie)}>
                                    <IoIosArrowDropupCircle color='#000066' size={22} />
                                </button>
                                )
                                : (
                                <button id={url} className='arrow-btn' onClick={(event) => onShowMenu(event, movie)}>
                                    <IoIosArrowDropdownCircle color='#000066' size={22} />
                                </button>
                                )
                            }

                            <div className='icon-right'>
                                <FaHeart color='#b30000' size={26}/>
                            </div>

                            { isSelected
                                ? (              
                                    <div
                                        id='menu'
                                        className='menu'
                                    >
                                        <button id='wish_list' className='btn-status' disabled={isWishListDisabled}>
                                            Wish List
                                        </button>
                                        <button id='watched' className='btn-status' onClick={() => onChangeStatusToWatched(movie)}>
                                            Watched
                                        </button>
                                    </div>
                                )
                                : (
                                    null
                                )
                            }
                                <Card.Body>
                                    <div className='center-text movie-title'>{display_title}</div>
                                    <ul className='card-list' id='wishlist-date-byline'>
                                        <li>
                                            <FaRegCalendarAlt color='#595959' className='icon-margin' size={22} />
                                            {opening_date}
                                        </li>
                                        <li>
                                            <FaRegUser color='#595959' className='icon-margin' size={22} />
                                            {byline}
                                        </li>
                                    </ul>
                                    <div className='center-text movie-summary'>Summary</div>
                                    <div className='movie-text text-justify'>{summary_short}</div>    
                                    <div className='center-text movie-review'>
                                        <Card.Link href={url} target='_blank' rel='noopener noreferrer'>
                                            Review
                                        </Card.Link>
                                    </div>
                            </Card.Body>
                        </li>
                    </Card>
                    )
                })}
            </ul>
        </Col>
    </Row>
)
}