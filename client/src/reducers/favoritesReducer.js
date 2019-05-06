import cuid from 'cuid'
export const cuidFn = cuid

export default function favoritesReducer(state = {
  loading: false,
  favorites: [] },
  action) {

  switch (action.type) {

    case 'FETCH_FAVORITES':
      return {...state, loading: false, favorites: action.payload}

      default:
        return state;
    }
  }
