import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories/Categories'
import { fetchCategories } from '../actions/fetchCategories'

class CategoriesContainer extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div style={{background: 'pink'}}>
        <Categories categories={this.props.categories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}


export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)
