"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.push("/admin/auth/login"); // Redirect to login if not authenticated
    }
  }, [0]);

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
}

export default Home;
