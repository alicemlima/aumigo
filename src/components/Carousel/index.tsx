import { Carousel } from "react-bootstrap"
import Cards from "../Cards"
export default function CarouselCard(){
    return(
        <Carousel variant="dark">
            <Carousel.Item>
             <Cards
                nome="Chico" 
                url='/../public/img/chico.png'
                text="Lorem ipsum dolor sit amet. Ut veniam optio est dolorum inventore sed voluptas corporis id sunt explicabo."
                adotado={true}
                onClick={""}
                />
            </Carousel.Item>
            <Carousel.Item>
            <Cards
                nome="Chico" 
                url='/../public/img/chico.png'
                text="Lorem ipsum dolor sit amet. Ut veniam optio est dolorum inventore sed voluptas corporis id sunt explicabo."
                adotado={true}
                onClick={""}
                />
            </Carousel.Item>
            <Carousel.Item>
            <Cards
                nome="Chico" 
                url='/../public/img/chico.png'
                text="Lorem ipsum dolor sit amet. Ut veniam optio est dolorum inventore sed voluptas corporis id sunt explicabo."
                adotado={true}
                onClick={""}
                />
            </Carousel.Item>
        </Carousel>
    )
}