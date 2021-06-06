import React from 'react'
import {Link} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

const BarreNavigation = props => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Ma salle de muscu</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about">A propos</Nav.Link>
                    <Nav.Link as={Link} to="/ateliers">Nos ateliers</Nav.Link>
                    <Nav.Link as={Link} to="/boissons">Nos boissons</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BarreNavigation