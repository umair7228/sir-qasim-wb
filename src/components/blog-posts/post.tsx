"use client";

import { getPostBySlug } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import DOMPurify from 'dompurify';

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {

  
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  const sanitizedContent = DOMPurify.sanitize(data!.content.html);
  
  if (!data) return notFound();

  return (
    <div className="mt-10">
      <img src={data?.coverImage.url} alt="" className="w-full" />
      <h1 className="text-2xl md:text-3xl xl:text-4xl text-center leading-relaxed font-bold mt-10">
        {data?.title}
      </h1>
      <p className="my-5 text-center text-xl text-gray-400">{data?.subtitle}</p>
      <div className="my-5 flex items-center justify-center text-lg">
        {data?.author.profilePicture && (
          <img
            src={data?.author.profilePicture}
            alt={data?.author.name}
            className="rounded-full h-10 w-10 mr-5"
          />
        )}
        {data?.author.name}
      </div>
      <div
        className="blog-content text-xl leading-loose flex flex-col gap-3 mt-5"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
    </div>
  );
}