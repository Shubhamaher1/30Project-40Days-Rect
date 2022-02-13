import React from 'react'

export const List = () => {
  return (
    <>
    <h3>History</h3>
    <ul id='list' className='list'>
        <li className='minus'>
            Cash<span>-500</span>
            <button className='delet-btn'>X</button>
        </li>
    </ul>
    </>
  )
}
