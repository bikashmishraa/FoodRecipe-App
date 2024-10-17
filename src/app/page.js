import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white">
      <Navbar />
      <div className="flex flex-col text-[green] min-h-screen items-center">
      <h1 className="text-6xl font-bold mt-[15%]">Welcome to Recipe App</h1>
      <Link href={"/recipe-list"} className="mt-5 text-3xl">Explore Recipes</Link>
      </div>
    </div>
  );
}
