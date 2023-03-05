import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MyHomePage from "./pages/MyHomePage";
import MyProjectsPage from "./pages/MyProjectsPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import MyBlogsPage from "./pages/MyBlogsPage";
import MyAchievementsPage from "./pages/MyAchievementsPage";
import MyAboutPage from "./pages/MyAboutPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/projects":
        title = "";
        metaDescription = "";
        break;
      case "/courses":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/myachievements":
        title = "";
        metaDescription = "";
        break;
      case "/aboutme":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MyHomePage />} />

      <Route path="/projects" element={<MyProjectsPage />} />

      <Route path="/courses" element={<MyCoursesPage />} />

      <Route path="/blogs" element={<MyBlogsPage />} />

      <Route path="/myachievements" element={<MyAchievementsPage />} />

      <Route path="/aboutme" element={<MyAboutPage />} />
    </Routes>
  );
}
export default App;
