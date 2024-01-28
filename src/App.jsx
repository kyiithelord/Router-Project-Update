import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { GetAuthorData } from "./service/author.service";
import { Routes, Route } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "../not-found";

const App = () => {
  const { loading, data, error } = useFetch(GetBookData, "book");

  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;