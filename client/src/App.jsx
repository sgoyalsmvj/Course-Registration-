import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Route, Router, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import CourseReg from "./pages/CourseReg";
import Feedback from "./pages/Feedback";
import  axios  from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/coursereg" element={<CourseReg />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
