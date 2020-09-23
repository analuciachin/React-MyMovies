import React from 'react'
import { FaCheckCircle, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import { Row, Col, Card } from 'react-bootstrap'

export default function Watched ({ movies, onShowMenu, onChangeStatusToWishList, onGetRate, onHandleSubmitRate, temp_rate, onDisplayStarRate }) {

return (
    <Row>
        <Col>
            <ul className='grid space-around'>
                { movies.map((movie) => {
                    const { display_title, opening_date, byline, summary_short, link, isSelected, isWatchedDisabled, status, rate } = movie
                    const { url } = link
                    return ( status === 'watched' &&
                            <Card className='movie-watched bg-light'>
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
                                        <FaCheckCircle color='#008000' size={26}/>
                                    </div>

                                    { isSelected
                                        ? (              
                                            <div
                                                id='menu'
                                                className='menu'
                                            >
                                                <button id='wish_list' className='btn-status' onClick={() => onChangeStatusToWishList(movie)}>
                                                    Wish List
                                                </button>
                                                <button id='watched' className='btn-status' disabled={isWatchedDisabled}>
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
                                        <ul className='card-list' id='watched-date-byline'>
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
                                        { rate === ''
                                        ? <div className='div-my-rate'>
                                                <form onSubmit={(event) => onHandleSubmitRate(event, movie)}>
                                                    <label>My Rate: </label>
                                                    <input type='number' id='my-rate' min='1' max='5' 
                                                        className='my-rate-input' value={temp_rate} onChange={onGetRate} />
                                                    <input type='submit' className='my-rate-button'/>
                                                </form>
                                            </div>    
                                        : <div className='div-my-rate'>
                                                {/*<p className='font-weight-bold'>My Rate: {rate}</p>*/}
                                                {onDisplayStarRate(movie)}
                                            </div>
                                        }

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