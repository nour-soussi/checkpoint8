import Card from 'react-bootstrap/Card';
import React from "react"
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
return(
    <div> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.poster} style={{width:'250px'}}/> 
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.decription}</Card.Text>
            <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                edit={false}
                value={movie.rate}
                />
            </Card.Body>
        </Card>
    </div>    
        );
}
export default MovieCard;