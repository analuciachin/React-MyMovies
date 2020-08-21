import apiConfig from './apiKeys'

export function fetchMovieReview ({ start_date, end_date }) {

	console.log(start_date)
	console.log(end_date)
	const endpoint = window.encodeURI(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?opening-date=2010-01-01;2020-01-01&api-key=${apiConfig.movieReviewKey}`)
    //console.log('start_date', start_date.toLocaleDateString());
    //console.log('end_date', end_date)
	return fetch(endpoint)
		.then(response => {
			if(!response.ok) {
				throw new Error();
			}
			return response.json();
		})
}