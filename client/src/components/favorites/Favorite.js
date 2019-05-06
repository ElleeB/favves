import React from 'react'

const Favorite = props => {
  const { favorite } = props

  return (
    <div>
      {favorite.title}
    </div>
  )
}

export default Favorite
