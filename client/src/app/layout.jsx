import localFont from "next/font/local";
import "./globals.css";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from "@/components/Loader";

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
              <div className="sm:inline sm:w-3xl border-r h-screen sticky top-0">
                <LeftSideBar />
              </div>
              <div className="w-2xl flex">{children}</div>
              <div className="lg:flex-col p-3 h-screen border-l lg:flex sm:flex">
                <RightSideBar />
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
