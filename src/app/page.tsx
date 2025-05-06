import Contact from './components/Contact';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';
import HandsOnSchoolHeader from './components/HandsOnSchoolHeader';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Note2 from './components/Note2';
import OurCurriculum from './components/OurCurriculum';
import StudentTestimonial from './components/StudentTestimonial';
import Note from './components/Note';

const Page = () => {
  return (
    <>
      <NavBar />
      <main className="pt-12"> {/* Tailwind: pt-20 = 5rem = 80px */}
        <HeroSection />
        {/* <Note /> */}
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
