import React from 'react'
import SpentItem from './SpentItem'

const SpentList = () => {
  const expenses = [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	];
  return (
    <>
      <ul className='list-group'>
			{expenses.map((expense) => (
				<SpentItem id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    </>
  )
}

export default SpentList
