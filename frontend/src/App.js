import { Navigate, Route, Routes } from "react-router-dom";
import Assembler from "./Components/Assembler/Assembler";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/Authorization/SignIn";
import Map from "./Components/Footer/MapPage/Map";
import { useSelector } from "react-redux";
import Assembly from "./Components/Assembly/Assembly";
import Cart from "./Components/Cart/Cart";
import { Fullstory } from "./Components/Assembly/Product/Fullstory";

function App() {
  const token = useSelector((state) => state.users.token);
  return (
    <>
      <Header />

      <Routes>
      {token ?  <Route path="/cart" element={<Cart />} /> :  <Route path="/cart" element={<Navigate to={'/configurator'}/>} />}
        <Route path="/" element={<Navigate to={"/configurator"} />} />
        <Route path="/configurator" element={<Assembler/>} />
        <Route path="/assembly" element={<Assembly />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="assembly/:id" element={<Fullstory />} />
        <Route path="map" element={<Map/>} />
        {token ? <Route path="/login" element={<Navigate to={"/configurator"} />} /> : <Route path="/login" element={<SignIn />} />}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
