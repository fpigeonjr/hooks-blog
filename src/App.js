import React, { useState, useReducer } from 'react'
import UserBar from './user/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'

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

export default function App() {
  const defaultPosts = [
    {
      title: 'React Hooks',
      content: 'The greatest things since sliced bread!',
      author: 'Frank Pigeon'
    },
    {
      title: 'Using React Fragments',
      content: 'Keeping the DOM Clean',
      author: 'Frank Pigeon'
    }
  ]
  const [posts, setPosts] = useState(defaultPosts)
  const [user, dispatchUser] = useReducer(userReducer, '')
  // const [user, setUser] = useState('')
  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
