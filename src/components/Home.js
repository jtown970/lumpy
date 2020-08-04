import React from 'react'

export default function bar() {
  return (
    <div className="bar-container">
      <div className="chalk-board-container">
        <div className="chalk-board">
          <ul className="beer-list">
            <li className="beer-list-items">Lumpy Ridge IPA</li>
            <li className="beer-list-items">SUN LION LIME WHEAT</li>
            <li className="beer-list-items">THURMAN’S STOUT</li>
            <li className="beer-list-items">OGG’S FM(F^#K’N MAGIC)</li>
            <li className="beer-list-items">RANCHO DELUXE</li>
            <li className="beer-list-items">NEW ZEALAND PILSNER</li>
            <li className="beer-list-items">beer1</li>
            <li className="beer-list-items">beer1</li>
            <li className="beer-list-items">BOGO FLAGSHIP PINTS HAPPY HOUR! 5-7PM DAILY</li>
            <li className="beer-list-items">MAKE ESTES WEIRD AGAIN LIMITED BATCH SERIES</li>
          </ul>
          <ul className="hours-list">
            <li className="hours-list-items">m-f 2:34</li>
            <li className="hours-list-items">sat 3:34</li>
            <li className="hours-list-items">sun 4:56</li>
          </ul>
          <ul className="covid-list">
            <li className="covid-list-items">Selling Carry out beer and limited seating until further notice</li>
            <li className="covid-list-items">PLEASE NOTE AND RESPECT ALL COVID RESTRICTIONS. WE DON’T HAVE A CHOICE</li> 
            <li className="covid-list-items">MASKS REQUIRED EVERYWHERE EXCEPT YOUR ASSIGNED TABLE</li>
          </ul>
        </div>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-items">Covid details</li>
            <li className="nav-items">Beers</li>
            <li className="nav-items">Hours</li>
            <li className="nav-items">Store</li>
            <li className="nav-items">Location</li>
            <li className="nav-items">About</li>
          </ul>
        </div>
        <div className="bar-container">
          <div className="bar-mat">
            <img src="" alt="bar-top-bg"/>
            <div className="mat">
              <img src="" alt="lumps logo"/>
              <p>lump ridge brewing co</p>
            </div>
          </div>
          <div className="beer-info-container">
            <img className="beer-img" src="" alt="beer-img"/>
            <div className="beer-info">
              <h2 className="beer-name">beer name here</h2>
              <p>talking about the beer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
