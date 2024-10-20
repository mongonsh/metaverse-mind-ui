import { axiosInstance } from "@/utils/csrf";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import Image from "next/image";
import { BsEye, BsCalendar, BsPin, BsMessenger } from "react-icons/bs";

// Fetch all article IDs for static generation
export async function generateStaticParams() {
  const backendUrl = `https://metaverse-mind.vercel.app`;
  const res = await axiosInstance.get(backendUrl + "/article/get-all-articles");
  const articles = res.data;

  return articles.map((article: any) => ({
    id: article.id.toString(), // Ensure ID is string
  }));
}

// Revalidate after 60 seconds for incremental regeneration
export const revalidate = 60;

export default async function Article({ params }: any) {
  const { id } = params;
  const backendUrl = `https://metaverse-mind.vercel.app`;

  // Fetching article data using the ID
  let res;
  try {
    res = await axiosInstance.get(`${backendUrl}/article/get-article?id=${id}`);
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return (
      <div className="h-[500px] block ">
        <div className="  absolute top-[60px] bg-white-950 right-0 left-0 bottom-0 inset-0 flex justify-center items-center ">
          <Spinner />
          <p>Failed to load article. Please try again later.</p>
        </div>
      </div>
    );
  }

  const data = res.data;

  if (!data) {
    return (
      <div className="h-[500px] block ">
        <div className="  absolute top-[60px] bg-white-950 right-0 left-0 bottom-0 inset-0 flex justify-center items-center ">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto py-4">
          <h1 className="drop-shadow-md font-semibold text-4xl text-center my-3">
            {data.title}
          </h1>
          <div className="relative h-[500px] shadow-inner">
            <Image
              src={data.media_url}
              alt="economy"
              className="w-[60%] max-sm:w-full"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 z-50 pb-10 text-black bg-white">
              <div className="container mx-auto flex items-center">
                <p className="flex gap-2 items-center">
                  <BsCalendar />
                  Sep 23, 2024
                </p>
                <p className="flex gap-2 items-center">
                  <BsPin />
                  Tokyo, Japan
                </p>
                <p className="flex gap-2 items-center">
                  <BsMessenger /> 5 comments
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex justify-between items-center max-sm:flex-col">
            <div className="flex gap-2 items-center">
              <div className="flex items-center">
                <BsEye />
                150
              </div>
              <span className="inline-block m-1 p-1 bg-[#1f1e3b] text-sky-50 rounded-md">
                {data.category_id}
              </span>
            </div>
            <div className="links flex gap-1 py-1">
              <Button val={"Share"} />
              <Button val={"Link"} />
              <Button val={"Tweet"} />
              <Button val={"Share"} />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div
              dangerouslySetInnerHTML={{ __html: data.content }}
              className="py-2 container mx-auto text-justify article-content"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
