import React, { Component } from 'react'
import CategoriesList from './CategoriesList'
import { connect } from 'react-redux'
import { fetchCategories } from './actions/fetchCategories'
import './App.css'

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div className="App">
        <CategoriesList categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(App)
