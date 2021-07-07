import React from "react";

import './CardInfo.scss'

export default function CardInfo({ cardInfo }) {

  return (
    <section className="card-info row">
      <div className="col-12 col-md-10 offset-md-1">
        <div className="card-info__block">
          {cardInfo.map(item => (
            <div className="card" key={item.id}>
              <img src={item.img} alt="img"/>
              <div className="card-text">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
                <a href="/#" className="card-link">{item.link}</a>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  )
}