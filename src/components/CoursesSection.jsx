import CourseCard from "./CourseCard";

const sampleCourses = [
  {
    id: 1,
    title: "Mastering Accounting for Beginners",
    instructor: "By Rahul Mehta",
    duration: "8h 30m",
    students: 1200,
    rating: "4.7",
    image:
      "https://img.freepik.com/free-photo/teacher-explaining-lesson-group-students_23-2148893829.jpg",
  },
  {
    id: 2,
    title: "CS Executive Crash Course",
    instructor: "By Sneha Kapoor",
    duration: "5h 15m",
    students: 900,
    rating: "4.5",
    image:
      "https://img.freepik.com/free-photo/businesswoman-teaching-business-charts_23-2148893823.jpg",
  },
  {
    id: 3,
    title: "CA Foundation Live Batch",
    instructor: "By Vikram Jain",
    duration: "10h",
    students: 1600,
    rating: "4.8",
    image:
      "https://img.freepik.com/free-photo/corporate-trainer-talking-team_23-2148893804.jpg",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sampleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
