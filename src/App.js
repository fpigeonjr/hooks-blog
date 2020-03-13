import React, { useState, useReducer, useEffect } from 'react'
import UserBar from './user/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import appReducer from './reducers'
import Header from './Header'

export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' })

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

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
    } else {
      document.title = 'React Hooks Blog'
    }
  }, [user])

  return (
    <>
      <ThemeContext.Provider value={{ primaryColor: 'coral' }}>
        <Header text="Hello World" />
        <ThemeContext.Provider value={{ primaryColor: 'deepskyblue' }}>
          <Header text="This is a test" />
        </ThemeContext.Provider>
      </ThemeContext.Provider>
      <div style={{ padding: 8 }}>
        <UserBar user={user} dispatch={dispatch} />
        <br />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </>
  )
}
