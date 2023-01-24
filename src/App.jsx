import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.scss";
import { useEffect } from "react";
import { Header } from "./comp/header/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route index element={<Home title={"Patrik Dahl | Portfolio"} />} />
          <Route path="/portfolio" element={<Portfolio title={"Patrik Dahl  | Portfolio"} />} />
          <Route path="/about" element={<About title={"Patrik Dahl  | About me page"} />} />
          <Route path="/contact" element={<Contact title={"Patrik Dahl  | Contact page"} />} />
          <Route path="*" element={<Error title={"Patrik Dahl  | lkjgljf page"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
