import React from 'react'

const ArtList = (props) => {

  const { illustrator } = props;
  const list = illustrator ? (
    illustrator.map(item => {
      return (
          <div className="art image_wrapper" key={item.id}>
            <img src={item.imgSrc} alt={item.title} title={item.title} className="img_resize" />
            <div className="image_overlay">
              <h3 className="t-h3">{item.title}</h3>
            </div>
          </div>
      )
    })
  ) : null
  return (
    <div className="art_list">
      {list}
    </div>
  )
}

export default ArtList
