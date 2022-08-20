import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function AddMovie({addFilm}) {
    const [film,setFilm]=useState({id:0,title:'',description:'',poster:'',rate:0});

    const handleSubmit=(e)=>{
        e.preventDefault();
        addFilm(film);
    }

    const handleChange=(e)=>{
        setFilm({...film,id:Math.floor(Math.random()*10000)+1,[e.target.name]:e.target.value,});
        
    
    }

    return (
        <div>
        <Form style={{width:'50%', margin:"auto"}} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>le nom du film</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter the title" 
        onChange={handleChange} 
        name="title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>la description</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter the description" 
        onChange={handleChange} 
        name="description"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" 
        placeholder="Enter the rate" 
        onChange={handleChange}
        name="rate"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter l'url de l'image" onChange={handleChange} name="poster" />
        </Form.Group>

        <Button variant="primary" type="submit" >
        Submit
        </Button>
    </Form>
    </div>
    )
}

export default AddMovie