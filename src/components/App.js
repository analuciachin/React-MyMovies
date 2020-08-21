import React from 'react'
import Nav from './Nav'
import MovieDetail from './MovieDetail'
import WishList from './WishList'
import Watched from './Watched'
import { fetchMovieReview } from '../utils/api'
import { Route } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default class App extends React.Component {
  
  _isMounted = false;

  constructor(props) {
    super(props)

    this.state = {
//      status: 'all',
//      isSelected: false,
//      isWishListDisabled: false,
//      isWatchedDisabled: false,
      temp_rate: '',
      movies: [],
      myMovies: [],
      error: null
    }

    this.addNewKeys = this.addNewKeys.bind(this)
    //this.disableMovieStatus = this.disableMovieStatus.bind(this)
    //this.selectMovie = this.selectMovie.bind(this)
    //this.unselectMovies = this.unselectMovies.bind(this)
    this.changeStatusToWishList = this.changeStatusToWishList.bind(this)
    this.changeStatusToWatched = this.changeStatusToWatched.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.getRate = this.getRate.bind(this)
    this.handleSubmitRate = this.handleSubmitRate.bind(this)
    this.displayStarRate = this.displayStarRate.bind(this)
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
      isWatchedDisabled: false,
      rate: ''
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
    myMoviesCopy[index].isWatchedDisabled = false;
    this.setState({ myMovies: myMoviesCopy})
  }

  changeStatusToWatched (movie) {
    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    myMoviesCopy[index].status = 'watched';
    myMoviesCopy[index].isSelected = false;
    myMoviesCopy[index].isWatchedDisabled = true;
    myMoviesCopy[index].isWishListDisabled = false;
    this.setState({ myMovies: myMoviesCopy})
  }

  getRate (event) {
    this.setState({
      temp_rate: event.target.value
    })
  }

  handleSubmitRate(event, movie) { 
    event.preventDefault();
    //alert('A rate was submitted: ' + this.state.rate);
    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    myMoviesCopy[index].rate = this.state.temp_rate;
    this.setState({ 
      myMovies: myMoviesCopy,
      temp_rate: ''
    })
  }

  displayStarRate (movie) {
    const { rate } = movie
    let stars=[]

    for(let i=0; i<rate; i++) {
      stars.push(<FaStar key={i} color='#ffff00' size={34}/>)
    }
  return <div>{stars}</div>
  }

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
              onChangeStatusToWatched = {this.changeStatusToWatched}
              onShowMenu={this.showMenu}
              onDisplayStarRate={this.displayStarRate}
            />
          </div>
        )} />

        <Route exact path="/wishlist" render={() => (
          <div>
            <Nav />
            <WishList
              movies={myMovies}
              onShowMenu={this.showMenu}
              onChangeStatusToWatched={this.changeStatusToWatched}
            />
          </div>
        )} />

        <Route exact path="/watched" render={() => (
          <div>
            <Nav />
            <Watched
              movies={myMovies}
              onShowMenu={this.showMenu}
              onChangeStatusToWishList={this.changeStatusToWishList}
              onGetRate={this.getRate}
              onHandleSubmitRate={this.handleSubmitRate}
              onDisplayStarRate={this.displayStarRate}
            />
          </div>
        )} />

      </div>
    );
  }
}

