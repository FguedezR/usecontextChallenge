import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTheme } from "../themes/ThemeContext";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";

const Routes = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <section className={`App ${theme}`}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/myjob">MyJob</Link>
        </nav>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myjob" element={<MyJob />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
};

export default RoutesApp;
