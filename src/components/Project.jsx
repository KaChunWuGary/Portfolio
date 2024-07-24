import React from 'react';
import { Link } from 'react-router-dom';
import e_commerce from '../assets/e_commerce.png';
import e_commerce_react_vers2 from '../assets/e_commerce_react_vers2.png';
import first_project_ss from '../assets/first_project_ss.png'
import './css/project.css'
import githubmark from "../assets/githubmark.png";

function Project() {
  return ( 
    <section className='container text-center'>
      <div className='row row-cols-2'>
        <div className="col col-12 row-cols-2 d-flex">         
          <figcaption className="figcaption">
            GOAT Calorie Tracker 
            <a href="https://github.com/ojds2022/goat_calorie_tracker" target="_blank" rel="noopener noreferrer">
              <img src={githubmark} alt = "github link" className ="icons" ></img>
            </a>
          </figcaption>
          <figcaption className="figcaption">
            GOAT E-Commerce Website
            <a href="https://github.com/ojds2022/Goat_E-Commerce" target="_blank" rel="noopener noreferrer">
              <img src={githubmark} alt = "github link" className ="icons" ></img>
            </a>
          </figcaption>
        </div>  
        <div className='col col-12 row-cols-2 d-flex'>
          <div className="col">
            <a href = "https://ojds2022.github.io/goat_calorie_tracker/" alt = "calorie tracker" target="_blank" rel="noopener noreferrer"> 
              <img className = 'col ss_resize' src={first_project_ss}></img>
            </a>
          </div>
          <div className="col" >
            <a href= "https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products" alt= "e_commerce_site" target="_blank" rel="noopener noreferrer">
              <img className = 'col ss_resize' src={e_commerce}></img>
            </a>
          </div>
        </div>
        <p></p>
        <div className="col col-12 row-cols-2 d-flex">         
          <figcaption className="figcaption">
            GOAT E-Commerce Website Vers. React
            <a href="https://github.com/ojds2022/Goat_E_Commerce_2.0/" target="_blank" rel="noopener noreferrer">
              <img src={githubmark} alt = "github link" className ="icons" ></img>
            </a>
          </figcaption>
          <figcaption className="figcaption">
            Project 4
            <a href="https://github.com/KaChunWuGary" target="_blank" rel="noopener noreferrer">
              <img src={githubmark} alt = "github link" className ="icons" ></img>
            </a>
          </figcaption>
        </div>
        <div className="col col-12 row-cols-2 d-flex">       
          <a  href="https://boiling-bastion-87037-4394261bcf08.herokuapp.com/" alt="e_commerce_site_vers2_with_react"  target="_blank" rel="noopener noreferrer" >
            <img className = 'col ss_resize' src={e_commerce_react_vers2}></img>
          </a>
          <a  href="https://boiling-bastion-87037-4394261bcf08.herokuapp.com/" alt="e_commerce_site_vers2_with_react"  target="_blank" rel="noopener noreferrer" >
            <img className = 'col ss_resize' src={e_commerce_react_vers2}></img>
          </a>
        </div>
        {/* <div className="col col-12 row-cols-2 d-flex">         
          <figcaption className="figcaption">project 5</figcaption>
          <figcaption className="figcaption">Project 6</figcaption>
        </div> */}
        <div className="col col-12 row-cols-2 d-flex">         
          {/* <a>
            <img></img>
          </a> */}
          {/* <a>
            <img></img>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Project;


{/*  */}