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
    <main class="max-width">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Ecommerce Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Eczar&family=Quicksand:wght@300&display=swap" rel="stylesheet" />
        <meta name="description" content="Ecommerce website" />
      </Helmet>
      <section className="vertical full-height">
        <Navbar />
        <div className="wrap columns-two hero">
          <div>
            <h2>Bring some freshness into your life</h2>
            <p>Energise your life by adorning your home with some beautiful and fresh plants.</p>
            <br />
            <Link className="cta-button" to="/">Start Shopping</Link>
          </div>
          <div>
            <img loading="lazy" src="https://www.ubuy.qa/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFOSzdEUUlPQUwuX0FDX1NMMTUwMF8uanBn.jpg" alt="hero" />
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
