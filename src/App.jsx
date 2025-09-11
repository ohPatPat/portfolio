import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.scss";
import { useEffect } from "react";
import { PageAnimation } from "./comp/PageAnimation.jsx";
import { Header } from "./comp/header/Header";
import { UpButton } from "./comp/header/Navigation.jsx";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Portfolio } from "./pages/Portfolio";
import { PortfolioCase } from "./pages/PortfolioCase";
import { Contact } from "./pages/Contact";

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};

let PortfolioInfo = [
  {
    caseName: "Baba Energy",
    url: "Baba_Energy",
  },
  {
    caseName: "Springeren",
    url: "Springeren",
  },
  {
    caseName: "Skagens Museum",
    url: "Skagens_Museum",
  },
  {
    caseName: "Hjerte Foreningen",
    url: "Hjerte_Foreningen",
  },
  {
    caseName: "SundhedsSupport",
    url: "SundhedsSupport",
  },
  {
    caseName: "PatiaWorkshop.com",
    url: "PatiaWorkshop",
  },
  {
    caseName: "ArtursPirazkov.dk",
    url: "ArtursPirazkov",
  },
    {
    caseName: "FMC-Trade ApS",
    url: "FMC-TradeApS",
  },
];

function App() {
  const { case_id } = useParams();
  return (
    <>
      <Router>
        <PageAnimation />
        <Header />
        <Routes>
          <Route
            index
            element={
              <Home title={"Patrik Dahl | Portfolio"} currentPage={"Home"} />
            }
          />

          <Route index element={<Portfolio />} />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                title={"Patrik Dahl | Portfolio"}
                cases={PortfolioInfo}
              />
            }
          />
          <Route
            path={`/portfolio/:${case_id}`}
            element={<PortfolioCase cases={PortfolioInfo} />}
          />
          <Route
            path="/about"
            element={<About title={"Patrik Dahl  | Om mig"} />}
          />
          <Route
            path="/contact"
            element={<Contact title={"Patrik Dahl  | Kontakt"} />}
          />
          <Route path="*" element={<Error title={"Patrik Dahl  | 🤔"} />} />
        </Routes>
        <UpButton />
      </Router>
    </>
  );
}

export default App;
