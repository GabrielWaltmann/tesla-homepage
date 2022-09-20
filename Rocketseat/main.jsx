import React from 'react'
import ReactDOM from 'react-dom/client'
import {Index} from './components/pages/Index'
import  CreateGlobalStyle  from "./style"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
    
    <CreateGlobalStyle></CreateGlobalStyle>

  </React.StrictMode>
)
