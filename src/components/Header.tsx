// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/csrf";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  let [categories, setCategories] = useState([]);
  let [nav, setNav] = useState(false);
  const backendUrl = `https://metaverse-mind.vercel.app`;
  let getAllCategories = async () => {
    let res = await axiosInstance.get(
      backendUrl + "/article/get-all-categories"
    );
    setCategories(res.data);
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <header>
      <nav className="bg-white">
        <div className="container flex mx-auto justify-between items-center w-full  px-4 text-black bg-white ">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src="/article.svg" alt="logo" width={60} height={60} />
          </Link>
          <ul className="hidden md:flex ms-auto gap-5">
            {categories.map((category: any, idx: any): any => {
              return (
                <li key={idx}>
                  <Link href={"/" + category?.path_name}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-50">
              {categories.map((category: any, idx: any) => (
                <li
                  key={idx}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    href={"/" + category?.path_name}
                  >
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
