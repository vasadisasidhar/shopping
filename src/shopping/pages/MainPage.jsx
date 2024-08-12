import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import WomanCollections from "../components/WomanCollections";
import { Gents, Ladies } from "../data";

const MainPage = () => {
  const [gentsFashion] = useState(Gents);
  const [ladiesFashion] = useState(Ladies);

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomanCollections ladiesFashion={ladiesFashion} />
    </div>
  );
}; 

export default MainPage;
