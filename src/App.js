import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, ContactUsPage } from "./pages/PagesIndex";
import Mainlayout from "./common/Mainlayout";
import { Home_Screen, ContactUs_Screen } from "./route/Routes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route path={Home_Screen} element={<HomePage />} />
        <Route path={ContactUs_Screen} element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
