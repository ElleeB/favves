import React from 'react'
import FavoritesContainer from '../../containers/FavoritesContainer'

const Category = props => {
  const { category } = props

  return (
    <div>
      {category.title}
      <FavoritesContainer category={category} />
    </div>
  )
}

export default Category

// style={{ width: 50, height: 50, margin: 10, padding: 50, background: '#F9CB6E'}}
// <FavoritesContainer category={category} />
//      <FavoritesContainer category={category} />
