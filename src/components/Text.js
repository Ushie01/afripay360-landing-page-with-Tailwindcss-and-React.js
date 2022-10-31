import Carousel, { CarouselItem } from "./Carousel/Carousel";
import one from './assets/ekedc.jpg';
import two from './assets/afri0.jpg'

export default function Text() {
    return (
      <Carousel>
        <CarouselItem>
          <img src={one} alt={one} />
        </CarouselItem>
        <CarouselItem>
          <img src={two} alt={two} />
        </CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>
          <img src={one} alt={one} />
        </CarouselItem>
        <CarouselItem>
          <img src={two} alt={two} />
        </CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>
          <img src={one} alt={one} />
        </CarouselItem>
        <CarouselItem>
          <img src={two} alt={two} />
        </CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    );
}