import { BBSCardList } from "./components/BBSCard/BBSCardList";
import prisma from "@/lib/prismaClient";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  return (
    <main className="">
      <BBSCardList />
    </main>
  );
}
