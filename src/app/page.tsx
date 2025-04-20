// import React from 'react'
// import NavBar from './components/NavBar'
// import HeroSection from './components/HeroSection'
// import Note from './components/Note'
// import Note2 from './components/Note2'
// import StudentTestimonial from './components/StudentTestimonial'
// import OurCurriculum from './components/OurCurriculum'
// import ParentTestimonial from './components/ParentTestimonial'
// import CustomerReview from './components/CustomerReview'
// import Contact from './components/Contact'
// import Footer from './components/Footer'


// const page = () => {
//   return (
//     <div>
//       <NavBar />
//       <Note />
//       <HeroSection />
//       <Note2 />
//       < StudentTestimonial />
//       <OurCurriculum />
//       <ParentTestimonial />
//       <CustomerReview />
//       <Contact />
//       <Footer />

//     </div>
//   )
// }

// export default page









import Contact from './components/Contact';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';
import HandsOnSchoolHeader from './components/HandsOnSchoolHeader';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Note from './components/Note';
import Note2 from './components/Note2';
import OurCurriculum from './components/OurCurriculum';
import StudentTestimonial from './components/StudentTestimonial';

const Page = () => {
  return (
    <>
      <NavBar />
      {/* Add margin/padding top to prevent overlap with fixed navbar */}
      <main className="pt-28"> {/* Tailwind: pt-20 = 5rem = 80px */}
        <Note />
        <HeroSection />
        <Note2 />
        <HandsOnSchoolHeader />
        <StudentTestimonial />
        <OurCurriculum />
        {/* <ParentTestimonial /> */}
        <CustomerReview />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Page;
