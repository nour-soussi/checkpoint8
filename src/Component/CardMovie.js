import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import {useNavigate} from "react-router-dom"

function CardMovie({movie}) {

const navigate = useNavigate();
const handleDetails=()=>{
navigate(`/Details/${movie.id}`);
}

    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.poster} />
        <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.decription}
        </Card.Text>
        <ReactStars
    count={5}
    value={movie.rate}
    edit={false}
    size={24}
    activeColor="#ffd700"
    />
    <Button variant="primary" onClick={handleDetails}>Show details</Button>
    </Card.Body>
    </Card>
    </div>
    );
}

export default CardMovie;