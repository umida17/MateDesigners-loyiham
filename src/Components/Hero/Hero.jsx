import React from 'react'
import './Hero.css';
import Rectangle from "../../assets/Rectangle.png"
import Rectang from "../../assets/Rectangle 2.png"
import Rec from "../../assets/Rectangle 3.png"
import daraxt from "../../assets/daraxt.png"
import dala from "../../assets/dala.png"
import bulut from "../../assets/bulut.png"


const Hero = () => {
  return (
    <div>
      <div className="section1">
        <div className="container">
            <div className="section1-container">
                <h2 className='are'>We are your MateDesigners</h2>
                <div className="cards">
                  <div className="card">
                  <img className='harf' src={Rectangle} alt="" />
                  <h3 className='ghost'>Ghost UXWriter</h3>
                  <p className='all'>All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else. Out of the question it’s useful and interesting experience, but when we have some time limits we need a special magic.</p>

                  </div>

                  <div className="card">
                  <img className='harf' src={Rectang} alt="" />
                  <h3 className='ghost'>Content Reel</h3>
                  <p className='all'>All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else. Out of the question it’s useful and interesting experience, but when we have some time limits we need a special magic.</p>

                  </div>


                 <div className="card">
                  <img className='harf' src={Rec} alt="" />
                  <h3 className='ghost'>Status Annotations</h3>
                  <p className='all'>All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else. Out of the question it’s useful and interesting experience, but when we have some time limits we need a special magic.</p>

                  </div>

                </div>

                <div className="cardslar">
                  <div className="card">
                  <img className='harf' src={daraxt} alt="" />
                  <h3 className='ghost'>Ghost UXWriter</h3>
                  <p className='all'>All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else. Out of the question it’s useful and interesting experience, but when we have some time limits we need a special magic.</p>

                  </div>

                  <div className="card">
                  <img className='harf' src={dala} alt="" />
                  <h3 className='ghost'>Content Reel</h3>
                  <p className='all'>All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else. Out of the question it’s useful and interesting experience, but when we have some time limits we need a special magic.</p>

                  </div>


                 <div className="card">
                  <img className='harf' src={bulut} alt="" />
                  <h3 className='ghost'>Status Annotations</h3>
                  <p className='all'>All of us, designers, at least once per career became an illustrator, copyrighter and only God knows whom else. Out of the question it’s useful and interesting experience, but when we have some time limits we need a special magic.</p>

                  </div>

                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
