import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../src/firebase.init'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (error) {
       toast(error.message);
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        navigate('/home')
      }
   
    return (
        <div>
            <div className="container mt-5 pt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 m-auto">
                        <h3>Please Login: </h3>
                        <div className="card border-0 shadow">
                            <div className="card-body">

                                <form >
                                    <input
                                         value={email}
                                         onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control my-4 py-2"
                                        placeholder="username"
                                    />
                                    <input
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control my-4 py-2"
                                        placeholder="password"
                                    />
                                    <div className="text-center mt-3">
                                        <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="btn btn-primary mb-3">
                                            Login
                                        </button>

                                        <p   onClick={() => navigate("/signup")}>
                                            Create New Account ?
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;