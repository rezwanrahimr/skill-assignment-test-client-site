import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
  
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <div>
          <p>Registered User: {user.email}</p>
        </div>
      );
    }
    return (
        <div>
            <div className="container mt-5 pt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 m-auto">
                        <h3>Please Sign Up: </h3>
                        <div className="card border-0 shadow">
                            <div className="card-body">

                                <form>
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
                                        <button onClick={() => createUserWithEmailAndPassword(email, password)} type="submit" className="btn btn-primary mb-3">
                                            Sign Up
                                        </button>

                                        <p onClick={() => navigate("/login")}>
                                        Alredy have a account ?
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

export default SignUp;