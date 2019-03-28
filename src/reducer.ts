
export const TITLE = 'title'

const initialState = {
  title: 'rock paper scissors'
}
  
export default (state = initialState, action) => {
switch (action.type) {
    case TITLE:
    return {
        ...state,
        title: 'Play a round'
    }
    default:
    return state
    }
}
  