"use client";

import { getPosts } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import BlogCard from "../blog-posts/blog-card";

const HomePage = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["home-posts"],
    queryFn: () => getPosts({ first: 3 }),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-[85%] 2xl:w-[70%] max-w-screen-2xl container overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((post) => (
          <BlogCard key={post.cursor} post={post.node} />
        ))}
      </div>

      <div className="w-full flex justify-center my-5">
        <Button variant="outline" className="hover:bg-black hover:text-white" onClick={() => router.push("/blogs")}>
          See More
        </Button>
      </div>
    </div>
  );
};

export default HomePage;