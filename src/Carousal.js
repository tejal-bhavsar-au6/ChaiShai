import React from 'react'
import bag4 from './asset/bag4.jpeg'
import bag2 from './asset/bag2.jpeg'
import bag from './asset/bag.jpeg'

export default function Carousal() {
    return (
        <div>
            <div>
            <div id="carouselExampleIndicators" className="carousel slide"      data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={bag4}alt="pic1"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={bag2}/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={bag} alt="Third slide"/>
              </div>
            </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
         </div>
        </div>
    )
}
