import Post from "@/components/blog-posts/post";
import Providers from "@/components/providers";
import { getPostBySlug } from "@/lib/requests";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const data = await getPostBySlug(params.slug);
//   return {
//     title: data.title,
//   };
// }

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", params.slug],
    queryFn: () => getPostBySlug(params.slug),
  });

  return (
    <div className="!w-[85%] xl:w-[70%] max-w-screen-2xl px-3 xl:p-0 mx-auto">
      <Providers>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Post slug={params.slug} />
        </HydrationBoundary>
      </Providers>
    </div>
  );
}