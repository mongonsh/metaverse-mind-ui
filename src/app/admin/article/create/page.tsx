// app/admin/write-article/page.tsx

"use client";

import { useState, useEffect } from "react";
import ReactQuillDynamicWrapper from "@/components/ReactQuillDynamicWrapper";
import { axiosInstance } from "@/utils/csrf";
import { languages } from "@/utils/languages";
import multer from "multer";
import MessageDialog from "@/components/Dialog";

const Article = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
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

  let [categories, setCategories] = useState([]);

  const backendUrl = "https://metaverse-mind.vercel.app";
  let getAllCategories = async () => {
    let res = await axiosInstance.get(
      backendUrl + "/article/get-all-categories"
    );
    setCategories(res.data);
    setCategory(res.data[0].id);
  };

  const handleFileChange = async (e: any) => {
    setUploadedImage(e.target.files[0]);
  };
  const fileUpload = async () => {
    const formData = new FormData();
    formData.append("file", uploadedImage);

    try {
      const response = await axiosInstance.post(
        backendUrl + "/article/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMediaUrl(response.data.media_url);
      return response.data.media_url;
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const media_url = await fileUpload();
    // Logic to save the article
    let res = await axiosInstance.post(backendUrl + "/article/add-article", {
      title,
      content,
      category,
      language,
      media_url: media_url,
    });
    if (res.status == 201) {
      openDialog("success", "Амжилттай хадгалагдлаа.");
    } else {
      openDialog("error", "Алдаа гарлаа.");
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex gap-4 items-center p-4">
          <label>Категори сонгох</label>
          <select
            name="category"
            id="category_id"
            className="p-2 border border-x-cyan-800"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categories.map((category: any, idx): any => {
              return (
                <option value={category?.id} key={idx}>
                  {category?.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-4 items-center p-4">
          <label>хэл сонгох</label>
          <select
            name="category"
            id="category_id"
            className="p-2 border border-x-cyan-800"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            {languages.map((lang, idx): any => {
              return (
                <option value={"" + lang?.id} key={idx}>
                  {lang?.name_mn}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          className="btn bg-green-700 text-white self-end px-4 py-2 rounded-sm"
        >
          Үүсгэх
        </button>
        <input
          type="text"
          className="p-2 border-0 border-b-2 border-black"
          width={"50%"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Гарчиг"
        />
        <label htmlFor="">Cover зураг байршуулах</label>
        <input
          type="file"
          name="image"
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
        <ReactQuillDynamicWrapper value={content} onChange={setContent} />
      </form>

      {mediaUrl && (
        <div className="p-2 rounded-sm w-[300px] h-[200px]">
          <img src={mediaUrl} alt="thumb" />
        </div>
      )}

      <MessageDialog
        isOpen={isDialogOpen}
        message={dialogMessage}
        onClose={closeDialog}
        type={dialogType}
      />
    </div>
  );
};

export default Article;
