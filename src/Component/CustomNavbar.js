import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

function CustomNavbar({setCaractere,setRate}) {

const handleChange = (e) =>{
    setCaractere(e.target.value);
}

const handleRate = (change) =>{
    setRate(change);
}
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                />
            </Form>
            <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                edit={true}
                onChange={handleRate}
                value={0}
                />

        </Container>
        </Navbar>
        </div>
    );
}

export default CustomNavbar;
