import React from "react";
import { BBSCard } from "./BBSCard";
import { BBSData } from "@/app/types/types";

type DataType = {
  data: BBSData[];
};

export const BBSCardList = (props: DataType) => {
  const { data } = props;
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {data.map((item) => (
        <BBSCard key={item.id} data={item} />
      ))}
    </div>
  );
};
