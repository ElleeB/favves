import React, { Component } from 'react'

class CategoriesList extends Component {

  render() {
    const { categories } = this.props
    console.log(this.props)
    const categoriesList = categories.map((category) => <p key={category.id}>{category.title}</p>)


    return (
      <div>
        {categoriesList}
      </div>
    );
  }
}

export default CategoriesList
