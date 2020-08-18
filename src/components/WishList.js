import React from 'react'
import Nav from './Nav'
import MovieDetail from './MovieDetail'

export default function WishList(movies, disableMovieStatus, wishListBtn, btnWatched, selectMovie, unselectMovies, changeToWishList ) {
    console.log(movies)
    return (
        <div>
            <h1>Wish List</h1>
        {/*    { movies.map((movie) => {
                const { status } = movie

                if(status === 'wish_list') {
                    return (
                        <MovieDetail
                        movies={movies}
                        onDisableMovieStatus={disableMovieStatus}
                        btnWishList={wishListBtn}
                        btnWatched={btnWatched}
                        onSelectMovie={selectMovie}
                        onUnselectMovies={unselectMovies}
                        onChangeStatusToWishList={changeToWishList}
                        />
                    )  
                }
            })}
        */}
        </div>
    )
}
