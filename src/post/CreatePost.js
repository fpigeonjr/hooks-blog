import React, { useState } from 'react'

export default function CreatePost({ user, posts, dispatch }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleContent(e) {
    setContent(e.target.value)
  }

  function handleCreate() {
    const newPost = { title, content, author: user }
    dispatch({ type: CREATE_POST, title, content, author: user })
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleCreate()
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  )
}
