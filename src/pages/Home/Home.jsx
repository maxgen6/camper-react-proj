import React, {useState} from "react";

import './Home.scss'
import { Advantages, CardInfo, Managers, Priorities } from "../../components/ui";
import promoting from '../../img/undraw_exploring_1l7f 1.png'
import additional from '../../img/undraw_tourist_map_re_293e 1.png'
import free from '../../img/undraw_Destination_re_sr74 1.png'
import Choose from "../../components/icons/Choose";
import Describe from "../../components/icons/Describe";
import Build from "../../components/icons/Build";
import Calendar from "../../components/icons/Calendar";
import Convenience from "../../components/icons/Convenience";
import Books from "../../components/icons/Books";
import Search from "../../components/icons/Search";

export default function Home() {

  const [cardInfo] = useState([
    {
      id: '1', img: `${promoting}`,
      title: 'Promoting your territory towards foreign tourists ',
      subtitle: 'EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.',
      link: 'Discover the places linked to your area that you can link to your structure'
    },
    {
      id: '2', img: `${additional}`,
      title: 'Additional services designed for the needs of campers ',
      subtitle: 'Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!',
      link: 'Discover the Guided Tours and additional services that you can link to your structure'
    },
    {
      id: '3', img: `${free}`,
      title: 'Free online showcase with promotion in Italy and abroad ',
      subtitle: 'Forget about the time and money spent on creating your own website or e-commerce system for bookings. ',
      link: 'Easycamper creates your showcase. Discover the terms and conditions for joining the Network'
    }
  ])
  const [prioritiesInfo] = useState([
    {
      id: '1',
      img: <Choose/>,
      title: 'Choose the type of stop',
      subtitle: 'Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping',
      link: 'Show me more'
    },
    {
      id: '2',
      img: <Describe/>,
      title: 'Describe your structure',
      subtitle: 'Describe thee property, location and nearby attractions',
      link: 'Show me more'
    },
    {
      id: '3',
      img: <Build/>,
      title: 'Build your showcase',
      subtitle: 'Add photos, videos and descriptions Define the price of each type of that make your property truly',
      link: 'Show me more'
    },
    {
      id: '4',
      img: <Calendar/>,
      title: 'Prices and Availability',
      subtitle: 'pitch and configure the availablity calendar.',
      link: 'Show me more'
    }
  ])
  const [advantagesInfo] = useState([
    {
      id: '1',
      img: <Convenience/>,
      title: 'Convenience and Transparency',
      subtitle: 'You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5'
    },
    {
      id: '2',
      img: <Books />,
      title: 'Digital marketing and editorial support',
      subtitle: 'You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5'
    },
    {
      id: '3',
      img: <Search />,
      title: 'Community of services dedicated to campers',
      subtitle: 'You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5'
    }
  ])

  return (
    <>
      <CardInfo cardInfo={cardInfo}/>
      <Priorities
        title="Making your facility known is our priority"
        prioritiesInfo={prioritiesInfo}
      />
      <Managers/>
      <Advantages advantagesInfo={advantagesInfo} />
    </>
  )
}