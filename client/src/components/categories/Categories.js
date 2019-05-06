
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



// <CategoriesList categories={this.props.categories}/>
// const { categories } = this.props
// const categoriesList = categories.map((category) => <div className="CategoryCard"><p style={{ width: 50, height: 50, background: '#F9CB6E'}} key={category.id}>{category.title}</p></div>)
