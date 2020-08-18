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
    //this.changeMovieStatus = this.changeMovieStatus.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
    //this.selectMovieV1 = this.selectMovieV1.bind(this)
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
    const newMovies = movies.map(movie => ({
      ...movie,
      status: 'all',
      selected: false,
      rate: null
    }))

    this.setState({
      myMovies: newMovies
    })
  }
/*
  selectMovie (movie) {
    this.setState(({ movie }) => ({
      movie: {
        ...movie,
        selected: true
      }
    }),() => console.log(movie))
  }
*/
  selectMovie (movie) {
    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    //console.log(index)
    myMoviesCopy[index].selected = true;
    this.setState({ myMovies: myMoviesCopy}, () => console.log(this.state.myMovies))
  }

  unselectMovie (movie) {
    
  }

  disableMovieStatus = (movie) => {
    const movieStatus = movie.status
    const movieSelected = movie.link.url
    //console.log(movieSelected)

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
                    btnWatched={watchedBtn} onSelectMovie={this.selectMovie} />
      </div>
    );
  }
}

