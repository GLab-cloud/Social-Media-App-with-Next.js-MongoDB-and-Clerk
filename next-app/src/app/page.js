import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-w-xl mx-auto w-full">
      {" "}
      <div className="py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 ">
        <h2 className="text-lg sm:text-xl font-bold text-center">
          {" "}
          Home - Social Media App
        </h2>
      </div>
      <Input className="w-full" />
    </div>
  );
}
