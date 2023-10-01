import React from "react";
import Card from "./Card";
import { useState } from "react";

const RenderCards = ({ data, title, setAllPost }) => {
  const [allData, setAllData] = useState(data)
  if (allData?.length > 0) {
    return allData.map((post, i) => (
        <Card key={post._id} setAllData={setAllData} data={allData} {...post}  />
    ));
  } else {
    return (
      <h2 className="mt-5 font-bold text-red-500 text-xl uppercase">
        {title}
      </h2>
    );

  }
};

export default RenderCards;
