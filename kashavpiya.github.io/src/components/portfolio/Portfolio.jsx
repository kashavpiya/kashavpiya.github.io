import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gooselake.png'
import IMG2 from '../../assets/chosen-star.jpg'
import IMG3 from '../../assets/car-project.png'
import IMG4 from '../../assets/sorting-project.png'
import IMG5 from '../../assets/mavs.png'

const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='gooselake website'></img>
          </div>
          <h3>City of Goose Lake Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.gooselakeiowa.org" className='btn btn-primary' target='_blank'>Live Website</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG2} alt='starflower clinic website'></img>
          </div>
          <h3>StarFlower Clinic Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/Star-Flower" className='btn' target='_blank'>Code Sample</a>
            <a href="https://www.starflowerclinic.com" className='btn btn-primary' target='_blank'>Live Website</a>
          </div>
          </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG3} alt='car simulator'></img>
          </div>
          <h3>Car Simulator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/FinalCarProject" className='btn' target='_blank'>Github</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG4} alt='Sorting algorithm visualizer'></img>
          </div>
          <h3>Sorting Algorithm Visualizer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/Sorting_Visualizer" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG5} alt='Mavs Adventure'></img>
          </div>
          <h3>Mav's Adventure</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kashavpiya/Project-D" className='btn' target='_blank'>Code Sample</a>
            <a href="https://kashavpiya19.itch.io/petsadventure" className='btn btn-primary' target='_blank'>Download Here</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio