import React from "react";

import './Advantages.scss'

export default function Advantages({ advantagesInfo }) {
  return (
    <section className="advantages row">
      <div className="col-12 col-md-10 offset-md-1">
        <h2 className="advantages-title">Our Advantages</h2>
        <div className="advantages-block">
          {advantagesInfo.map(item => (
            <div className="advantages-item" key={Date.now() + item.id}>
              {item.img}
              <div className="advantages-text">
                <h2 className="advantages-text__title">{item.title}</h2>
                <p className="advantages-text__subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}