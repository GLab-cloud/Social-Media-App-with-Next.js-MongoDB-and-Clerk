import Input from "@/components/Input";
import Feed from "@/components/Feed";

export default async function Home() {
  let data = null;
  try {
    const result = await fetch(process.env.URL + "/api/post/all", {
      method: "POST",
      cache: "no-store",
    }); // fetch by server side - process.env.URL+...
    data = await result.json();
    console.log("posts data: ", data);
  } catch (error) {
    console.log("Error fetching posts", error);
  }
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
      <Feed data={data} />
    </div>
  );
}
