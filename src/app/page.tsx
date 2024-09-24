// app/page.tsx
"use client";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/csrf";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import SpecialCard from "@/components/SpecialCard";
import Spinner from "@/components/Spinner";
import Image from "next/image";

const Home = () => {
  let [articles, setArticles] = useState([]);
  const backendUrl = "https://metaverse-mind.vercel.app";

  let getAllArticles = async () => {
    let res = await axiosInstance.get(`${backendUrl}/article/get-all-articles`);
    setArticles(res.data);
  };

  useEffect(() => {
    getAllArticles();
  }, []);
  return (
    <>
      <Header />
      {articles.length == 0 && (
        <div className="h-[600px] block ">
          <div className="  absolute top-[60px] bg-gray-950 right-0 left-0 bottom-0 inset-0 flex justify-center items-center ">
            <Spinner />
          </div>
        </div>
      )}
      {articles.length > 0 && (
        <main className=" overflow-hidden">
          <div className="bg-[#020F1C] py-5 flex items-center h-[70vh]">
            <div className="container mx-auto">
              <div className="relative sm:flex gap-2 items-center flex-wrap">
                <section className="mb-8  bottom-0 flex-1">
                  <SpecialCard data={articles[0]} />
                </section>
                <div className="flex gap-5 flex-1 h-[50vh] py-2 justify-around">
                  <div className="relative self-start h-[70%] w-[20%] ">
                    <Image
                      alt=""
                      src={"/metaverse_cover.png"}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-md"
                    />
                  </div>
                  <div className="relative self-end h-[70%] w-[20%]">
                    <Image
                      alt=""
                      src={"/metaverse_cover.png"}
                      fill
                      className="rounded-md"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="relative self-start h-[70%] w-[20%] rounded">
                    <Image
                      alt=""
                      src={"/metaverse_cover.png"}
                      fill
                      className="rounded-md"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {articles.map((article, idx) => {
                return <Card key={idx} data={article} />;
              })}
            </section>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};

export default Home;
