import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
                    toast('Complete')
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
        <div className='container mt-4'>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task,index) => <tr  key={task._id}>
                                <td>{index+1}</td>
                                <td>{task.status === 'completed' ? <s >{task.title}</s> : task.title}</td>
                                <td>{task.description}</td>
                                <td> <Button variant="warning" onClick={() => complete(task._id)}>Complete</Button>{' '}</td>
                                <td> <Button variant="danger" onClick={() => deleteTodo(task._id)}>Delete</Button>{' '}</td>
                            </tr>)
                        }
                       
                    </tbody>
                </Table>
            </div>
            <Button className='my-5' variant="success" size="lg" onClick={() => navigate("/addtask")} active>
                Add Task +
            </Button>{' '}
           
        </div>
    );
};

export default Home;