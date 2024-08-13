import React from "react";
import Image from "next/image";

const SpecialCard = ({ data }: any) => {
  return (
    <article className="article-bg px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div>
        <h2 className="text-3xl font-semibold mb-2 text-white shadow-lg">
          {data?.title_mn}
        </h2>
        <p className="text-gray-200 mb-4">{data?.short_text}</p>
        <div className="flex gap-2 items-center">
          <span className="inline-block bg-green-600 text-white px-2 py-1 rounded-md hover:bg-blue-700">
            {data?.category_id}
          </span>
          <a
            href={"/article/" + data?.id}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Цааш унших
          </a>
        </div>
      </div>
    </article>
  );
};

export default SpecialCard;
