import React from 'react'
import '../../App.css'

const Favorite = props => {
  const { favorite } = props

   return (
    <div className='favorite'>
      {favorite.text}
    </div>
  )
}

export default Favorite
