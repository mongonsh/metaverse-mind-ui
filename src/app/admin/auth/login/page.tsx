"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://metaverse-mind.vercel.app/accounts/login/",
        {
          username: username,
          password: password,
        }
      );
      console.log(response.data);
      router.push("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container mx-auto mt-[80px]">
      <div className="flex w-full">
        <form
          onSubmit={handleSubmit}
          className="w-[60%] rounded-md h-[100vh] mx-auto flex-1"
        >
          <div className="flex flex-col gap-6 items-center justify-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="px-8 py-4 outline-none border-b-[1px] border-stone-700"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-8 py-4 outline-none border-b-[1px] border-stone-700"
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className=" bg-[#3751FE] text-white px-16 py-4"
              >
                Login
              </button>
              <button
                type="submit"
                className=" bg-white text-[#3751FE] px-16 py-4 border-indigo-700 border-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
        <div className="flex-1">illustraton</div>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
}
