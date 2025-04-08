import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
} from "@/app/assets/images/portifolio";
import { ImageRoot } from "@/components/image-root/image.root";
import { ContentRoot } from "@/components/layout-root/grid/content.root";
import React from "react";

export default function ContentGallery() {
  return (
    <ContentRoot
      type="section"
      className="p-6 bg-secondary md:p-16 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 "
    >
      <ImageRoot
        classFigure="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 relative after after:w-full after:h-full after:bg-accent/60 after:top-0 after:left-0 after:rounded after:z-10 after:backdrop-blur-sm after:scale-x-0 after:transition hover:after:scale-x-100 after:origin-left hover:after:origin-right group after:duration-300 cursor-pointer"
        classCaption="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-text transition z-[11] scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-right duration-300"
        src={gallery1.src}
        isCaption
        captionTitle="Gallery Image"
      />
      <ImageRoot
        classFigure="relative after after:w-full after:h-full after:bg-accent/60 after:top-0 after:left-0 after:rounded after:z-10 after:backdrop-blur-sm after:scale-x-0 after:transition hover:after:scale-x-100 after:origin-left hover:after:origin-right group after:duration-300 cursor-pointer"
        classCaption="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-text transition z-[11] scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-right duration-300"
        src={gallery2.src}
        isCaption
        captionTitle="Gallery Image"
      />
      <ImageRoot
        classFigure="relative after after:w-full after:h-full after:bg-accent/60 after:top-0 after:left-0 after:rounded after:z-10 after:backdrop-blur-sm after:scale-x-0 after:transition hover:after:scale-x-100 after:origin-left hover:after:origin-right group after:duration-300 cursor-pointer"
        classCaption="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-text transition z-[11] scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-right duration-300"
        src={gallery3.src}
        isCaption
        captionTitle="Gallery Image"
      />
      <ImageRoot
        classFigure="relative after after:w-full after:h-full after:bg-accent/60 after:top-0 after:left-0 after:rounded after:z-10 after:backdrop-blur-sm after:scale-x-0 after:transition hover:after:scale-x-100 after:origin-left hover:after:origin-right group after:duration-300 cursor-pointer"
        classCaption="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-text transition z-[11] scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-right duration-300"
        src={gallery4.src}
        isCaption
        captionTitle="Gallery Image"
      />
      <ImageRoot
        classFigure="relative after after:w-full after:h-full after:bg-accent/60 after:top-0 after:left-0 after:rounded after:z-10 after:backdrop-blur-sm after:scale-x-0 after:transition hover:after:scale-x-100 after:origin-left hover:after:origin-right group after:duration-300 cursor-pointer"
        classCaption="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-text transition z-[11] scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-right duration-300"
        src={gallery5.src}
        isCaption
        captionTitle="Gallery Image"
      />
    </ContentRoot>
  );
}
