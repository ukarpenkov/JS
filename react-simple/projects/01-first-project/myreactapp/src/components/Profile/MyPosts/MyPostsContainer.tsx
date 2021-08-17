import React from 'react'
import { actions } from '../../../redux/profile-reducer'
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'

// const MyPostsContainer = () => {
//   return <StoreContext.Consumer>
//     {
//       (store) => {
//         let state = store.getState()
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text)
//           store.dispatch(action)
//         }
//         return <MyPosts updateNewPostText={onPostChange}
//           addPost={addPost}
//           posts={state.profilePage.posts}
//           newPostText={state.profilePage.newPostText} />

//       }
//     }
//   </StoreContext.Consumer>

// }

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    // newPostText: state.profilePage.newPostText,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // updateNewPostText: (text) => {
//     //   let action = updateNewPostTextActionCreator(text);
//     //   dispatch(action);
//     // },
//     addPost: (newPostText) => {
//       dispatch(actions.addPostActionCreator(newPostText))
//     },
//   }
// }
const MyPostsContainer = connect<
  MapPropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  addPost: actions.addPostActionCreator,
})(MyPosts)

export default MyPostsContainer
