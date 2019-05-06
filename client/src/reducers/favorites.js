import cuid from 'cuid'
export const cuidFn = cuid

export default function favorites(state = {favorites: [] },
  action) {

  switch (action.type) {

    case 'FETCH_FAVORITES':
      return {...state, favorites: action.payload}

      default:
        return state;
    }
  }
