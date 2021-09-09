import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import 'antd/dist/antd.css'
import Header from './components/Header/Header'
import { LoginPage } from './components/Login/LoginPage'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader'
import store, { AppStateType } from './redux/redux-store'
import { withSuspense } from './hoc/withSuspense'
import { UsersPage } from './components/Users/UsersContainer'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

//import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
)
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))
// import ProfileContainer from './components/Profile/ProfileContainer'
const ProfileContainer = React.lazy(
  () => import('./components/Profile/ProfileContainer')
)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some error occured')
  }
  componentDidMount() {
    this.props.initializeApp()
    // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  // componentWillUnmount() {
  //     window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  // }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    const { SubMenu } = Menu
    const { Content, Footer, Sider } = Layout
    return (
      <Layout>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                // defaultSelectedKeys={['6']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Мой профиль">
                  <Menu.Item key="1">
                    {' '}
                    <Link to="/profile">Профиль</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    {' '}
                    <Link to="/dialogs">Сообщения</Link>
                  </Menu.Item>

                  <Menu.Item key="3">
                    {' '}
                    <Link to="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="music">Music</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    {' '}
                    <Link to="settings">Settings</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<LaptopOutlined />}
                  title="Пользователи"
                >
                  <Menu.Item key="6">
                    {' '}
                    <Link to="/users">Пользователи</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Чат">
                  <Menu.Item key="7">
                    {' '}
                    <Link to="/chat">Чат</Link>
                  </Menu.Item>
                  <Menu.Item key="8">option10</Menu.Item>
                  <Menu.Item key="9">option11</Menu.Item>
                  <Menu.Item key="10">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/profile" />}
                />
                <Route path="/dialogs" render={() => <SuspendedDialogs />} />
                <Route
                  path="/profile/:userId?"
                  render={() => <SuspendedProfile />}
                />
                <Route
                  path="/users"
                  render={() => <UsersPage pageTitle={'Название страницы'} />}
                />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/chat" render={() => <SuspendedChatPage />} />
                <Route path="*" render={() => <div>404 not found</div>} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Социальная сеть 2021</Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp
