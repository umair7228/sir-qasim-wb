import Image from "next/image";
import Home from "./home/page";

export default function Page() {
  return (
    <main className="w-full relative bg-none -z-50 flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <Home />
    </main>
  );
}
