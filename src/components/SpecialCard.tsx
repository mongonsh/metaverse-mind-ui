import React from "react";
import Image from "next/image";

const SpecialCard = ({ data }: any) => {
  return (
    <article className="article-bg p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={"/" + data?.media_url}
        alt="Cover Article"
        className="w-full h-96 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-3xl font-semibold mb-2">{data?.title_mn}</h2>
        <p className="text-gray-200 mb-4">{data?.short_text}</p>
        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {data?.category_id}
        </span>
        <a
          href={"/article/" + data?.id}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Цааш унших
        </a>
      </div>
    </article>
  );
};

export default SpecialCard;
