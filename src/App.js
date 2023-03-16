import { Route, Routes } from "react-router-dom";
import TechStack from "./pages/techStack";
import { HomePage, ContactUsPage } from "./pages/PagesIndex";
import Mainlayout from "./common/Mainlayout";
import { Home_Screen, ContactUs_Screen, Tech_Screen } from "./route/Routes"; // Routes=============

// Styles
import "./styles/App.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route path={Home_Screen} element={<HomePage />} />
        <Route path={Tech_Screen} element={<TechStack />} />
        <Route path={ContactUs_Screen} element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
