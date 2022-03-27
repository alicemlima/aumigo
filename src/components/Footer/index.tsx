import { Container, Row } from "react-bootstrap";
import styles from "./style.module.css"
export default function Footer(){
    return(
        <Container fluid>
            <Row>

            </Row>
            <Row className={styles["footer-container"]}>
                <p>Produzido e idealizado por Alice Lima</p>
            </Row>
        </Container>
    )
}