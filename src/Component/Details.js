import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Details({Films}) {

const {id}=useParams();
const foundArticle=Films.find((elt)=>
elt.id==id
)
    return (
        <div className="container"
        style={{marginTop:'20%',
        }}>
        <Link to="/">
        <Button variant="primary">go back</Button>
        </Link>
        <br/><br/>
        <h3>watch trailer</h3>
        <iframe width="500" height="320" src={foundArticle.trailerLink}> </iframe>
        <h3>description</h3>
        <div>{foundArticle.decription}</div>
        </div>
        );
    }
    
    export default Details;