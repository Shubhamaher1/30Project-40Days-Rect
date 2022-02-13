import React from 'react'

export const IncomeExpence = () => {
  return (
    <div className='inc-exp-container'>
        <div>
        <h4>Income</h4>
        <p className='money plus' id='money-plus'>00</p>
        </div>
        <div>
        <h4>Expense</h4>
        <p className='money minus' id='money-minus'>00</p>
        </div>
    </div>
  )
}
