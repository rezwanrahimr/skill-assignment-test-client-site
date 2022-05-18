
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequreAuth from './components/RequreAuth/RequreAuth';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>

       <Route path='/' element={<RequreAuth><Home></Home></RequreAuth>}></Route>
       <Route path='/home' element={<RequreAuth><Home></Home></RequreAuth> }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signUp' element={<SignUp></SignUp>}></Route>
       <Route path='/addtask' element={<RequreAuth><AddTask></AddTask></RequreAuth> }></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
