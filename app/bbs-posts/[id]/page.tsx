import { BBSData } from "@/app/types/types";
import Link from "next/link";
import React from "react";

async function getBBSItem(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  const data: BBSData = await response.json();

  return data;
}

const page = async ({ params }: { params: { id: number } }) => {
  const data = await getBBSItem(params.id);
  const { title, content, username } = data;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-700">{username}</p>

      <p className="text-gray-900">{content}</p>
      <Link href={"/"}>back</Link>
    </div>
  );
};

export default page;
