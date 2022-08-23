import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

function CustomNavbar({setCaracter,setRate}) {
    
    const handleChange = (e)=> {
        setCaracter(e.target.value);
        }
        const handleRate=(e)=>{
            setRate(e);
        }
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                />
            </Form>
            </Navbar.Collapse>
            <ReactStars
            onChange={handleRate}
            edit={true}
        count={5}
        size={24}
        activeColor="#ffd700"
    />
            
        </Container>
        </Navbar>
    );
}

export default CustomNavbar;