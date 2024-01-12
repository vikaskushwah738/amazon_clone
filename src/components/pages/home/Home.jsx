import React from 'react'
import './Home.css'
import Img2 from '../../../assets/personal.jpg'
import Img3 from '../../../assets/pc.jpg'
import Img4 from '../../../assets/shoes.jpg'
import Img5 from '../../../assets/lunar.jpg'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <div className='hero-section'>
        <div className="hero-msg">
          <p> You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="">Click here to go to amazon.in</a></p>
        </div>
      </div>

      <div className="shop-selection">
        <div className="box1 box">
           <div className="box-content">
             <h5> Deals In PCs</h5>
             <img src={Img3}  className="shop-img"/>
               <div className='a'>
               <Link href="">See more</Link>
               </div>
           </div>
        </div>
        <div className="box2 box">
           <div className="box-content">
             <h5> Deals In PCs</h5>
             <img src={Img4}  className="shop-img"/>
             <div className='a' >
             <Link href="">See more</Link>
             </div>
         
           </div>
        </div>
        <div className="box3 box">
        <div className="box-content">
             <h5> Deals In PCs</h5>
            <img src={Img2}  className="shop-img"/>
            <div className='a'>
            <Link  href="">See more</Link>
            </div>
           </div>
        </div>
        <div className="box4 box">
        <div className="box-content">
             <h5> Deals In PCs</h5>
             <img src={Img5}  className="shop-img"/>
             <div>
              <div className='a'>
              <Link href="">See more</Link>
              </div>
             </div>
           </div>
        </div>
        {/* <div className="box">box5</div> */}
      </div>
    </div>
  )
}
