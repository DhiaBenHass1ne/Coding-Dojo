import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Message from './components/Message';
import Color from './components/Color';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:msg' element={<Message/>}/>
        <Route path='/:txt/:bg/:fc' element={<Color/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
