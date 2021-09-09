import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Layout, Menu, Avatar, Row, Col, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentUserLogin,
  selectIsAuth,
} from '../../redux/auth-selectors'
import { logout } from '../../redux/auth-reducer'
export type MapPropsType = {}

const Header: React.FC<MapPropsType> = (props) => {
  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)
  const dispatch = useDispatch()
  const logoutCallback = () => {
    dispatch(logout())
  }
  const { Header } = Layout
  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={16}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              {' '}
              <NavLink to="/users">Пользователи</NavLink>
            </Menu.Item>
          </Menu>
        </Col>

        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        {isAuth ? (
          <Col span={3}>
            {login} - <Button onClick={logoutCallback}>Log out</Button>{' '}
          </Col>
        ) : (
          <Col span={3}>
            <Button>
              {' '}
              <Link to={'/login'}>Login</Link>{' '}
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  )
}

export default Header
