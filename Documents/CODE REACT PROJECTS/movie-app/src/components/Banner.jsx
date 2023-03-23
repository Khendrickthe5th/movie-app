import useEmblaCarousel from 'embla-carousel-react';
import Autoplay  from 'embla-carousel-autoplay';
import React from 'react';
import '../index.css';



function Banner(){

    const autoplayOptions = {
        // delay: 1000,
        playOnInit: true,
        // stopOnInteraction: true,
        // stopOnMouseEnter: true
    }

const [emblaRef] = useEmblaCarousel(
    {loop: true, speed: 0.05},
    [Autoplay(autoplayOptions)]
);



return(
<div className='embla' >
    <div className="embla__viewport" ref={emblaRef}>
    <div className="embla__container font-custom2">
    <div className="embla__slide text-5xl text-center p-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, nobis.</div>
    <div className="embla__slide">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, nobis.</div>
    <div className="embla__slide">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, nobis.</div>
    </div>
    </div>
</div>
)
}

export default Banner;