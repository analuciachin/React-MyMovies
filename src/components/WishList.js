import React from 'react'
import { FaHeart, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'

export default function WishList ({ movies, onShowMenu, onChangeStatusToWatched }) {

return (
    <ul className='grid space-around'>
        { movies.map((movie) => {
            const { display_title, opening_date, byline, summary_short, link, isSelected, isWishListDisabled, status } = movie
            const { url } = link
            return ( status === 'wish_list' &&
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