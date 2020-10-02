import React, { useEffect } from 'react'
import LanguageList from './LanguageList';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectList = (props) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 400
    })
  })

  const { projects } = props;


  const projectList = projects ? (
    projects.map(project => {
      const reverse = project.id % 2 === 0 ? ('row-reverse') : '';
      const fade = project.id % 2 === 0 ? ('fade-left') : 'fade-right';
      return (
        <div data-aos={fade} className={'row ' + reverse} key={project.id}>
          <div  className="col-info">
            <div className="project-wrapper__text">
              <h3 className="t-h3 project-title">{project.title}</h3>
              <p className="t-body1">{project.body}</p>
              <LanguageList list={project.language} />
              <div className="project_buttons">
                {project.demo ? (
                  <a className="btn project-btn demo" href={project.demo} target="_blank" aria-label="Project Link" rel="noopener noreferrer">Demo</a>
                ) : null}
                {project.code ? (
                  <a className="btn project-btn code" href={project.code} target="_blank" aria-label="Project Link" rel="noopener noreferrer">Code</a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-image data-scroll">
            <div className="project-wrapper__image">
              <a href={project.demo ? (project.demo) : (project.code)} target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                <div className="image_wrapper thumbnail">
                  <img src={project.imgSrc} alt="project" title={project.title} />
                </div>
              </a>
            </div>
          </div>
        </div>
      )
    })
  ) : null

  return (
    <div className='projects-list '>
      {projectList}
    </div>
  )
}

export default ProjectList
