import React from 'react'
import { ThemeContext } from './App'

const Header = ({ text }) => (
  <ThemeContext.Consumer>{theme => <h1 style={{ color: theme.primaryColor }}>{text}</h1>}</ThemeContext.Consumer>
)

export default Header
