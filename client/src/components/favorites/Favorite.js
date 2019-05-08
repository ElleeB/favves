import React from 'react'

const Favorite = props => {
  const { favorite } = props

   return (
    <div>
      {favorite.text}
    </div>
  )
}

export default Favorite
