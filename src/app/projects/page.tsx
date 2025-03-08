import Posts from "@/components/blog-posts/posts";
import Providers from "@/components/providers";
import { getPosts } from "@/lib/requests";
import { PostMetadata } from "@/lib/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (
      lastPage: {
        node: PostMetadata;
        cursor: string;
      }[]
    ) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <main className="!w-[85%] xl:w-[70%] max-w-screen-2xl mt-32 flex flex-col items-center">
        <h2 className="text-center text-3xl font-bold">Projects</h2>
        <hr className="w-[50%] !md:w-[25%] !lg:w-[10%] xl:w-[10%] 2xl:w-[13%] border-t-4 border-[#4183C4] relative -z-20" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
        <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Posts />
            </HydrationBoundary>
        </Providers>
      </div>
    </main>
  );
}