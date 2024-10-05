import React from "react";
import Image from "next/image";

const Card = ({ data }: any) => {
  return (
    <article className="article-bg p-1 rounded-lg shadow-lg transform hover:scale-101 transition-transform duration-300 z-50 bg-white w-[100%]">
      <div className="relative w-[100%] h-[250px] overflow-hidden">
        <Image
          src={"" + data.media_url}
          alt="Article 2"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="w-full h-48 object-cover rounded-t-lg hover:scale-125 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">{data?.title_mn}</h2>
        <p className="text-gray-200 mb-4">{data?.short_desc}</p>
        <a
          href={"/article/" + data?.id}
          className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Унших
        </a>
      </div>
    </article>
  );
};

export default Card;
