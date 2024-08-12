// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/csrf";

const Header = () => {
  let [categories, setCategories] = useState([]);
  const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
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
        <div className="container mx-auto flex p-2 text-[#000] items-center">
          <Link href={"#"} className="flex gap-2 items-center">
            <Image src="/article.svg" alt="logo" width={60} height={60} />
          </Link>
          <ul className="flex ms-auto gap-5">
            {categories.map((category: any, idx: any): any => {
              return (
                <li key={idx}>
                  <Link href={"/" + category?.path_name}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
