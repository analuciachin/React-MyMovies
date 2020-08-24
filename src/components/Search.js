import React from 'react'

export default function Search ({ onChangeStartDate, onChangeEndDate, onSubmitForm, onGetMaxDate }) {

    return (
        <React.Fragment>
            <h1>Select the period of the review</h1>
            <form onSubmit={onSubmitForm}>
                <label htmlFor='start_date' className='search-label'>Start date:</label>
                <input type='date' id='start-date' className='search-input' onChange={onChangeStartDate} />
                <label htmlFor='end_date' className='search-label'>End date:</label>
                <input type='date' id='end-date' className='search-input' onChange={onChangeEndDate} max={onGetMaxDate()}/>
                <input type='submit' className='form-submit' />
            </form>
            
        </React.Fragment>
    )
}