import { Dispatch } from 'react'
import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { usersAPI } from '../api/usersAPI'

import { PhotosType, UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store'

// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHIN'
// const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users ID
}

type InitialState = typeof initialState

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialState => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case 'SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      }
    }
    default:
      return state
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
      isFetching,
      userId,
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      count: totalUsersCount,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),
  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),
  unfollowSuccess: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

const followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  let data = await apiMethod(userId)
  if (data.data.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    )
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    )
  }
}

export default usersReducer
