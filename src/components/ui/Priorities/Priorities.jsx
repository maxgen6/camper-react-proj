import React from "react";

import './Priorities.scss'

export default function Priorities({ title, prioritiesInfo }) {


  return (
    <section className="priorities row">
      <div className="col-12 col-md-10 offset-md-1">
        <h2 className="priorities-title">{title}</h2>
        <div className="priorities-block">
          {prioritiesInfo.map(item => (
            <div
              className="priorities-item"
              key={Date.now() + item.id}
            >
              {item.img}
              <div className="priorities-text">
                <div>
                  <h2 className="priorities-item__title">{item.title}</h2>
                  <p className="priorities-item__subtitle">{item.subtitle}</p>
                </div>
                {item.link
                  ? <a href="/#" className="priorities-item__link">{item.link}</a>
                  : ''
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}