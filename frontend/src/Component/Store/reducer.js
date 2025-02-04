// const intialstate={
//     n:0
// }

// export const reducer=(action,state)=>{

// }

const  initialState = {
    n:0
}

export const reducer=(state = initialState, action) => {
  switch (action.type) {

  case 'add':
    return { ...state,n:state.n+1 }

  default:
    return state
  }
}
