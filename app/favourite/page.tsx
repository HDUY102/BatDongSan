import React from "react";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import FavouriteItem from "./FavouriteItem";

const page = () => {
  return (
    <div>
      <HeaderNav />
      <FavouriteItem />
      <Footer />
    </div>
  );
};

export default page;