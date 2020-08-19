import React from 'react'
import Nav from './Nav'
import MovieDetail from './MovieDetail'
import WishList from './WishList'
import { fetchMovieReview } from '../utils/api'
import { Route } from 'react-router-dom'

export default class App extends React.Component {
  
  _isMounted = false;

  constructor(props) {
    super(props)

    this.state = {
      status: 'all',
      isSelected: false,
      isWishListDisabled: false,
      rate: null,
      movies: [],
      myMovies: [],
      error: null
    }

    this.addNewKeys = this.addNewKeys.bind(this)
    //this.disableMovieStatus = this.disableMovieStatus.bind(this)
    //this.selectMovie = this.selectMovie.bind(this)
    //this.unselectMovies = this.unselectMovies.bind(this)
    this.changeStatusToWishList = this.changeStatusToWishList.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }

  componentDidMount () {
    this._isMounted = true;
    
    fetchMovieReview()
      .then((data) => {
        if (this._isMounted) {
          this.setState({
            movies: data.results,
            error: null
          }, this.addNewKeys)
      }})
      .catch((error) => {
        console.warn('Error fetching data: ', error)
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  addNewKeys () {
    const { movies } = this.state
    const newMovies = movies.map(movie => ({
      ...movie,
      status: 'all',
      isSelected: false,
      isWishListDisabled: false,
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

  showMenu (event, movie) {
    event.preventDefault();
    const { isSelected } = movie

    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    myMoviesCopy[index].isSelected = !isSelected;
    this.setState({ myMovies: myMoviesCopy}, () => this.state.myMovies)
  }
/*
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
    },() => console.log('unselectMovies', this.state.myMovies))
  }
*/
  changeStatusToWishList (movie) {
    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    myMoviesCopy[index].status = 'wish_list';
    myMoviesCopy[index].isSelected = false;
    myMoviesCopy[index].isWishListDisabled = true;
    this.setState({ myMovies: myMoviesCopy})
  }

  /*
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
*/
  render() {
    const { myMovies } = this.state

    return (
      <div className='container'>
        <Route exact path="/" render={() => (
          <div>
            <Nav />
{/*
            <pre>{JSON.stringify(this.state.myMovies, null, 2)}</pre>
            {console.log(this.state.myMovies)}
*/}
            <MovieDetail 
              movies={myMovies} 
              onChangeStatusToWishList={this.changeStatusToWishList}
              onShowMenu={this.showMenu}
            />
          </div>
        )} />

        <Route exact path="/wishlist" render={() => (
          <div>
            <Nav />
            <WishList
              movies={myMovies}
              onShowMenu={this.showMenu}
            />
          </div>
        )} />

      </div>
    );
  }
}

