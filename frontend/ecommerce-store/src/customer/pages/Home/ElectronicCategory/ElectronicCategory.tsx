import React from "react";
import ElectronicCategoryCard from "./ElectronicCategoryCard";

const electronics = [
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Laptop",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/z/n/e/-original-imahgfdynptze8qb.jpeg?q=70&crop=false",
    categoryId: "laptops",
  },
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Mobile",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/i/m/-original-imahg3khtd4gtpnc.jpeg?q=70&crop=false",
    categoryId: "mobiles",
  },
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Smartwatch",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/u/e/h/-original-imahcc49jrxupnfg.jpeg?q=70&crop=false",
    categoryId: "smart_watches",
  },
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Headphones",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70&crop=false",
    categoryId: "headphones_headsets",
  },
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Speaker",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/z/w/0/-original-imagtmvaz8chfvx9.jpeg?q=70&crop=false",
    categoryId: "speakers",
  },
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Tv",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/television/g/g/m/-original-imahcsfhn5zgzq4a.jpeg?q=70&crop=false",
    categoryId: "television",
  },
  {
    section: "ELECTRONIC_CATEGORIES",
    name: "Camera",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/8/g/b/eos-r50-24-2-r50-canon-original-imagngcb6vj5fmyg.jpeg?q=70&crop=false",
    categoryId: "cameras",
  },
];

const ElectronicCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {electronics.map((item) => (
        <ElectronicCategoryCard item={item} />
      ))}
    </div>
  );
};

export default ElectronicCategory;
