const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
            Unlock Your Potential with <span className="text-yellow-500">PixelGenix EduTech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Your journey to becoming a CA or CS starts here. Learn from expert instructors, access premium resources, and grow your future.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all">
              Explore Courses
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/online-education-5307560-4446512.png"
            alt="Hero Illustration"
            className="w-full max-w-md drop-shadow-xl animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
