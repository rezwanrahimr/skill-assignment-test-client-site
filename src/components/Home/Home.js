import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import url from '../../Api';
import auth from '../../firebase.init';

const Home = () => {

    const [tasks, setTask] = useState([]);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (!user?.email) return;
        fetch(url + '/todos?email=' + user?.email)
            .then(res => res.json())
            .then(result => {
                setTask(result)
            })

    }, [user?.email, update])
    const complete = (id) => {
        const body = { status: 'completed' }
        fetch(url + '/update-todo/' + id, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)

        })
            .then(res => res.json())
            .then(result => {
                if (result.status === 1) {
                    setUpdate(!update)
                }
            })
    }
    const deleteTodo = (id) => {

        fetch(url + '/todos/' + id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },


        })
            .then(res => res.json())
            .then(result => {
                if (result.status === 1) {
                    setUpdate(!update)
                }
            })
    }
    return (
        <div>
            <h1>This is Home Page</h1>
            <Button className='my-5' variant="success" size="lg" onClick={() => navigate("/addtask")} active>
            Add Task + 
            </Button>{' '}
          
            <div>
                {
                    tasks.map(task => <li key={task._id} > {task.status === 'completed' ? <s >{task.title}</s> : task.title} <button onClick={() => complete(task._id)} >complete</button> <button onClick={() => deleteTodo(task._id)} >delete</button> </li>)
                }
            </div>
        </div>
    );
};

export default Home;