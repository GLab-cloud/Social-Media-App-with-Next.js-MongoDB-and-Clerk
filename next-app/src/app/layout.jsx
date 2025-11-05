import localFont from "next/font/local";
import "./globals.css";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import SessionWrapper from "@/components/SessionWrapper";
import CommentModal from "@/components/CommentModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Social Media App",
  description: "Generate a Social Media App by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <SessionWrapper>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ClerkLoading>
              {" "}
              <Loader />
            </ClerkLoading>
            <ClerkLoaded>
              <div className="flex justify-between mx-auto max-w-6xl">
                <div className="sm:inline border-r h-screen sticky top-0 sm:w-[100px]">
                  <LeftSideBar />
                </div>
                <div className="flex w-full">{children}</div>
                <div className="p-3 border-l ">
                  <RightSideBar />
                </div>
              </div>
              <CommentModal />
            </ClerkLoaded>
          </body>
        </html>
      </SessionWrapper>
    </ClerkProvider>
  );
}
