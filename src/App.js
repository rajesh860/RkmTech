import { Route, Routes } from "react-router-dom";
import TechStack from "./pages/techStack/TechStack";
import { HomePage, ContactUsPage } from "./pages/PagesIndex";
import Mainlayout from "./common/Mainlayout";
import {
  Home_Screen,
  ContactUs_Screen,
  Tech_Screen,
  AboutUs_Screen,
  Blog_Screen,
  Blog_Detail_Screen,
} from "./route/Routes"; // Routes=============

// Styles
import "./styles/App.scss";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blogdetail/BlogDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route path={Home_Screen} element={<HomePage />} />
        <Route path={Tech_Screen} element={<TechStack />} />
        <Route path={ContactUs_Screen} element={<ContactUsPage />} />
        <Route path={AboutUs_Screen} element={<AboutUs />} />
        <Route path={Blog_Screen} element={<Blog />} />
        <Route path={Blog_Detail_Screen} element={<BlogDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
