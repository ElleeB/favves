import React, { Component } from 'react'
import CategoriesList from './CategoriesList'
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categoryActions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <header className="App-header">
          <h2>header</h2>
        </header>
        <CategoriesList categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(App)
