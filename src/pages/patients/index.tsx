import Navigation from "@/components/Navigation";
import Table from "@/components/Table";
import Image from "next/image";
import { useState } from "react";

export default function Patients() {
  const [sideBarVisible, setSideBarVisible] = useState(Boolean);

  return <Navigation children={<Table />} />;
}
