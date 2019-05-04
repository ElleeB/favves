export function fetchFavorites() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITES' })
    return fetch('http://localhost:3000/api/favorites')
      .then(response => response.json())
      .then(favorites => dispatch({ type: 'FETCH_FAVORITES', payload: favorites }))
  }
}
