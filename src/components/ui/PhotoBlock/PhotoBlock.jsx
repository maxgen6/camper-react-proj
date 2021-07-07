import React from "react";

import './PhotoBlock.scss'

export default function PhotoBlock({ photoInfo }) {
  return (
    <div className="photo-block">
      {photoInfo.map(item => (
        <div className="photo-item" key={Date.now() + item.id}>
          <img src={item.img} alt={item.name}/>
          <h4 className="name">{item.name}</h4>
          <p className="city">{item.city}</p>
          <a href="/#" className="link">{item.link}</a>
        </div>
      ))}
    </div>
  )
}