import React from 'react'
import ReactDOM from 'react-dom/client'
import {Page} from './components/Page/Page'
import  CreateGlobalStyle  from "./style"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <Page/>
    <CreateGlobalStyle></CreateGlobalStyle>

  </React.StrictMode>
)
