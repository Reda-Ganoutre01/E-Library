const initialState = {
    books: [],
  };
  
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BOOKS':
        return {
          ...state,
          books: action.books,
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  