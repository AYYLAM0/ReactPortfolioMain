import { auto } from '@popperjs/core';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const style = {
  maxWidth: "60%",
  maxHeight: auto,
  margin: auto
}


const Applications = () => {
  return (
    <div>
      <h3 className="text-center text-white">Click the links to see full launched app.</h3>
      <Carousel fade>
        <Carousel.Item>

          <a href="https://ayylam0.github.io/Pokedex-project/" target="blank">
            <img
              className="d-block w-100"
              src='https://i.imgur.com/HddtBOT.png'
              style={style}
              alt="Project 1"
            />
          </a>

          <Carousel.Caption>
            <div className="text-white w-50">
              <h3>Project WeatherDex</h3>

            </div>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <a href="https://boiling-river-77430.herokuapp.com" target="blank">
            <img
              className="d-block w-100"
              src='https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'
              style={style}
              alt="Second slide"
            />
          </a>

          <Carousel.Caption>
            <div className="text-white w-50">
              <h3>Project SteamedHams</h3>

            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://github.com/AYYLAM0/Schreate-Awup" target="blank">
            <img
              className="d-block w-100"
              src='https://artisantalent.com/wp-content/uploads/2012/04/mistakes-to-avoid-when-hiring-freelancers.jpg'
              style={style}
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
            <div className="text-white w-50">
              <h3>Freelancer Project</h3>

            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <div className="container card text-white bg-dark d-flex">
        <h1 className="tect-center mx-2 p-3">Project WeatherDex</h1>
        <p className="">
          Using both a pokemon API giving us data on all species of pokemon, and a weather API that would give us local weather tempreatures and conditions, My group decided to create a pokemon dex that would mesh the data with a weather API, then take that API data and determine what pokemon would likely be avaliable in that terrain and weather conditions.
        </p>
      </div>

      <div className="container card text-white bg-dark d-flex">
        <h1 className="tect-center mx-2 p-3">Project SteamedHams</h1>
        <p className="">
          With this project the idea was simple, a backlog randomizer for your steam library. Taking the users owned games from the steam API, storing it in a database then giving the end result in a randomized format to determine the next game the user should play is.
        </p>
      </div>

      <div className="container card text-white bg-dark d-flex">
        <h1 className="tect-center mx-2 p-3">Freelancer Project</h1>
        <p className="">
          With freelancing being such a large part of a devlopers life, we decided to create an app that would help the user keep track of any jobs theyd agreed to and any payments they recieved. Then taking all the data and giving the user an end YTD of earnings through out the year for help with tax time.
        </p>
      </div>
    </div>


  )
}

export default Applications;