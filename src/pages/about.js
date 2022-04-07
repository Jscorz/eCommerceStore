import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipeList from "../components/RecipeList"

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Vexillologist kinfolk pok pok. </h2>
            <p>
              Edison bulb truffaut distillery, hella vice polaroid actually
              shabby chic tumblr fanny pack irony unicorn brooklynbelly kinfolk
              next level live-edge.
            </p>
            <p>
              Tattooed whatever blog meditation hashtag 3 wolf moon flannel
              godard adaptogen.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce!</h5>
          <RecipeList />
        </section>
      </main>
    </Layout>
  )
}

export default About
