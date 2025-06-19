import { Outlet } from "react-router-dom";

function App() {
  return (
   <>
    <div className="text-center text-2xl font-bold text-blue-600 p-10">
      PixelGenix EduTech – React Frontend LMS 🚀
    </div>
    <Outlet />
   </>
  );
}

export default App;
