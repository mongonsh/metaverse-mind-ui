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
      <main className="container mx-auto py-8 px-4">
        <div className="h-[500px] block">
          <div className=" bg-gray-950 absolute top-[60px] right-0 left-0 bottom-0 inset-0  ">
            <img src="/cover.png" className="mx-3" />

            <section className="mb-8">
              <SpecialCard data={articles[0]} />
            </section>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => {
            return <Card key={idx} data={article} />;
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
