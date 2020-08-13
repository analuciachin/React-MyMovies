import React from 'react'

export default function Nav({ selected, onUpdateStatus }) {
	const movieStatus = ['All', 'Wish List', 'Watched']

	return(
		<ul className='flex-center'>
			{movieStatus.map((status) => (
				<li key={status}>
					<button 
						className='btn-clear nav-link'
						style={status === selected ? { color: 'rgb(187,46,31)' } : null }
						onClick={() => onUpdateStatus(status)}>
						{status}	
					</button>
					
				</li>
			))}
		</ul>
	)
}	