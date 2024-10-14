import { BBSCardList } from "./components/BBSCard/BBSCardList";

async function getBBSAll(params: type) {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const data = await response.json();
  console.log(data);

  return data;
}

export default async function Home() {
  return (
    <main className="">
      <BBSCardList />
    </main>
  );
}
