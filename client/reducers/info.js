export default function(state={}, action) {
  switch(action.type) {
    case 'BASIC_INFO_FORM':
      return {...action.payload};
    case 'PERSONAL_INFO_FORM':
      return {...state, ...action.payload}
    case 'COMPLETE_FORM':
    console.log({...state, complete: true});
      return {...state, complete: true}
    default:
      return state;
  }
}

