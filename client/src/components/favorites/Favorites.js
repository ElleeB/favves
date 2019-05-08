
import React, { Component } from 'react'
import Favorite from './Favorite'

class Favorites extends Component {

  render() {
    const { favorites } = this.props
    const favoriteList = favorites.map(
      favorite => {
        return (
          <Favorite
            key={favorite.id}
            favorite={favorite}
          />
        )
      }
    )

    return(
      <ul>
        {favoriteList}
      </ul>
    )
  }
}

export default Favorites
