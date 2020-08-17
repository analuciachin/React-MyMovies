import React from 'react'
import { FaCheckCircle, FaPlusCircle, FaRegCalendarAlt, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'

export default class MovieDetail extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            showMenu: false,
            menuOpen: false,
            bookSelected: null
        }

        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true,
            menuOpen: true,
        }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu(event) {
        if (!event.target.closest('.menu')) {
            this.setState({
                showMenu: false,
                menuOpen: false,
            }, () => {
                document.removeEventListener('click', this.closeMenu)
            });
        }
    }

    render () {
        const { showMenu, menuOpen } = this.state
        const { movies, onDisableMovieStatus, btnWishList, btnWatched } = this.props

        return (
            <ul className='grid space-around'>
                { movies.map((movie) => {
                    const { display_title, opening_date, byline, summary_short, link } = movie
                    const { url } = link
                    return (
                        <li key={url} className='movie bg-light'>
                            <div className='main-content'>
                                { menuOpen
                                    ? (
                                    <button id={url} onClick={this.showMenu, () => onDisableMovieStatus(movie)}>
                                        <IoIosArrowDropupCircle color='#990000' size={22} />
                                    </button>
                                    )
                                    : (
                                    <button id={url} onClick={this.showMenu}>
                                        <IoIosArrowDropdownCircle color='#990000' size={22} />
                                    </button>
                                    )
                                }
                                
                                { showMenu 
                                    ? (              
                                        <div
                                            id='menu'
                                            className='menu'
                                        >
                                            <button className='btn-status' disabled={btnWishList}> Wish List </button>
                                            <button className='btn-status' disabled={btnWatched}> Watched </button>
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
}