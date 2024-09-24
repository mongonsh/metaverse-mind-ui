import React from "react";
import Image from "next/image";

const SpecialCard = ({ data }: any) => {
  return (
    <div className=" flex-col gap-7 article-bg px-6  hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl md:text-3xl mb-2 text-slate-50 ">
        {data?.title_mn}
      </h2>
      <p className="text-white mb-4">{data?.short_text}</p>
      <div className="flex gap-2 items-center">
        <span className="inline-block bg-slate-800 px-2 py-1 rounded-lg hover:bg-blue-700 text-white">
          {data?.category_id}
        </span>
        <a
          href={"/article/" + data?.id}
          className="inline-block bg-white  px-4 py-2 rounded hover:bg-blue-700"
        >
          Цааш унших
        </a>
      </div>
    </div>
  );
};

export default SpecialCard;
