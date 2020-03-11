import React, { useState } from 'react'

export default function Register({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handlePasswordRepeat(e) {
    setPasswordRepeat(e.target.value)
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        setUser(username)
      }}
    >
      <label htmlFor="register-username">Username: </label>
      <input type="text" value={username} onChange={handleUsername} name="register-username" id="register-username" />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        name="register-password"
        id="register-password"
      />
      <label htmlFor="register-password-repeat">Password:</label>
      <input
        type="password"
        value={passwordRepeat}
        onChange={handlePasswordRepeat}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input type="submit" value="Register" disabled={username.length === 0 || password !== passwordRepeat} />
    </form>
  )
}
