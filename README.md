# MyMovies Project

MyMovies is a project that I created to practice coding with React. The goal of this project was to develop an application where the user can load up to 20 movies picked by the critics according to the date range. Each card represents a movie with its title, opening date in US, summary of the review and a link to the review itself. After the movies are loaded, the user can choose moving it to *wish list* or *watched*. If a movie is already watched, the user can give his own rate to it. The application works across all devices (mobile, tablet and desktop).

See the live application [here]()

## Application Setup
The project uses Node.js, if you do not have it installed, you can download it here: [Node.js](https://nodejs.org/en/)

* run git clone https://github.com/analuciachin/React-MyMovies to clone this repository
* go into the application folder and install all modules listed as dependencies in package.json by running the command **npm install**
* run the app in the development mode with **npm run start**
A new browser window should automatically open displaying the app. If it does not, navigate to http://localhost:3000/ in your browser.

## Features
1. Choose the period range of the NYT Movie Review
2. The movies will be loaded in the *All* tab. After all the movies are loaded, the user can change its status to *Wish List* or *Watched*
3. Once the movie status is watched, the user can give his/her own rate to it (from 1 to 5 stars)

## Resources and Documentation
* [create-react-app documentation](https://github.com/facebook/create-react-app)
* [NYT - Movie Reviews API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [react-icons](https://react-icons.netlify.com/#/)
* [react-spinner-material](https://www.npmjs.com/package/react-spinner-material)