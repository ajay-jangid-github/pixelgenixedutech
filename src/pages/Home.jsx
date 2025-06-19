// import CategoriesSection from "../components/CategoriesSection";
import CoursesSection from "../components/CoursesSection";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";


const Home = () => {
  return (
    <>
    {/* <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-indigo-600">Welcome to PixelGenix EduTech 🎓</h1>
      <p className="text-gray-600 mt-4">Start building the full LMS experience</p>
    </div> */}
    <HeroSection />
    <CoursesSection />
    <TestimonialsSection />
    {/* <CategoriesSection /> */}
    </>
  );
};

export default Home;
