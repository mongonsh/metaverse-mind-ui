// app/admin/create-category/page.tsx

"use client";

import { useState, useEffect } from "react";

const Category = () => {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save the category
    console.log("Category Created:", categoryName);
  };

  return <div></div>;
};

export default Category;
