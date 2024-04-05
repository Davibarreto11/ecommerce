import Aside from "@/components/Aside";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <Header />
    </div>
  );
}
