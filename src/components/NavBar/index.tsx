import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./style.module.css"
export default function NavBar(){
    return(
        <Navbar expand="lg" className={styles["bg-navbar"]}>
            <Container>
                <Navbar.Brand className={styles["nav-brand"]} href="#home">AUmigo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className={styles["nav-links"]}>
                        <Link href="#home">Como doar</Link>
                        <Link href="#link">Conheça um aumigo</Link>
                        <Link href="#link">Locais de adoção</Link>
                        <Link href="#link">Contatos</Link>
                        <Link href="#link">Sobre nós</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}