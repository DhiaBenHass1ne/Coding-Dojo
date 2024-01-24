import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Update from './components/Update'
import Create from './components/Create'
import { DeepChat } from "deep-chat-react";
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/create' element={<Create/>} ></Route>
      <Route path='/author/update/:id' element={<Update/>} ></Route>
    </Routes>
    <DeepChat ></DeepChat>
    </>
  )
}

export default App
