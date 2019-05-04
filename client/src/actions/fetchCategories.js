export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES' })
    return fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(categories => dispatch({ type: 'FETCH_CATEGORIES', payload: categories }))
  }
}
