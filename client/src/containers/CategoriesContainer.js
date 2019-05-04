import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories/Categories'
import '../App.css'

class CategoriesContainer extends Component {

  render() {
    return (
      <div>
        <Categories categories={this.props.categories} addCategory={this.props.addCategory} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: text => dispatch({type: 'ADD_CATEGORY', text})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
