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
      error: null
    }

    this.addStatusRate = this.addStatusRate.bind(this)
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

  render() {
    const { movies } = this.state

    return (
      <div className='container'>
        <Nav />
        {/*<pre>{JSON.stringify(this.state.myMovies, null, 2)}</pre>*/}
        <MovieDetail movies={movies} />
      </div>
    );
  }
}

