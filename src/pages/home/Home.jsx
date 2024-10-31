import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/heroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import Footer from '../../components/footer/Footer'
import useScrollToTop from "../../hooks/useScrollToTop";

function Home() {
  useScrollToTop();
  return (
    <>
        <HeroSection/>
        <BlogPostCard/>
        <Footer/>
    </>
  )
}

export default Home