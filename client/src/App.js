import React, { Component } from 'react'
import CategoriesContainer from './containers/CategoriesContainer'
import { connect } from 'react-redux'
import { fetchCategories } from './actions/fetchCategories'
import './App.css'

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
    console.log(this.props.categories)
  }

  render() {
    return (
      <div className="App">
        <CategoriesContainer categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(App)
