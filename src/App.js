import React from 'react'
import UserBar from './user/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'

const user = 'Frank Pigeon'
const posts = [
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
export default function App() {
  return (
    <div style={{ padding: 8 }}>
      <UserBar />
      <br/>
      <CreatePost user={user}/>
      <br/>
      <hr/>
      <PostList posts={posts} />
    </div>
  )
}
