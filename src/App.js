import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  const title = "Floor Cleaning Machine On Rent | Sweeping Machines Rental - Kruger Vac"
  const descriptions = "We are one of leading suppliers of Industrial Floor Cleaning and Scrubbing machines on Rent."

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={title} descriptions={descriptions} />} />
          <Route
            path="/disclaimer"
            exact
            element={
              <Disclaimer title={title} descriptions={descriptions} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
