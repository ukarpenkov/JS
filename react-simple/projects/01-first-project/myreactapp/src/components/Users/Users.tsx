import React, { useEffect } from 'react'
import Paginator from '../common/Paginator/Paginator'
import UserItem from './UserItem'
import UsersSearchForm from './UserSearchForm'
import {
  FilterType,
  followUser,
  requestUsers,
  unfollowUser,
} from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllUsers,
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
} from '../../redux/users-selectors'
import { useHistory } from 'react-router'
import * as queryString from 'query-string'

type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {
  const totalUsersCount = useSelector(getTotalUsersCount)
  const users = useSelector(getAllUsers)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as {
      term: string
      page: string
      friend: string
    }
    let actualPage = currentPage
    let actualFilter = filter
    if (!!parsed.page) {
      actualPage = Number(parsed.page)
    }
    if (!!parsed.term) {
      actualFilter = { ...actualFilter, term: parsed.term as string }
    }

    switch (parsed.friend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null }
        break
      case 'true':
        actualFilter = { ...actualFilter, friend: true }
        break
      case 'false':
        actualFilter = { ...actualFilter, friend: false }
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  }, [])

  useEffect(() => {
    history.push({
      pathname: '/users',
      search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`,
    })
  }, [filter, currentPage])

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }
  const follow = (userId: number) => {
    dispatch(followUser(userId))
  }
  const unfollow = (userId: number) => {
    dispatch(unfollowUser(userId))
  }

  return (
    <div>
      <div></div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <div>
        {users.map((u) => (
          <UserItem
            user={u}
            followingInProgress={followingInProgress}
            key={u.id}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
    </div>
  )
}
