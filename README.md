# MyMovies Project

My Movies is a web application that helps the user to manage a list of movies he wants to watch. The application loads up to 20 recent movies picked by the New York Times critics according to a date range. Each card represents a movie with its title, opening date in US, summary of the review and a link to the review itself. After the movies are loaded, the user can change change its status to _wish list_ or _watched_. If a movie is already watched, the user can give his own rate to it. The application works across all devices (mobile, tablet and desktop).

See the live application [here](https://mymovies-analuciachin.netlify.app/)

## Application Setup

The project uses Node.js, if you do not have it installed, you can download it here: [Node.js](https://nodejs.org/en/)

- run **git clone https://github.com/analuciachin/React-MyMovies** to clone this repository
- go into the application folder and install all modules listed as dependencies in package.json by running the command **npm install**
- run the app in the development mode with **npm run start**.
  A new browser window should automatically open displaying the app. If it does not, navigate to http://localhost:3000/ in your browser.

## Features

1. Login to the page (username: abc / password: 123)
2. In the _Search_ tab, choose the date range of the NYT Movie Review
3. The movies will be loaded in the _All_ tab. After all the movies are loaded, the user can change its status to _Wish List_ or _Watched_
4. Once the movie is watched, the user can give his/her own rate to it (from 1 to 5 stars)

## Resources and Documentation

- [create-react-app documentation](https://github.com/facebook/create-react-app)
- [NYT - Movie Reviews API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [react-icons](https://react-icons.netlify.com/#/)
- [react-spinner-material](https://www.npmjs.com/package/react-spinner-material)
