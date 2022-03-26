import Image from "next/image";
import { Card, Col } from "react-bootstrap"
import { Url } from "url";
import styles from "./styles.module.css"

interface CardProps {
  nome: string;
  url: string;
  text: string;
  adotado?: boolean;
  onClick: () => void;
}
export default function Cards(props: CardProps){
    return(
      <Card className={styles["card-layout"]}>
        <Card.Title className={styles["card-title"]}>{props.nome}</Card.Title>
        <Image src={props.url} width={50} height={300}/>
        <Card.Body className={styles["card-text"]}>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}