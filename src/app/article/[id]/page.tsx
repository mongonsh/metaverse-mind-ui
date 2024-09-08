import { axiosInstance } from "@/utils/csrf";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import Image from "next/image";
export async function generateStaticParams() {
  const backendUrl = `https://metaverse-mind.vercel.app`;

  let res = await axiosInstance.get(backendUrl + "/article/get-all-articles");

  const articles = res.data;

  return articles.map((article: any) => ({
    id: article.id,
  }));
}

export default async function Article({ params }: any) {
  let { id } = params;
  const backendUrl = `https://metaverse-mind.vercel.app`;
  console.log("id:", id);
  let res = await axiosInstance.get(
    backendUrl + `/article/get-article?id=${id}`
  );
  let data = res.data;

  return (
    <>
      <Header />
      {!data && (
        <div className="h-[500px] block ">
          <div className="  absolute top-[60px] bg-white-950 right-0 left-0 bottom-0 inset-0 flex justify-center items-center ">
            <Spinner />
          </div>
        </div>
      )}
      <main>
        <div className=" container mx-auto py-4">
          <h1 className=" drop-shadow-md font-semibold text-4xl text-center my-3">
            {data.title}
          </h1>
          <div className="flex justify-between items-center max-sm:flex-col ">
            <div className="flex gap-2 items-center">
              <div className="relative w-[74px] h-[74px]">
                <Image
                  src="/avatar.png"
                  className="rounded-full "
                  objectFit="cover"
                  fill
                  alt="avatar"
                />
              </div>

              <div className="flex-col gap-1">
                <h3 className=" text-md font-semibold">
                  Mungunshagai Tumurbaatar
                </h3>
                <p className=" text-[#666666]">engineer, writer</p>
              </div>
            </div>
            <div className="links flex gap-1 py-1">
              <Button val={"Share"} />
              <Button val={"Link"} />
              <Button val={"Tweet"} />
              <Button val={"Share"} />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <span className=" inline-block m-1 p-1 bg-orange-600 text-sky-50 rounded-md">
              {data.category_id}
            </span>
            <img
              src={"" + data.media_url}
              alt="economy"
              className="w-[60%] max-sm:w-full"
            />
            <div
              dangerouslySetInnerHTML={{ __html: data.content }}
              className="py-2"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
