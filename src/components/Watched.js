import React from 'react'
import { FaCheckCircle, FaRegCalendarAlt, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'

export default function Watched ({ movies, onShowMenu, onChangeStatusToWishList, onGetRate, onHandleSubmitRate, temp_rate }) {

return (
    <ul className='grid space-around'>
        { movies.map((movie) => {
            const { display_title, opening_date, byline, summary_short, link, isSelected, isWatchedDisabled, status, rate } = movie
            const { url } = link
            return ( status === 'watched' &&
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
                            { rate === ''
                              ? <div className='div-my-rate'>
                                    <form onSubmit={(event) => onHandleSubmitRate(event, movie)}>
                                        <label>My Rate: </label>
                                        <input type='number' id='my-rate' min='1' max='10' 
                                            value={temp_rate} onChange={(event) => onGetRate(event, movie)} />
                                        <input type='submit' />
                                    </form>
                                </div>    
                              : <div className='div-my-rate'>
                                    <p className='font-weight-bold'>My Rate: {rate}</p>
                                </div>
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