import React, {useState} from "react";

import './Managers.scss'
import PhotoBlock from "../PhotoBlock";
import Play from "../../icons/Play";
import lucciano from '../../../img/Rectangle 7.png'
import cremonesi from '../../../img/Rectangle 5.png'
import beneventi from '../../../img/Rectangle 6.png'

export default function Managers() {

  const [photoInfo] = useState([
    {id: '1', img: `${lucciano}`, name: 'Lucciano', city: 'Rome', link: 'View The Site'},
    {id: '2', img: `${cremonesi}`, name: 'Cremonesi', city: 'Florence', link: 'View The Site'},
    {id: '3', img: `${beneventi}`, name: 'Beneventi', city: 'Venice', link: 'View The Site'}
  ])

  return (
    <section className="managers row">
      <div className="col-12 col-md-10 offset-md-1">
        <div className="managers-block">
          <div className="managers-text">
            <h2 className="title">Join the community campervan sites managers.</h2>
            <p className="subtitle">Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.</p>
            <a href="#" className="link"> <Play /> Start </a>
          </div>
          <PhotoBlock photoInfo={photoInfo} />
        </div>
      </div>
    </section>
  )
}