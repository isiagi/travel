import React from "react";
import Header from "../../components/header/Header";

import img1 from "../../assets/3.jpg";

type Props = {};

const Category = (props: Props) => {
  return (
    <div>
      <Header img={img1} title="Category" />
    </div>
  );
};

export default Category;
