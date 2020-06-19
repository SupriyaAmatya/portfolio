import React from 'react'

const LanguageList = (props) => {
  return (
    <div className="language-list">
      {props.list.length ? (
        props.list.map((item , index )=>{
          return(
            <h4 className="t-h4 language" key={index}>{item}</h4>)
        })
      ) : ''}
    </div>
  )
}

export default LanguageList
