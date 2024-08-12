import React from "react";
import Image from "next/image";

const Card = ({ data }: any) => {
  return (
    <article className="article-bg p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={"" + data.media_url}
        alt="Article 2"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">{data?.title_mn}</h2>
        <p className="text-gray-200 mb-4">{data?.short_desc}</p>
        <a
          href={"/article/" + data?.id}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default Card;
