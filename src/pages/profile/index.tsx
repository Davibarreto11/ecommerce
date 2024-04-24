import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

function UpdateProfile() {
  return (
    <div className="overflow-auto">
      <div className="p-6 max-w-screen-2xl mx-auto space-y-2">
        <div className="h-[100%] flex flex-col items-center justify-center space-y-8">
          <Image
            className="h-[200px] w-[200px] rounded-full"
            src={require("@/assets/user/user-01.png")}
            alt="Picture Profile"
          />

          <Input className="w-1/3" placeholder="User User" />
          <Input className="w-1/3" placeholder="user@gmail.com" />

          <Input className="w-1/3" placeholder="Senha atual" />
          <Input className="w-1/3" placeholder="Senha nova" />
          <Input className="w-1/3" placeholder="Senha nova" />

          <Button className="w-1/3">Atualizar</Button>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const [sideBarVisible, setSideBarVisible] = useState(Boolean);

  return <Navigation children={<UpdateProfile />} />;
}
