import React from 'react'
import Nav from './Nav'
import MovieDetail from './MovieDetail'
import WishList from './WishList'
import { fetchMovieReview } from '../utils/api'
import { Route } from 'react-router-dom'

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

    this.addNewKeys = this.addNewKeys.bind(this)
    this.disableMovieStatus = this.disableMovieStatus.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
    this.unselectMovies = this.unselectMovies.bind(this)
    this.changeStatusToWishList = this.changeStatusToWishList.bind(this)
  }

  componentDidMount () {
    fetchMovieReview()
      .then((data) => this.setState({
        movies: data.results,
        error: null
      }, this.addNewKeys))
      .catch((error) => {
        console.warn('Error fetching data: ', error)
      })
  }

  addNewKeys () {
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
    myMoviesCopy[index].selected = true;
    this.setState({ myMovies: myMoviesCopy})
  }

  unselectMovies () {
    const { movies } = this.state
    const updateMovies = movies.map(movie => ({
      ...movie,
      selected: false
    }))

    this.setState({
      myMovies: updateMovies
    })
  }

  changeStatusToWishList (movie) {
    //const currentStatus = movie.status
    console.log(movie.status)
    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    myMoviesCopy[index].status = 'wish_list';
    this.setState({ myMovies: myMoviesCopy}, () => console.log(this.state.myMovies))
  }

  disableMovieStatus = (movie) => {
    const movieStatus = movie.status
    const movieSelected = movie.link.url

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

    /*
              <WishList
            movies={myMovies}
            disableMovieStatus={this.disableMovieStatus}
            wishListBtn={wishListBtn} 
            btnWatched={watchedBtn} 
            selectMovie={this.selectMovie} 
            unselectMovies={this.unselectMovies}
            changeToWishList={this.changeStatusToWishList}
          />
    */

    return (
      <div className='container'>
        <Route exact path="/" render={() => (
          <div>
            <Nav />
            {/*<pre>{JSON.stringify(this.state.myMovies, null, 2)}</pre>*/}
            <MovieDetail 
              movies={myMovies} 
              onDisableMovieStatus={this.disableMovieStatus}
              btnWishList={wishListBtn}           
              btnWatched={watchedBtn} 
              onSelectMovie={this.selectMovie} 
              onUnselectMovies={this.unselectMovies}
              onChangeStatusToWishList={this.changeStatusToWishList}
            />
          </div>
        )} />

        <Route exact path="/wishlist" render={() => (
            <WishList
            movies={myMovies}
            disableMovieStatus={this.disableMovieStatus}
            wishListBtn={wishListBtn} 
            btnWatched={watchedBtn} 
            selectMovie={this.selectMovie} 
            unselectMovies={this.unselectMovies}
            changeToWishList={this.changeStatusToWishList}
          />
        )} />

      </div>
    );
  }
}

