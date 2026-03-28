// import { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import giraffeImg from './assets/giraffe.jpeg'
import hopcatImg from './assets/hopcat.jpeg'
import stadiumImg from './assets/stadium.jpeg'
import linkedIcon from './assets/linkedin-2.svg'
import itchIcon from './assets/itch.svg'
import './App.css'

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
              Software Development
            </li>
            <li>
              Concepts
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
    <h1> Game Development </h1>
    <p>Check out my personal projects!</p>

    <section>
      <div>
        Game 1
      </div>
    </section>
    </>
  )

}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedev" element={<GameDev />} />
      </Routes>
    </HashRouter>
  )
}