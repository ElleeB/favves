import React from 'react'

const Favorite = props => {
  const { favorite } = props

   return (
    <div style={{background: '#CCFFFF'}}>
      {favorite.text}
    </div>
  )
}

export default Favorite
