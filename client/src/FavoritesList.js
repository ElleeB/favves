import React, { Component } from 'react'
import './App.css'

class FavoritesList extends Component {

  render() {
    const { favorites } = this.props
    const favoritesList = favorites.map((favorite) => <div className="FavoritesList"><p key={favorite.id}>{favorite.text}</p></div>)

    return (
      <div>
        {favoritesList}
      </div>
    );
  }
}

export default FavoritesList
