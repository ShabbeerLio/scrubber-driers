import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import ProductsData from "./Pages/Products/ProductsData";

function App() {

  const title = "Scrubber Dryer Machines for Floor Cleaning - Krugervac"
  const descriptions = "Krugervac offers a wide range of scrubber dryer machines for efficient and effective floor cleaning. Experience the power and convenience of our automatic scrubber dryers to keep your floors spotless."

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={title} descriptions={descriptions} />} />
          <Route path="/about" exact element={<About title={title} descriptions={descriptions} />} />
          {ProductsData.map((item) => (
            <Route key={item.id} path={item.tag} exact element={<Products title={title} descriptions={descriptions} item={item} key={item.id}/>} />
          ))}
          <Route path="/contact-us" exact element={<Contact title={title} descriptions={descriptions} />} />
          <Route path="/disclaimer" exact element={<Disclaimer title={title} descriptions={descriptions} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
