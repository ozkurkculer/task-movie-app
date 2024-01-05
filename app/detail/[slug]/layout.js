import DetailService from "@/app/api/detail.service";
import React from "react";

export async function generateMetadata({ params: { slug } }) {
  const detail = await DetailService.getMovieDetail(slug);
  
  return {
    title: `${detail.original_title}`,
    description: `${detail.overview}`,
  };
}

function DetailLayout({ children }) {
  return <section>{children}</section>;
}

export default DetailLayout;
