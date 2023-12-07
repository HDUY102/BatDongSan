import React from "react";
import PropertyItem from "./PropertyItem";
import { property } from "@prisma/client";

const AboutProperty = ({propertiesToList}: {propertiesToList: property[]}) => {
  return (
    <div className="grid grid-cols-3 gap-4 text-center my-8">
      {propertiesToList?.map((property: property) => (
        <PropertyItem key={property.idProperty} property={property} />
      ))}
    </div>
  );
};

export default AboutProperty;
