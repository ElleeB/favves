
import React, { Component } from 'react'
import Category from './Category'

class Categories extends Component {

  render() {
    const { categories } = this.props
    const categoryList = categories.categories.map(
         category => {
        return (
          <Category
            key={category.id}
            category={category}
          />
        )
      }
    )

    return(
      <ul>
        {categoryList}
      </ul>
    )
  }
}

export default Categories
