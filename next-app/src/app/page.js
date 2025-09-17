import Input1 from "@/components/Input1";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-w-xl mx-auto border-r border-l">
      {" "}
      <div className="py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 ">
        <h2 className="text-lg sm:text-xl font-bold"> Home Social Media App</h2>
      </div>
      <Input1 />
    </div>
  );
}
