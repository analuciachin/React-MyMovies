import React from 'react'
import { FaCheckCircle, FaHeart, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import { Card, Button } from 'react-bootstrap'

export default function MovieDetail ({ movies, onShowMenu, onChangeStatusToWishList, onChangeStatusToWatched, onDisplayStarRate }) {

return (
    <ul className='grid space-around'>
        { movies.map((movie) => {
            const { display_title, opening_date, byline, summary_short, link, isSelected, isWishListDisabled, isWatchedDisabled, rate } = movie
            const { url } = link
            return (
                <Card className='movie bg-light' style={{ width: '22rem', height: '30rem' }}>
                    <li key={url} >
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
                        
                        { isWatchedDisabled &&
                            <div className='icon-right'>
                                <FaCheckCircle color='#008000' size={26}/>
                            </div>
                        }

                        { isWishListDisabled &&
                            <div className='icon-right'>
                                <FaHeart color='#b30000' size={26}/>
                            </div>
                        }

                        { isSelected
                            ? (              
                                <div
                                    id='menu'
                                    className='menu'
                                >
                                    <button id='wish_list' className='btn-status' 
                                        onClick={() => onChangeStatusToWishList(movie)} disabled={isWishListDisabled}>
                                        Wish List
                                    </button>
                                    <button id='watched' className='btn-status'
                                        onClick={() => onChangeStatusToWatched(movie)} disabled={isWatchedDisabled}>
                                        Watched
                                    </button>
                                </div>
                            )
                            : (
                                null
                            )
                        }
                        <Card.Body>
                            <h2 className='center-text movie-title-margin'>{display_title}</h2>
                            <ul className='card-list'>
                                <li>
                                    <FaRegCalendarAlt color='#595959' className='icon-margin' size={22} />
                                    {opening_date}
                                </li>
                                <li>
                                    <FaRegUser color='#595959' className='icon-margin' size={22} />
                                    {byline}
                                </li>
                            </ul>
                            <h4 className='center-text movie-summary'>Summary</h4>
                            <Card.Text>{summary_short}</Card.Text>   
                            { rate !== ''
                            ? <div className='div-my-rate'>
                                    {/*<p className='font-weight-bold'>My Rate: {rate}</p>*/}
                                    {onDisplayStarRate(movie)}
                                </div>
                            : null  
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
)
}