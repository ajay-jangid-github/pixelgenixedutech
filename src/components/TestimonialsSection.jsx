import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "CA Student",
    rating: 5,
    comment:
      "PixelGenix EduTech made learning so easy and interactive. The live classes and doubt sessions were the best part!",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ankit Verma",
    role: "CS Aspirant",
    rating: 4,
    comment:
      "Amazing faculty and structured syllabus. The course quality exceeded my expectations. Highly recommended!",
    image:
      "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Sneha Patil",
    role: "CA Foundation Topper",
    rating: 5,
    comment:
      "Very well-organized content with supportive instructors. I cleared my exam in the first attempt!",
    image:
      "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What Our Students Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500 mb-1">{item.role}</p>
              <div className="flex justify-center my-2 text-yellow-500">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
              </div>
              <p className="text-gray-600 text-sm">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
