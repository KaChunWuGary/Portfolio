import React from 'react';
import './css/resume.css';

function Resume() {
  return (
    <main className='resume_container container'>
      <section className='row justify-content-center'>
        <div className='col col-6 '>
          <a href ="https://stock.adobe.com/search?k=work+in+progress&asset_id=517315479" target="_blank" rel="noopener noreferrer">
            <h1>Resume</h1>
          </a>  
          <h2 className='front_end_title'>Front-end Proficiencies</h2>
          <div className ='front_end_text'>
            <h2>HTML</h2>
            <h2>Javascript</h2>
            <h2>React</h2>
            <h2>CSS</h2>
            <h2>Bootstrap</h2>
            <h2>jQuery</h2>
            <h2>Responsive Design</h2>
            <h2>Handlebars</h2>
          </div>
          
          <h2 className='back_end_title'>Back-end Proficiencies</h2>
          <div className='back_end_text'>
            <h2>Node.js</h2>
            <h2>Express.js</h2>
            <h2>MongoDB</h2>
            <h2>MySQL</h2>
            <h2>NoSQL</h2>
            <h2>GraphQL</h2>
            <h2>Apollo</h2>
            <h2>RESTful API</h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;