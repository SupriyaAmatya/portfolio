import React from 'react'

const SkillsList = (props) => {
  const { skillsList } = props;
  const list = skillsList.skills ? (
    skillsList.skills.map(icon => {
      return (
        <div className="icon" key={icon.id}>
          <img src={icon.imgSrc} alt={icon.imgTitle} title={icon.imgTitle} />
        </div>
      )
    })
  ) : null
  return (
    <div className="col4-2 mr-4">
      <div className="skill_title">
        <img src={skillsList.title_icon} alt={skillsList.title} />
        <h3 className="t-h3">{skillsList.title}</h3>
      </div>
      <div className="list">
        {list}
      </div>
    </div>
  )
}

export default SkillsList
