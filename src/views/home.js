import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Masculine Ironclad Antelope</title>
        <meta property="og:title" content="Masculine Ironclad Antelope" />
      </Helmet>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<iframe src="https://eaglercraft.net" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
