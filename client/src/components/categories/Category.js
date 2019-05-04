import React from 'react'

const Category = props => {
  const { category } = props

  return (
    <div>
      <li>
        {category.text}
      </li>
    </div>
  )
}

export default Category

// import FavoritesContainer from '../../containers/FavoritesContainer'
// const handleOnClick = () => props.deleteCategory(category.id)
// <button onClick={handleOnClick}> x </button>
        // <FavoritesContainer category={category} />
