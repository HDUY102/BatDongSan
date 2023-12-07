import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import DetailProperty from "../DetailProperty";
import Slide from "../Slide";

const page = () => {
  return (
    <div>
      <HeaderNav />
      <Slide/>
      <DetailProperty />
      <Footer />
    </div>
  );
};

export default page;