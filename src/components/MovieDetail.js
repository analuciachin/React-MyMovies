import React from 'react'

export default function MovieDetail ({ movies }) {
    return (
        <ul>
            {movies.map((movie, index) => {
                const { display_title, opening_date, byline, headline, link } = movie
                const { url } = link

                return (
                    
                )
            })}

        </ul>
    )
}