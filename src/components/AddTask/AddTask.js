import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import url from '../../Api';
import auth from '../../firebase.init';

const AddTask = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [value, setValue] = useState({ title: '', description: '' });

    const addTask = (e) => {
        e.preventDefault();
        const body = {
            ...value,
            status: "publish",
            email: user.email
        }
        fetch(url + '/todos', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)

        })
            .then(res => res.json())
            .then(result => {
                if (result.status === 1) {
                    navigate('/home')
                }
            })
    }
    const handleInput = (e) => {
        setValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Form onSubmit={addTask}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control name='title' type="text" placeholder="Name" onChange={handleInput} />
                            
                            <Form.Control name="description" onChange={handleInput} className='my-3' placeholder='Description' as="textarea" rows={3} />
                            <Button type='submit' variant="warning">Submit</Button>{' '}
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
};

export default AddTask;