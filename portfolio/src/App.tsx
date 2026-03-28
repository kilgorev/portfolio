// import { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import giraffeImg from './assets/giraffe.jpeg'
import hopcatImg from './assets/hopcat.jpeg'
import stadiumImg from './assets/stadium.jpeg'
import githubImg from './assets/github.png'
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
                  aria-hidden="true">
                  <use href="src/assets/hub.svg"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://lollipopak.itch.io/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="src/assets/itch.svg"></use>
                </svg>
                itch.io
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/victoria-kilgore-649888297/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="src/assets/linkedin-2.svg"></use>
                </svg>
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