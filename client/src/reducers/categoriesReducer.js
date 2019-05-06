import cuid from 'cuid'
export const cuidFn = cuid

export default function categoriesReducer(state = {
  loading: false,
  categories: [] },
  action) {

  switch (action.type) {

    case 'FETCH_CATEGORIES':
      return {...state, loading: false, categories: action.payload}

      default:
        return state;
    }
  }
