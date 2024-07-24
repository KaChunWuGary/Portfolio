import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';


function Portfolio() {
  return (
    <main>
      <div className='container'>
        <section className='row'>
          <div>
            <h1>Porfolio</h1>
          </div>
          <Project />
          
        </section>
      </div>
    </main>
  );
}

export default Portfolio;