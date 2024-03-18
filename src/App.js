import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import HomePage from "./page/Home/HomePage";
import LaBibliothèqueHumaine from "./page/Projects/LaBibliothèqueHumaine";
import AwlednaZen from "./page/Projects/AwlednaZen";
import Euromed from "./page/Projects/Euromed";
import FinaMena from "./page/Projects/FinaMena";
import GenerationP from "./page/Projects/GenerationP";
import InnoGovacademy from "./page/Projects/InnoGovacademy";
import About from "./page/About/About";
// import WorkWithUs from "./page/Contacts/WorkWithUs";
import Contacts from "./page/Contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="labibliothequehumaine"
          element={<LaBibliothèqueHumaine />}
        />
        <Route path="awlednaZen" element={<AwlednaZen />} />
        <Route path="euromed" element={<Euromed />} />
        <Route path="finamena" element={<FinaMena />} />
        <Route path="generationp" element={<GenerationP />} />
        <Route path="innoGovacademy" element={<InnoGovacademy />} />
        {/* <Route path="7" element={<7 />} /> */}

        <Route path="about" element={<About />} />
        {/* <Route path="workwithus" element={<WorkWithUs />} /> */}
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
