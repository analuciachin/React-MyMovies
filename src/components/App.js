import React from 'react'
import Nav from './Nav'
import MovieDetail from './MovieDetail'
import WishList from './WishList'
import Watched from './Watched'
import Loading from './Loading'
import Search from './Search'
import { fetchMovieReview } from '../utils/api'
import { Route } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default class App extends React.Component {
  
//  _isMounted = false;

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      temp_rate: '',
      movies: [],
      myMovies: [],
      start_date: '',
      end_date: '',
      is_data_fetched: false,
      error: null
    }

    this.addNewKeys = this.addNewKeys.bind(this)
    this.changeStatusToWishList = this.changeStatusToWishList.bind(this)
    this.changeStatusToWatched = this.changeStatusToWatched.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.getRate = this.getRate.bind(this)
    this.handleSubmitRate = this.handleSubmitRate.bind(this)
    this.displayStarRate = this.displayStarRate.bind(this)
    this.getStartDate = this.getStartDate.bind(this)
    this.getEndDate = this.getEndDate.bind(this)
    this.handleSubmitDates = this.handleSubmitDates.bind(this)
    this.getMaxDate = this.getMaxDate.bind(this)
  }
/*
  componentDidMount () {
    this._isMounted = true;
    
    fetchMovieReview(this.state.start_date, this.state.end_date)
      .then((data) => {
        if (this._isMounted) {
          this.setState({
            movies: data.results,
            error: null,
            loading: false,
          }, this.addNewKeys)
      }})
      .catch((error) => {
        console.warn('Error fetching data: ', error)
      })
  }
*/

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

  showMenu (event, movie) {
    event.preventDefault();
    const { isSelected } = movie

    const myMoviesCopy = [...this.state.myMovies];
    const url = movie.link.url;
    const index = myMoviesCopy.findIndex(movie => movie.link.url === url);
    myMoviesCopy[index].isSelected = !isSelected;
    this.setState({ myMovies: myMoviesCopy}, () => this.state.myMovies)
  }

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
      stars.push(<FaStar key={i} color='#ffd700' size={34}/>)
    }
  return <div>{stars}</div>
  }

  getStartDate (event) {
    this.setState({
      start_date: event.target.value
    })
  }

  getEndDate (event) {
    this.setState({
      end_date: event.target.value
    })
  }

  getMaxDate() {
    const today = new Date();
    
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    let maxDate;

    if(day<10 && month<10) {
      maxDate = year + '-0' + month + '-0' + day
    }
    else if(day<10 && month>10) {
      maxDate = year + '-' + month + '-0' + day
    }
    else if(day>10 && month<10) {
      maxDate = year + '-0' + month + '-' + day
    }
    else {
      maxDate = year + '-' + month + '-' + day
    }
    return maxDate;
  }

  handleSubmitDates (event) {
//    this._isMounted = true;
    const today = new Date()
    console.log(today)

    if(this.state.start_date > this.state.end_date) {
      alert("Invalid date range. Please select a start date before the end date.")
      event.preventDefault()
    }
    else if(this.state.end_date > today) {
      alert("Invalid end date. End date should not pass today's date")
      event.preventDefault()
    }
    else {
      event.preventDefault()
      console.log('submitForm function')
      console.log('start_date', this.state.start_date)
      console.log('end_date', this.state.end_date)
  
      fetchMovieReview(this.state.start_date, this.state.end_date)
        .then((data) => {
        //  if (this._isMounted) {
            this.setState({
              movies: data.results,
              error: null,
              loading: false,
              is_data_fetched: true
            }, this.addNewKeys)
        //}
        })
        .catch((error) => {
          console.warn('Error fetching data: ', error)
        })
    }
    
  }

  render() {
    const { myMovies, loading, error, is_data_fetched } = this.state

/*    if(loading === true) {
      return(
        <Loading text='Fetching data' />
      )
    }
*/

    if(error) {
      return (
        <p className='center-text'>{error}</p>
      )
    }

    return (
      <div className='container'>
        <Route exact path="/" render={() => (
          <div>
{/*
            <pre>{JSON.stringify(this.state.myMovies, null, 2)}</pre>
            {console.log(this.state.myMovies)}
*/}  
            { !is_data_fetched
              ? <Search
                  onChangeStartDate={this.getStartDate}
                  onChangeEndDate={this.getEndDate}
                  onSubmitForm={this.handleSubmitDates}
                  onGetMaxDate={this.getMaxDate}
                />
              : <div>
                  <Nav />
                  <MovieDetail 
                    movies={myMovies} 
                    onChangeStatusToWishList={this.changeStatusToWishList}
                    onChangeStatusToWatched = {this.changeStatusToWatched}
                    onShowMenu={this.showMenu}
                    onDisplayStarRate={this.displayStarRate}
                  />
              </div>
            }
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

