import React from 'react'

const Category = props => {
  const { category } = props

  return (
    <div style={{ width: 50, height: 50, margin: 10, padding: 50, background: '#F9CB6E'}}>
      {category.title}
    </div>
  )
}

export default Category

// import FavoritesContainer from '../../containers/FavoritesContainer'
// const handleOnClick = () => props.deleteCategory(category.id)
// <button onClick={handleOnClick}> x </button>
        // <FavoritesContainer category={category} />
