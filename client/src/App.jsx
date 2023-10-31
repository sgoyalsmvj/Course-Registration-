import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Route, Router, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import CourseReg from "./pages/CourseReg";
import Feedback from "./pages/Feedback";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/coursereg" element={<CourseReg />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
