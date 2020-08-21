import React from 'react'

export default function Search ({ start_date, end_date }) {

return (
    <React.Fragment>
        <h1>Select the period of the review</h1>
        <form>
            <label htmlFor='start_date'>Start date:</label>
            <input type='date' id='start-date' />
            <label htmlFor='end_date'>End date:</label>
            <input type='date' id='end-date' />
            <input type='submit' />
        </form>
    </React.Fragment>
)

}