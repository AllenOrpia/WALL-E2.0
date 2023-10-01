import React from "react";
import Card from "./Card";

const RenderCards = ({ data, title, setAllPost }) => {
  if (data?.length > 0) {
    return data.map((post, i) => (
        <Card key={post._id} setAllPost={setAllPost} data={data} {...post}  />
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
