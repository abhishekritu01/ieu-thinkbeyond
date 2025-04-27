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
      <main className="pt-28"> {/* Tailwind: pt-20 = 5rem = 80px */}
        {/* <Note /> */}
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
