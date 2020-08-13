import React from 'react'
import { FaCheckCircle, FaPlusCircle, FaRegCalendarAlt, FaRegFileAlt, FaRegUser } from 'react-icons/fa'

export default function MovieDetail ({ movies }) {
    return (
        <ul className='grid space-around'>
            {movies.map((movie) => {
                const { display_title, opening_date, byline, summary_short, link } = movie
                const { url } = link
                return (
                    <li key={url} className='movie bg-light'>
                        <div className='main-content'>
                            <FaPlusCircle color='#990000' size={22} />
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