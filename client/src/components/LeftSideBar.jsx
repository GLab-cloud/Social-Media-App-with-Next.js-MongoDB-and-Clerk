import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
export default function LeftSideBar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200"></FaXTwitter>
      </Link>
    </div>
  );
}
