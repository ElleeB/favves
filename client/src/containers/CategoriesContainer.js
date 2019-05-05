import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories/Categories'
import '../App.css'

class CategoriesContainer extends Component {

  render() {
    return (
      <div>
        <Categories categories={this.props.categories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}


export default connect(mapStateToProps)(CategoriesContainer)
