import Frontpage from "@/components/Frontpage";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <Frontpage />
    </main>
  );
}
