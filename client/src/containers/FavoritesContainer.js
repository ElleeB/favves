import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from '../components/favorites/Favorites'
import { fetchFavorites } from '../actions/fetchFavorites'
import '../App.css'

class FavoritesContainer extends Component {

  componentDidMount() {
    this.props.fetchFavorites()
  }

  render() {
    return (
      <div>
        <Favorites favorites={this.props.favorites} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {favorites: state.favorites}
}


export default connect(mapStateToProps, {fetchFavorites})(FavoritesContainer)
