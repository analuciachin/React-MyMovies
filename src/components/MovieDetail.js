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
                <Card className='movie bg-light'>
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
                            <div className='center-text movie-title'>{display_title}</div>
                            <ul className='card-list' id='movie-date-byline'>
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