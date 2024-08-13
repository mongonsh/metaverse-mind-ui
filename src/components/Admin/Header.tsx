import Link from "next/link";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <nav className="bg-[#07111C] ">
      <div className="container mx-auto flex p-2 text-white items-center">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src="/article.svg" alt="logo" width={60} height={60} />
          Metaverse Mind
        </Link>
        <ul className="flex ms-auto gap-5">
          <li>
            <Link href={"/category"}>Категори</Link>
          </li>
          <li>
            <Link href={"/blog"}>нийтлэлүүд</Link>
          </li>
          <li>
            <Link href={"/blog"} className="flag"></Link>
          </li>
          <li>
            <Link href={"/blog"}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
