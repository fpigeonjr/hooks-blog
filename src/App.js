import React from 'react'
import UserBar from './user/UserBar'
import Post from './post/Post'
import CreatePost from './post/CreatePost'

export default function App() {
  return (
    <>
      <UserBar />
      <Post title="React Hooks" content="The greatest things since sliced bread!" author="Frank Pigeon" />
      <CreatePost />
    </>
  )
}
