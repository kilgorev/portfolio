import 'react-slideshow-image/dist/styles.css'
import { Slide} from 'react-slideshow-image'
import { Link } from 'react-router-dom'

import zeldaImg from '../assets/images/zelda.png'
import fishEconomyImg from '../assets/images/fish-economy-cover.png'
import cinderellaImg from '../assets/images/cinderella_cover.png'

import type { CSSProperties } from 'react'

const titleStyle = {
  color: '#FFFFFF',
  fontSize: '18px'
}

const captionStyle = {
   color: '#FFFFFF',
   fontSize: '12px'
}

const imageStyle = {
  width: '200px'
}

const divStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  flexDirection: 'column'
}

const slideImages = [
  {
    url: zeldaImg,
    title: 'Zelda Remake',
    caption: 'Recreation of the original NES Zelda game in Unity over the span of 2 weeks.',
    link: '/zelda'
  },
  {
    url: fishEconomyImg,
    title: 'Fish Economy',
    caption: 'Aesthetic fish catching game made using Blender and Unity.',
    link: '/fisheconomy'
  },
  {
    url: cinderellaImg,
    title: 'Cinderella Visual Novel',
    caption: 'Retelling of Cinderella for German Fairy Tales course, created in GODOT and assets were made with Aseprite.',
    link: '/cinderella'
  }

]

export default function ImageSlider() {
  return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            
             <Link to={slideImage.link}>
              <div key={index} style={divStyle}>
              <img style={imageStyle} src={slideImage.url}></img>
              <h3 style={titleStyle}>{slideImage.title}</h3>
              <p style={captionStyle}>{slideImage.caption}</p>
              </div>
            </Link>

          ))} 
        </Slide>
      </div>
    )
}
