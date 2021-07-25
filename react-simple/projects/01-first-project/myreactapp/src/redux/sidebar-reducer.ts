let initialState = {
  sidebarFriends: [{ name: 'Ura' }, { name: 'Petya' }, { name: 'Vasya' }],
}

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any) => {
  return state
}

export default sidebarReducer
