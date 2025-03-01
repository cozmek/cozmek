import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// commom routes
import AddressBar from "./components/addressBar";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

// addon routes
import Home from "./Pages/HomePage/home";
import Downldbrochure from "./Pages/page1/downldbrochure";
import Terms from "./Pages/terms";
import Privacy from "./Pages/privacy";

function App() {
  return (
    <Router>
      <AddressBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Downldbrochure />} />
        <Route path="/termsandconditions" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
