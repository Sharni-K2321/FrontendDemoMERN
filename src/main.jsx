import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Animal from './list.jsx'
//import Change from './change.jsx'
//import App from './app.jsx'
//import List from './order.jsx'
//import Hooks from './hooks'
//import Ref from './useref.jsx'
import Apps from './Apps'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Animal place="Forest"/>
    <Change value= {10}/> */}
    {/* <List/>
    <App/> 
    <Hooks/> 
    <Ref/>*/}
    <Apps/>
  </StrictMode>,
)
