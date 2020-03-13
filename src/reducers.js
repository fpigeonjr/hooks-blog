import { useReducer } from "react"

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username
    case 'LOGOUT':
      return ''
    default:
      throw new Error()
  }
}

function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = { title: action.title, content: action.content, author: action.author }
      return [newPost, ...state]
    default:
      throw new Error()
  }
}

export default appReducer (state, action){
  user: userReducer(state.user, action),
  posts: postsReducer(state.posts, action)
}