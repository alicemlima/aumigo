import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">AUmigo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Como doar</Nav.Link>
                        <Nav.Link href="#link">Conheça um aumigo</Nav.Link>
                        <Nav.Link href="#link">Locais de adoção</Nav.Link>
                        <Nav.Link href="#link">Contatos</Nav.Link>
                        <Nav.Link href="#link">Sobre nós</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}