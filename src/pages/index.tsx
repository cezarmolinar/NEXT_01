import Image from 'next/image'
import { styled } from '../styles'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'
import camiseta3 from '../assets/camiseta3.png'
import camiseta4 from '../assets/camiseta4.png'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 89,30</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 98,775</span>
        </footer>
      </Product>    
      <Product className='keen-slider__slide'>
        <Image src={camiseta4} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 198,775</span>
        </footer>
      </Product>    
    </HomeContainer>
  )
}
