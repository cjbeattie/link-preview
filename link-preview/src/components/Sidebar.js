import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <p className="mt-4" style={{ color: 'white' }}>ONLOOP ADMIN</p>
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/example_page_2">Example Page 2</Nav.Link>
                <Nav.Link as={NavLink} to="/example_page_3">Example Page 3</Nav.Link>
                <Nav.Link as={NavLink} to="/example_page_4">Example Page 4</Nav.Link>
                <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>

            </Nav>
        </>
    )
}

export default Sidebar;