export function fetchMovieReview(start_date, end_date) {
  //console.log(start_date)
  //console.log(end_date)

  const endpoint = window.encodeURI(
    `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?opening-date=${start_date}:${end_date}&api-key=${process.env.REACT_APP_MOVIE_REVIEW_KEY}`
  );

  return fetch(endpoint).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

export function simulateLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "abc" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}
