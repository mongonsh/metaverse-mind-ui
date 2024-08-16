"use client";
import React, { useState } from "react";
import { axiosInstance } from "@/utils/csrf";
import MessageDialog from "@/components/Dialog";

function Create() {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState("info");

  const openDialog = (type: any, message: any) => {
    setDialogType(type);
    setDialogMessage(message);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
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
      if (res.status === 200 || res.status === 201) {
        openDialog("success", "Ангилал амжилттай нэмэгдлээ.");
        setCategory(""); // Clear the input field after successful submission
      }
    } catch (error) {
      openDialog("error", "Ангилал нэмэх үед алдаа гарлаа.");
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
      </div>
      <MessageDialog />
    </div>
  );
}

export default Create;
