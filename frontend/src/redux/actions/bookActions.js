// bookActions.js
export const fetchBooks = () => {
    return async (dispatch) => {
      const response = await fetch('http://localhost:8080/api/books');
      const data = await response.json();
      dispatch({
        type: 'SET_BOOKS',
        books: data,
      });
    };
  };
  