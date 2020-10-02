import React from 'react'
import { connect } from 'react-redux';
import SkillsList from './SkillsList';

const Skills = (props) => {
  const skills = props
  return (
    <div className="skills_wrapper">
      <div className="container">
        <div className="skills-section">
          <h2 className="t-h2">Skills</h2>
          <div className="divider"/>
          <div className="skills-list__section">
            <SkillsList skillsList={skills.dev}/>
            <SkillsList skillsList={skills.design}/>
          </div>
        </div>
      </div>

      {/* <div className="view-portfolio_wrapper">
      <div className="portfolio_overlay"/>
        <a className="btn portofilo_btn" href="!#">
          view portfolio
        </a>
      </div> */}
    </div>
  )
}

const mapStateToProps =(state, ownProps)=>{
  return state
}

export default connect(mapStateToProps)(Skills);
