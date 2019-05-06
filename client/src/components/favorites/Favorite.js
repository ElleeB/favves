import React from 'react'

const Favorite = props => {
  const { favorite } = props

  return (
    <div style={{ width: 50, height: 50, margin: 10, padding: 50, background: '#F9CB6E'}}>
      {favorite.title}
    </div>
  )
}

export default Favorite
