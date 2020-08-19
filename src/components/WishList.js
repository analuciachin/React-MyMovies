import React from 'react'
//import Nav from './Nav'
import MovieDetail from './MovieDetail'

export default function WishList({ movies, selectMovie, unselectMovies, changeToWishList, showMenu }) {

    return (
        <div>
            <h1>Wish List</h1>
            {/*<pre>{JSON.stringify(movies, null, 2)}</pre>*/}
            
            <ul>
                { movies.map((movie) => {         
                    const { status, link } = movie
                    const { url } = link
                    return ( status === 'wish_list'     
                    ?   <div key={url}>
                        <li>             
                            <MovieDetail
                                movies={movies}
                                onSelectMovie={selectMovie}
                                onUnselectMovies={unselectMovies}
                                onChangeStatusToWishList={changeToWishList}
                            />
                        </li>
                        {console.log(status)}
                        </div>
                    : null
                    )
                })}
            </ul>
        </div>
    )
}
