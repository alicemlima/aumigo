import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import CarouselCard from '../components/Carousel'
import Cards from '../components/Cards'
const Home: NextPage = () => {
  return (
    <Container fluid>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row className={styles.main}>
        <Col className={styles.text}>
        <h1>Adote um aumigo amigo próximo de você</h1>
        <h6>ou ajude organizações em todo o Brasil</h6>
        </Col>
        
        <Image className={styles["img-dog"]} src={"/img/vira-lata-caramelo.png"} alt="Vira lata caramelo com carinha super fofa olhando para frente" width={847} height={609} />
      
        <svg className={styles["waves"]} viewBox="0 0 1442 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M218 119.784C117.528 168.354 68.3409 172.964 0 119.784V281.784H1442V119.784C1424.9 137.41 1419.05 153.278 1370 119.784C1201.51 36.5984 1108.71 39.7594 946 129.784C822.248 188.405 760.421 186.572 664 119.784C499.438 -62.8344 399.281 -15.2599 218 119.784Z" fill="#EF476F"/>
        </svg>
      </Row>
      <Row className={styles.cards}>
        <h2>HISTÓRIAS DE AMOR</h2>
        <CarouselCard/> 
      </Row>
    </Container>
  )
}

export default Home
