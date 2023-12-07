import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import Content from "../Content";
import Slide from "../Slide";

const page = () => {
  return (
    <div>
      <HeaderNav />
      <Slide/>
      <Content />
      <Footer />
    </div>
  );
};

export default page;