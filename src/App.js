
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequreAuth from './components/RequreAuth/RequreAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>

       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<RequreAuth><Home></Home></RequreAuth> }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signUp' element={<SignUp></SignUp>}></Route>
       <Route path='/addtask' element={<RequreAuth><AddTask></AddTask></RequreAuth> }></Route>
     </Routes>
    </div>
  );
}

export default App;
