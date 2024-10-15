import { BBSCardList } from "./components/BBSCard/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAll() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const data: BBSData[] = await response.json();
  console.log(data);

  return data;
}

export default async function Home() {
  const data = await getBBSAll();
  return (
    <main className="">
      <BBSCardList data={data} />
    </main>
  );
}
