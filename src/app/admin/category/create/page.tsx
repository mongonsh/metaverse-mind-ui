"use client";
import React from "react";
import { useState } from "react";
import { axiosInstance } from "@/utils/csrf";
function Create() {
  let [category, setCategory] = useState("");
  const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
  let addCategory = async (category: any) => {
    let res = await axiosInstance.post(backendUrl + "/article/add", {
      category: category,
    });
  };
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-2 items-center">
          <label htmlFor="category">ангилалын нэр:</label>
          <input
            type="text"
            name="category"
            id="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <button
            name="add"
            className="px-4 py-2 text-white bg-green-950"
            onClick={() => addCategory(category)}
          >
            нэмэх
          </button>
        </div>
      </div>
    </>
  );
}

export default Create;
