import React, { Component } from 'react'
import './App.css'

class CategoriesList extends Component {

  render() {
    const { categories } = this.props

    const categoriesList = categories.map((category) => <div className="CategoryCard" key={category.id} style={{ width: 50, height: 50, background: '#F9CB6E'}}>{category.title}</div>)

    return (
      <div>
        {categoriesList}
      </div>
    );
  }
}

export default CategoriesList
