
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
