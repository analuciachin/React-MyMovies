import React from 'react'
import { FaCheckCircle, FaPlusCircle, FaRegCalendarAlt, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'

export default function WishList ({ movies, onShowMenu }) {

return (
    <ul className='grid space-around'>
        { movies.map((movie) => {
            const { display_title, opening_date, byline, summary_short, link, isSelected, status } = movie
            const { url } = link
            return ( status === 'wish_list' &&
                    <li key={url} className='movie bg-light'>
                        <div className='main-content'>
                            { isSelected
                                ? (
                                <button id={url} onClick={(event) => onShowMenu(event, movie)}>
                                    <IoIosArrowDropupCircle color='#990000' size={22} />
                                </button>
                                )
                                : (
                                <button id={url} onClick={(event) => onShowMenu(event, movie)}>
                                    <IoIosArrowDropdownCircle color='#990000' size={22} />
                                </button>
                                )
                            }
                            
                            { isSelected
                                ? (              
                                    <div
                                        id='menu'
                                        className='menu'
                                    >
                                        <button id='wish_list' className='btn-status' disabled>
                                            Wish List
                                        </button>
                                        <button id='watched' className='btn-status'>
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
                            <p className='center-text'><a href={url}>Review</a></p>
                        </div>
                    </li>
                )
            })}
    </ul>
)
}