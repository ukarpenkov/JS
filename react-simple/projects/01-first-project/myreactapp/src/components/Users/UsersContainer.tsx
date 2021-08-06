import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, requestUsers } from '../../redux/users-reducer'
import Preloader from '../common/preloader/Preloader'
import { compose } from 'redux'
import {
  getPageSize,
  getAllUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors'
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  followingInProgress: Array<number>
  users: Array<UserType>
}
type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}
type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }
  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsers: requestUsers,
    }
  )
)(UsersContainer)
