import React from 'react'
import Nav from './Nav'
import MovieDetail from './MovieDetail'
import { fetchMovieReview } from '../utils/api'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedStatus: 'all',
      rate: null,
      movies: [],
      myMovies: [],
      wishListBtn: false,
      watchedBtn: false,
      error: null
    }

    this.addStatusRate = this.addStatusRate.bind(this)
    this.disableMovieStatus = this.disableMovieStatus.bind(this)
  }

  componentDidMount () {
    fetchMovieReview()
      .then((data) => this.setState({
        movies: data.results,
        error: null
      }, this.addStatusRate))
      .catch((error) => {
        console.warn('Error fetching data: ', error)
      })
  }

  addStatusRate () {
    const { movies } = this.state
    const newMovies = movies.map(movies => ({
      ...movies,
      status: 'wish_list',
      rate: null
    }))

    this.setState({
      myMovies: newMovies
    })
  }
  
  disableMovieStatus = (movie) => {
    const movieStatus = movie.status
    
    if (movieStatus === 'wish_list') {
      this.setState({
        wishListBtn: true
      })
    }
    else if (movieStatus === 'watched') {
      this.setState({
        watchedBtn: true
      })
    }
  }

  render() {
    const { myMovies, wishListBtn, watchedBtn } = this.state

    return (
      <div className='container'>
        <Nav />
        {/*<pre>{JSON.stringify(this.state.myMovies, null, 2)}</pre>*/}
        <MovieDetail movies={myMovies} onDisableMovieStatus={this.disableMovieStatus} btnWishList={wishListBtn} 
                    btnWatched={watchedBtn} />
      </div>
    );
  }
}

