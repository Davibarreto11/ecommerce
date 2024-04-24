import TopDashboard from "./TopDashboard";
import Total from "./Total";
import Profit from "./Profit";
import Analytics from "./Analytics";
import RegionsLabel from "./RegionsLabel";
import TopChannel from "./TopChannel";
import Chat from "./Chat";

export default function Dashboard() {
  return (
    <main className="overflow-auto">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
          <TopDashboard />
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
          <Total />

          <Profit />
          <Analytics />
          <RegionsLabel />
          <TopChannel />
          <Chat />
        </div>
      </div>
    </main>
  );
}
