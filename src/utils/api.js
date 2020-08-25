import apiConfig from './apiKeys'

export function fetchMovieReview (start_date, end_date) {

	//console.log(start_date)
	//console.log(end_date)
	const endpoint = window.encodeURI(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?opening-date=${start_date};${end_date}&api-key=${apiConfig.movieReviewKey}`)

	return fetch(endpoint)
		.then(response => {
			if(!response.ok) {
				throw new Error();
			}
			return response.json();
		})
}