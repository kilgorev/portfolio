// import { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import giraffeImg from './assets/giraffe.jpeg'
import hopcatImg from './assets/hopcat.jpeg'
import stadiumImg from './assets/stadium.jpeg'
import linkedIcon from './assets/linkedin-2.svg'
import itchIcon from './assets/itch.svg'
import './App.css'

const cindDesc = "This was a project made for my Multimedia Project in my German Fairy Tales course.  While short, the project itself was meant to showcase my dialogue creation and state management skills. All assets were produced and created by myself (other than the music)."

function Header() {
  return (
    <header className='header'>
      <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 128 128" className='button-icon' id="social">
            <path d="M 70 18.074219 C 69.225 18.074219 68.450391 18.350391 67.900391 18.900391 L 14.099609 72.599609 C 12.899609 73.799609 12.899609 75.700781 14.099609 76.800781 L 22.599609 85.300781 C 23.199609 85.900781 23.899219 86.199219 24.699219 86.199219 C 25.499219 86.199219 26.300781 85.900781 26.800781 85.300781 L 70 42.199219 L 102 74.199219 L 102 114.5 C 99.1 115.5 96.899219 118 96.199219 121 L 84 121 L 84 80 C 84 78.3 82.7 77 81 77 L 59 77 C 57.3 77 56 78.3 56 80 L 56 121 L 38 121 L 38 94 C 38 92.3 36.7 91 35 91 C 33.3 91 32 92.3 32 94 L 32 101.40039 C 27.1 102.60039 23.300781 106.40078 22.300781 111.30078 C 17.400781 112.30078 13.500391 116.2 12.400391 121 L 4 121 C 2.3 121 1 122.3 1 124 C 1 125.7 2.3 127 4 127 L 99 127 C 100.7 127 102 125.7 102 124 L 102 123 C 102 121.3 103.3 120 105 120 C 106.7 120 108 121.3 108 123 L 108 124 C 108 125.7 109.3 127 111 127 L 114 127 C 115.7 127 117 125.7 117 124 C 117 122.3 115.7 121 114 121 L 113.80078 121 C 113.10078 118 110.9 115.5 108 114.5 L 108 80.199219 L 113.09961 85.300781 C 113.69961 85.900781 114.39922 86.199219 115.19922 86.199219 C 115.99922 86.199219 116.80078 85.900781 117.30078 85.300781 L 125.80078 76.800781 C 127.00078 75.600781 127.00078 73.699609 125.80078 72.599609 L 72.099609 18.900391 C 71.549609 18.350391 70.775 18.074219 70 18.074219 z M 70 25.300781 L 119.5 74.800781 L 115.30078 79 L 72.099609 35.900391 C 71.499609 35.300391 70.8 35 70 35 C 69.2 35 68.500391 35.300391 67.900391 35.900391 L 24.699219 79 L 20.5 74.800781 L 70 25.300781 z M 64 101 C 65.7 101 67 102.3 67 104 C 67 105.7 65.7 107 64 107 C 62.3 107 61 105.7 61 104 C 61 102.3 62.3 101 64 101 z M 32 107.69922 L 32 121 L 18.699219 121 C 19.799219 118.6 22.2 117 25 117 C 26.7 117 28 115.7 28 114 C 28 111.2 29.6 108.79922 32 107.69922 z M 124 121 A 3 3 0 0 0 121 124 A 3 3 0 0 0 124 127 A 3 3 0 0 0 127 124 A 3 3 0 0 0 124 121 z"></path>
          </svg>
      </Link>
    </header>
  )
}

function Home() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <div id="stacked">
            <img src={giraffeImg} className="pics" alt="Picture of Me" width="300" />
            <img src={stadiumImg} className="pics" alt="Picture of Me" width="300" />
            <img src={hopcatImg} className="pics" alt="Picture of Me" width="300" />
          </div>
        </div>
        <div>
          <h1>Victoria Kilgore</h1>
            <p>
              <code>Third-Year Student @ University of Michigan - Ann Arbor</code>
            </p>
            <br></br>
            <p>
              <code>Computer Science Major</code>
            </p>
            <br></br>
            <p>
              <code>Community Manager for WolverineSoft</code>
            </p>
            <br></br>
            <p><code>Software Engineer</code></p>
            <br></br>
            <p><code>Indie Game Developer</code></p>
            <br></br>
            <p><code>Web Developer</code></p>
        </div>
         <div id="stacked">
            <img src={giraffeImg} className="pics" alt="Picture of Me" width="300" />
            <img src={stadiumImg} className="pics" alt="Picture of Me" width="300" />
            <img src={hopcatImg} className="pics" alt="Picture of Me" width="300" />
          </div>
      </section>


      <section id="spacer"></section>
      

      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className = "navigate">
          <ul>
            <li>
              <Link to="/gamedev">
              Game Development
              </Link>
            </li>
            <li>
              <Link to="/softwaredev">
              Software Development
              </Link>
            </li>
            <li>
              Concepts & Art
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="src/assets/link.svg"></use>
          </svg>
          <h2>Connect with me!</h2>
          <p>See what I'm working on</p>
          <ul>
            <li>
              <a href="https://github.com/kilgorev" target="_blank">
         <svg
              className="button-icon"
              role="presentation"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>

                GitHub
              </a>
            </li>
            <li>
              <a href="https://lollipopak.itch.io/" target="_blank">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  src={itchIcon}
                >
                  </img>
                itch.io
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/victoria-kilgore-649888297/" target="_blank">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  src={linkedIcon}
                >
                  </img>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

function GameDev(){

  return(
    <>
    <Header/>
    <h1> Game Development </h1>
    <h2>Check out my game collection!</h2>

    <section>
      <div className='game_article'>
        <Link to="/cinderella">
        <h3>Cinderella: A Visual Novel</h3>
        </Link>
        <p>{cindDesc}</p>
      </div>
    </section>
    </>
  )

}

function Software(){
  return(
  <>
  <Header/>
  <h1> Software Development </h1>
  <p> These are my software projects!</p>
  </>
  )
}

function Cinderella(){
  return(

  <>
  <Header/>
  <h1> Cinderella: A Visual Novel</h1>
  <div className='GamePort'>
  <iframe
            src="/portfolio/cinderella/cinderella_v02/index.html"
            width="960"
            height="540"
            style={{ border: 'none', display: 'block' }}
            title="Cinderella Game"
            allowFullScreen
          />

          <p>{cindDesc}</p>
          </div>
          </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedev" element={<GameDev />} />
        <Route path="/softwaredev" element={<Software />} />
        <Route path="/cinderella" element={<Cinderella />} />
      </Routes>
    </HashRouter>
  )
}