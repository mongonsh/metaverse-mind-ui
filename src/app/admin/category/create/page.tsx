"use client";
import React, { useState } from "react";
import { axiosInstance } from "@/utils/csrf";

function Create() {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const backendUrl = `https://metaverse-mind.vercel.app`;

  const addCategory = async (category: any) => {
    if (!category.trim()) {
      setMessage("Ангилалын нэр хоосон байна.");
      return;
    }

    try {
      const res = await axiosInstance.post(backendUrl + "/article/add", {
        category: category,
      });
      if (res.status === 200) {
        setMessage("Ангилал амжилттай нэмэгдлээ.");
        setCategory(""); // Clear the input field after successful submission
      }
    } catch (error) {
      setMessage("Ангилал нэмэх үед алдаа гарлаа.");
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-2 items-center">
        <label htmlFor="category">Ангилалын нэр:</label>
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-2 py-1"
        />
        <button
          name="add"
          className="px-4 py-2 text-white bg-green-950"
          onClick={() => addCategory(category)}
        >
          Нэмэх
        </button>
        {message && <p className="text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default Create;
