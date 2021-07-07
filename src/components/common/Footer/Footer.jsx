import React from "react";

import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer row">
      <div className="container">
        <div className="col-12 col-md-10 offset-md-1">
          <div className="footer-block">
            <div className="footer-text">
              <p className="subtitle">Easy Camper</p>
              <h2 className="title">When Passion Meets Comfort.</h2>
            </div>
            <div className="footer-links">
              <ul className="footer-links__list">
                <li className="footer-links__item">
                  <p className="footer-links__item_title">Discover the Network</p>
                  <ul>
                    <li>
                      <a href="#">Where to shop</a>
                    </li>
                    <li>
                      <a href="#">Tour Guided</a>
                    </li>
                    <li>
                      <a href="#">Our Tours</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                  </ul>
                </li>
                <li className="footer-links__item">
                  <p className="footer-links__item_title">Become a Manager</p>
                  <ul>
                    <li>
                      <a href="#">Join your Pairing</a>
                    </li>
                    <li>
                      <a href="#">Offer your Service</a>
                    </li>
                    <li>
                      <a href="#">Are you a guide?</a>
                    </li>
                  </ul>
                </li>
                <li className="footer-links__item">
                  <p className="footer-links__item_title">Assistance</p>
                  <ul>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Cancallation Options</a>
                    </li>
                    <li>
                      <a href="#">Reliablity and Sequrity</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom__links">
            <ul className="footer-bottom__links_list">
              <li>EazyCamper. All rights reserved. </li>
              <li>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}