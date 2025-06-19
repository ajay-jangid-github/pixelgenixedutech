import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>
        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
          <span className="flex items-center gap-1">
            <Clock size={16} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} /> {course.students}+ Students
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-yellow-500 flex items-center gap-1 font-semibold">
            <Star size={16} /> {course.rating}
          </span>
          <Link
            to={`/courses/${course.id}`}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-indigo-700 transition"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
