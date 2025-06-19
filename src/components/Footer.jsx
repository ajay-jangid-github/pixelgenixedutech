import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
// import logo from "../assets/logo.png"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 py-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo and About */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            {/* <img src={logo} alt="PixelGenix-EduTech Logo" className="w-10 h-10 object-contain" /> */}
            <h2 className="text-2xl font-bold text-[#00BFFF]">PixelGenix-EduTech</h2>
          </div>
          <p className="text-sm text-gray-400">
            Empowering students with industry-ready education and real-time internship/job exposure.
          </p>
        </div>

        {/* Internships by Places */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFFF] mb-3">Internships by Places</h3>
          <ul className="space-y-1 text-sm">
            {["India", "Delhi", "Bangalore", "Hyderabad", "Mumbai", "Chennai", "Gurgaon", "Kolkata", "Virtual"].map(city => (
              <li key={city}>
                <Link to={`/internships/${city.toLowerCase()}`} className="hover:text-[#00BFFF]">Internship in {city}</Link>
              </li>
            ))}
            <li><Link to="/internships/all" className="hover:text-[#00BFFF]">View all internships</Link></li>
          </ul>
        </div>

        {/* Internships by Stream */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFFF] mb-3">Internships by Stream</h3>
          <ul className="space-y-1 text-sm">
            {[
              "Computer Science", "Electronics", "Mechanical", "Civil",
              "Marketing", "Chemical", "Finance", "Summer Research Fellowship",
              "Campus Ambassador Program"
            ].map(stream => (
              <li key={stream}>
                <Link to={`/internships/${stream.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#00BFFF]">
                  {stream} Internship
                </Link>
              </li>
            ))}
            <li><Link to="/internships/all-streams" className="hover:text-[#00BFFF]">View all internships</Link></li>
          </ul>
        </div>

        {/* Jobs by Places */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFFF] mb-3">Jobs by Places</h3>
          <ul className="space-y-1 text-sm">
            {["Delhi", "Mumbai", "Bangalore", "Jaipur", "Kolkata", "Hyderabad", "Pune", "Chennai", "Lucknow"].map(city => (
              <li key={city}>
                <Link to={`/jobs/${city.toLowerCase()}`} className="hover:text-[#00BFFF]">Jobs in {city}</Link>
              </li>
            ))}
            <li><Link to="/jobs/all" className="hover:text-[#00BFFF]">View all jobs</Link></li>
          </ul>
        </div>

        {/* Courses & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#00BFFF] mb-3">Courses & Contact</h3>
          <ul className="space-y-1 text-sm">
            {[
              ["Full Stack Development", "fullstack"],
              ["Data Science", "data-science"],
              ["Human Resource Management", "hrm"],
              ["Digital Marketing", "digital-marketing"],
              ["UI/UX Design", "uiux"],
              ["Product Management", "product"]
            ].map(([label, path]) => (
              <li key={path}><Link to={`/courses/${path}`} className="hover:text-[#00BFFF]">{label}</Link></li>
            ))}
            <li><Link to="/privacy" className="hover:text-[#00BFFF]">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-[#00BFFF]">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-[#00BFFF]">Contact Us</Link></li>
          </ul>

          <div className="flex gap-4 text-xl text-[#00BFFF] mt-4">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaWhatsapp className="hover:text-white" /></a>
            <a href="#"><FaEnvelope className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700" />

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-4">
        {[
          "About us", "We're hiring", "Hire interns for your company", "Post a Job",
          "Team Diary", "Blog", "Our Services", "Free Job Alerts", "Resume Maker",
          "Sitemap", "College TPO registration", "List of Companies", "Jobs for Women"
        ].map((item, i) => (
          <Link key={i} to={`/${item.toLowerCase().replace(/[^a-z]+/g, '-')}`} className="hover:text-[#00BFFF]">
            {item}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PixelGenix-EduTech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
