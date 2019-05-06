import cuid from 'cuid'
export const cuidFn = cuid

export default function categories(state = {
  categories: [] },
  action) {

  switch (action.type) {

    case 'FETCH_CATEGORIES':
      return {...state, categories: action.payload}
      default:
        return state;
    }
  }
