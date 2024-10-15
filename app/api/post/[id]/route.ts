import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const id = params.id;
  const allBBSPosts = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  return NextResponse.json(allBBSPosts);
}
