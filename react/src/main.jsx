import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Rating from './Rating.jsx'
import Todo from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Rating/> */}
    <Todo/>

  </StrictMode>,
)
