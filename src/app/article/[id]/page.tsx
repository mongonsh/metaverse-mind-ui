import { axiosInstance } from "@/utils/csrf";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
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
        <div className="container mx-auto py-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1>{data.title}</h1>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <span className="p-1 bg-orange-600 text-sky-50 rounded-md">
              эдийн засаг
            </span>
            <img src={"" + data.media_url} alt="economy" />
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
