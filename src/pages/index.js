import React from "react"
import "../all.css"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import { Link } from "gatsby"
import MostPopular from "../components/MostPopular"
import FeaturedCategories from "../components/FeaturedCategories"
import NewestItems from "../components/NewestItems"
import FeaturedItems from "../components/FeaturedItems"
import Advertisement from "../components/Advertisement"
import Footer from "../components/Footer"


const IndexPage = () => {
  return (
    <div className="layout center-items">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Ecommerce Website</title>
        <meta name="description" content="Ecommerce website" />
      </Helmet>
      <section className="full-height">
        <Navbar />
        <div className="hero">
          <div>
            <h2>Bring some freshness into your life</h2>
            <p>Energise your life by adorning your home with some beautiful and fresh plants.</p>
            <br />
            <Link className="cta-button" to="/">Start Shopping</Link>
          </div>
          <div>
            <img src="https://www.ubuy.qa/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFOSzdEUUlPQUwuX0FDX1NMMTUwMF8uanBn.jpg" alt="hero" />
          </div>
        </div>
      </section>
      <MostPopular />
      <FeaturedCategories />
      <Advertisement />
      <FeaturedItems />
      <NewestItems />
      <Footer />
    </div>
  )
}

export default IndexPage
