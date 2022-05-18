import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import url from '../../Api';
import auth from '../../firebase.init';

const AddTask = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [value,setValue] = useState({title:'',description:''});
    console.log(user)
    const addTask = (e) => {
        e.preventDefault();
        const body = {
            ...value,
            status: "publish",
            email: user.email
        }
        fetch(url+'/todos',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(body)

        })
        .then(res => res.json())
        .then(result => {
            if(result.status===1){
                navigate('/home')
            }
        })
    }

    const handleInput = (e) =>{
        setValue(prev=>({...prev,[e.target.name]: e.target.value}))

    }
    return (
        <div>
            <h6>add task </h6>
            <form onSubmit={addTask}>
                <input name='title' onChange={handleInput} type="text" />
                <textarea name="description"  onChange={handleInput} id="" cols="30" rows="10"></textarea>
                <button type='submit'>submit</button>
            </form>

        </div>
    );
};

export default AddTask;