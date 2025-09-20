import React from 'react'
import '../Components/projects.css'
const Projects = () => {
  return (
    <>
    <div className = 'Background2'>
        <section className = 'Format'>
          <div className='Title'>Projects</div>
        </section>

        <section className='Format'>
          <p className='Description'>Name of project</p>
          <p className='Description'>Description of the project</p>
        </section>

        <section className='Format'>
          <p className='Description'>Portfollo Website:</p>
          <p className='Description'> This website is made by using react Js and my code on how it's made is on github the nav bar is made by using react-router-dom</p>
        </section>
    </div>
      
    </>
  );
}

export default Projects;
