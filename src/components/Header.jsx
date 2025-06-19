import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          PixelGenix<span className="text-yellow-500">EduTech</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium relative">

          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>

          {/* Jobs Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdown("jobs")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
              Jobs <ChevronDown size={16} />
            </button>
            <div
              className={`absolute left-0 mt-3 min-w-52 bg-white/80 border border-gray-200 shadow-2xl rounded-xl z-20 transition-all duration-200
                ${dropdown === "jobs" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
              `}
              style={{ backdropFilter: "blur(12px)" }}
            >
              <Link to="/jobs/internships-with-job-offer" className="block px-5 py-3 hover:bg-indigo-50 transition-colors">Internships with Job Offer</Link>
              <Link to="/jobs/fresher-jobs" className="block px-5 py-3 hover:bg-indigo-50 transition-colors">Fresher Jobs</Link>
              <Link to="/jobs/work-from-home" className="block px-5 py-3 hover:bg-indigo-50 transition-colors">Work from Home Jobs</Link>
            </div>
          </div>

          {/* Internships Dropdown */}
        <div
  className="relative group"
  onMouseEnter={() => setDropdown("internships")}
  onMouseLeave={() => setDropdown(null)}
>
  <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
    Internships <ChevronDown size={16} />
  </button>
  <div
    className={`absolute left-0 mt-3 w-[400px] bg-white/90 border border-gray-200 shadow-2xl rounded-xl z-20 transition-all duration-200
      ${dropdown === "internships" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
    `}
    style={{ backdropFilter: "blur(10px)" }}
  >
    <div className="grid grid-cols-2 gap-0 divide-x divide-gray-200">
      
      {/* Column 1 */}
      <div className="p-4">
        <div className="font-semibold text-gray-700 mb-2">Explore</div>
        <Link to="/internships/profile" className="block py-1 text-sm hover:text-indigo-600">Profile</Link>
        <Link to="/internships/top-categories" className="block py-1 text-sm hover:text-indigo-600">Top Categories</Link>
        <Link to="/internships/remote" className="block py-1 text-sm hover:text-indigo-600">Work From Home</Link>
        <Link to="/internships/placement-guarantee" className="block py-1 text-sm text-green-600 font-semibold">Placement Guarantee NEW</Link>
        <Link to="/internships/explore" className="block py-1 text-sm text-indigo-600 font-medium">View all internships</Link>
      </div>

      {/* Column 2 */}
      <div className="p-4">
        <div className="font-semibold text-gray-700 mb-2">Top Locations</div>
        <Link to="/internships/bangalore" className="block py-1 text-sm hover:text-indigo-600">Bangalore</Link>
        <Link to="/internships/delhi" className="block py-1 text-sm hover:text-indigo-600">Delhi</Link>
        <Link to="/internships/hyderabad" className="block py-1 text-sm hover:text-indigo-600">Hyderabad</Link>
        <Link to="/internships/mumbai" className="block py-1 text-sm hover:text-indigo-600">Mumbai</Link>
        <Link to="/internships/chennai" className="block py-1 text-sm hover:text-indigo-600">Chennai</Link>
        <Link to="/internships/pune" className="block py-1 text-sm hover:text-indigo-600">Pune</Link>
        <Link to="/internships/kolkata" className="block py-1 text-sm hover:text-indigo-600">Kolkata</Link>
        <Link to="/internships/jaipur" className="block py-1 text-sm hover:text-indigo-600">Jaipur</Link>
        <Link to="/internships/international" className="block py-1 text-sm hover:text-indigo-600">International</Link>
      </div>

    </div>
  </div>
</div>


          {/* Trainings Dropdown */}
          {/* Courses Dropdown */}
{/* Courses Dropdown */}
<div
  className="relative group"
  onMouseEnter={() => setDropdown("courses")}
  onMouseLeave={() => setDropdown(null)}
>
  <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
    Courses <ChevronDown size={16} />
  </button>
  <div
    className={`absolute left-0 mt-3 w-[600px] bg-white/80 border border-gray-200 shadow-2xl rounded-xl z-20 transition-all duration-200
      ${dropdown === "courses" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
    `}
    style={{ backdropFilter: "blur(12px)" }}
  >
    <div className="grid grid-cols-2 divide-x divide-gray-200">
      
      {/* Column 1: Certification Courses */}
      <div className="px-5 py-3">
        <div className="font-semibold text-gray-700 mb-2">Certification Courses</div>
        <a href="#" className="block py-1 hover:text-indigo-600">Web Development</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Programming with Python</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Digital Marketing</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Machine Learning</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Advanced Excel</a>
        <a href="#" className="block py-1 hover:text-indigo-600">AutoCAD</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Data Science</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Programming with C and C++</a>
        <a href="#" className="block py-1 text-indigo-600 font-medium">View 70+ more courses</a>
      </div>

      {/* Column 2: Placement Guarantee Courses */}
      <div className="px-5 py-3">
        <div className="font-semibold text-gray-700 mb-2">Placement Guarantee Courses</div>
        <a href="#" className="block py-1 hover:text-indigo-600">Full Stack Development Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Data Science Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Human Resource Management Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Digital Marketing Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Electric Vehicle Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">UI/UX Design Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Product Management Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Financial Modelling Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Supply Chain Logistics Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Banking Sales Course</a>
        <a href="#" className="block py-1 hover:text-indigo-600">Software Testing Course</a>
      </div>
    </div>
  </div>
</div>



          <Link to="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">Login</Link>
          <Link to="/register" className="bg-gradient-to-r from-indigo-600 to-yellow-500 text-white px-5 py-2 rounded-lg shadow hover:from-indigo-700 hover:to-yellow-600 transition-all font-semibold">Register</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/95 shadow-lg rounded-b-xl backdrop-blur-md transition-all">
          <Link to="/" className="block py-2">Home</Link>
          <details className="group">
            <summary className="cursor-pointer py-2">Jobs</summary>
            <div className="ml-4">
              <Link to="/jobs/internships-with-job-offer" className="block py-1">Internships with Job Offer</Link>
              <Link to="/jobs/fresher-jobs" className="block py-1">Fresher Jobs</Link>
              <Link to="/jobs/work-from-home" className="block py-1">Work from Home Jobs</Link>
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer py-2">Internships</summary>
            <div className="ml-4">
              <Link to="/internships/web-development" className="block py-1">Web Development</Link>
              <Link to="/internships/graphic-design" className="block py-1">Graphic Design</Link>
              <Link to="/internships/data-science" className="block py-1">Data Science</Link>
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer py-2">Trainings</summary>
            <div className="ml-4">
              <a href="https://trainings.internshala.com/web-development" target="_blank" rel="noreferrer" className="block py-1">Web Development</a>
              <a href="https://trainings.internshala.com/digital-marketing" target="_blank" rel="noreferrer" className="block py-1">Digital Marketing</a>
              <a href="https://trainings.internshala.com/data-science" target="_blank" rel="noreferrer" className="block py-1">Data Science</a>
            </div>
          </details>
          <Link to="/blog" className="block py-2">Blog</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
          <Link to="/login" className="block py-2">Login</Link>
          <Link to="/register" className="block py-2">Register</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
