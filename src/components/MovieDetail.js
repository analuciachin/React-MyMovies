import React from 'react'
import { FaCheckCircle, FaPlusCircle, FaRegCalendarAlt, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'

export default function MovieDetail ({ movies, onShowMenu, onChangeStatusToWishList, onChangeStatusToWatched }) {

return (
    <ul className='grid space-around'>
        { movies.map((movie) => {
            const { display_title, opening_date, byline, summary_short, link, isSelected, isWishListDisabled, isWatchedDisabled, rate } = movie
            const { url } = link
            return (
                <li key={url} className='movie bg-light'>
                    <div className='main-content'>
                        { isSelected
                            ? (
                            <button id={url} onClick={(event) => onShowMenu(event, movie)}>
                                <IoIosArrowDropupCircle color='#000066' size={22} />
                            </button>
                            )
                            : (
                            <button id={url} onClick={(event) => onShowMenu(event, movie)}>
                                <IoIosArrowDropdownCircle color='#000066' size={22} />
                            </button>
                            )
                        }
                        
                        { isWatchedDisabled &&
                            <div className='icon-right'>
                                <FaPlusCircle color='#b30000' size={26}/>
                            </div>
                        }

                        { isWishListDisabled &&
                            <div className='icon-right'>
                                <FaCheckCircle color='#008000' size={26}/>
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

                        <h1 className='center-text movie-title-margin'>{display_title}</h1>
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
                        <h4 className='center-text'>Summary</h4>
                        <p>{summary_short}</p>   
                        { rate !== ''
                          ? <div className='div-my-rate'>
                                <p className='font-weight-bold'>My Rate: {rate}</p>
                            </div>
                          : null  
                        } 
                    </div>
                    <div>
                        <p className='center-text'><a href={url} target='_blank'>Review</a></p>
                    </div>
                </li>
            )
            })}
    </ul>
)
}