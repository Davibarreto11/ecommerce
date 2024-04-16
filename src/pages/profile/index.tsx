import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

function UpdateProfile() {
  return (
    <div className="overflow-auto">
      <div className="p-6 max-w-screen-2xl mx-auto space-y-2">
        <div className="h-[100%] flex flex-col items-center">
          <Image
            className="h-[200px] w-[200px] rounded-full"
            src={require("@/assets/user/user-01.png")}
            alt="Picture Profile"
          />

          <Input className="w-full " />
          <Input className="w-full " />

          <Input className="w-full " />
          <Input className="w-full " />
          <Input className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const [sideBarVisible, setSideBarVisible] = useState(Boolean);

  return <Navigation children={<UpdateProfile />} />;
}
