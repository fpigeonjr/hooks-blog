import React, { useState } from 'react'
import UserBar from './user/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'

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
  const [user, setUser] = useState('')
  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
