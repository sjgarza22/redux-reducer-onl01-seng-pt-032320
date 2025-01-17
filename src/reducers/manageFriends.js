export function manageFriends(state = [], action){
    switch (action.type) {
        case 'ADD_FRIEND':
          state.friends.push(action.friend);
          return { friends:  state.friends}
        case 'REMOVE_FRIEND':
            return { friends: state.friends.filter(v => v.id !== action.id) }
        default:
          return state;
    }
}
