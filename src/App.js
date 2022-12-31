import React from "react";
import { Route, Routes } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import "./scss/app.scss";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
     <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
     </SearchContext.Provider>
    </div>
  );
};

export default App;
