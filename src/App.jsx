import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Detail from "./pages/Detail/Detail";
import DetailSeries from "./pages/DetailSeries/DetailSeries";
import Category from "./pages/Category/Category";
import Favorites from "./pages/favorite/Favorite";
import Search from "./pages/Search/Search";
import Footer from "./components/Footer";

function App() {
    const tema = useSelector((state) => state.temaTotal);
  const isDark = tema === "Gelap";


      return(
          <div>
              <Navbar/>
            <Routes>
            
              <Route path="/" element={<Home />}/>
              <Route path="/detail/:id" element={<Detail />} />
               <Route path="/series/:id" element={<DetailSeries />} /> 
               <Route path="/category" element={<Category />} />
               <Route path="/search" element={<Search />} />
       
<Route path="/favorites" element={<Favorites />} />
               
            </Routes>
            <Footer />
          </div>
      )
}

export default App;