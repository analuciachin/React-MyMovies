import React from 'react';
import Nav from './Nav';
import { fetchMovieReview } from '../utils/api'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedStatus: 'All',
      movies: [],
      error: null
    }
  }

  componentDidMount () {
    fetchMovieReview()
      .then((data) => this.setState({
        movies: data.results,
        error: null
      }))
      .catch((error) => {
        console.warn('Error fetching data: ', error)
      });
  }

  render() {
    return (
      <div className='container'>
        <Nav />
        <pre>{JSON.stringify(this.state.movies, null, 2)}</pre>
      </div>
    );
  }
}
