import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorites from '../components/favorites/Favorites'
import { fetchFavorites } from '../actions/fetchFavorites'

class FavoritesContainer extends Component {

  componentDidMount() {
    this.props.fetchFavorites()
  }

  render() {

    return (
      <div style={{background: '#CCFFFF'}}>
        <Favorites favorites={this.props.favorites.favorites.filter(favorite => favorite.category_id === this.props.category.id)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {favorites: state.favorites}
}

export default connect(mapStateToProps, {fetchFavorites})(FavoritesContainer)
