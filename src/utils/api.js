import apiConfig from './apiKeys'

export function fetchMovieReview () {

	const endpoint = window.encodeURI(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?opening-date=2010-01-01;2020-01-01&api-key=${apiConfig.movieReviewKey}`)

	return fetch(endpoint)
		.then(response => {
			if(!response.ok) {
				throw new Error();
			}
			return response.json();
		})
}