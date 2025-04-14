import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Note from './components/Note'
import Note2 from './components/Note2'
import StudentTestimonial from './components/StudentTestimonial'
import OurCurriculum from './components/OurCurriculum'
import ParentTestimonial from './components/ParentTestimonial'
import CustomerReview from './components/CustomerReview'
import Contact from './components/Contact'
import Footer from './components/Footer'


const page = () => {
  return (
    <div>
      <NavBar />
      <Note />
      <HeroSection />
      <Note2 />
      < StudentTestimonial />
      <OurCurriculum />
      <ParentTestimonial/>
      <CustomerReview />
      <Contact />
      <Footer />

    </div>
  )
}

export default page