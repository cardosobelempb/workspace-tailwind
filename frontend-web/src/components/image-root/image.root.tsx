"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ImgHTMLAttributes, ReactNode } from "react";

type ImageRootProps = ImgHTMLAttributes<HTMLImageElement> & {
  classImage?: string;
  classFigure?: string;
  classCaption?: string;
  src: string | StaticImport;
  isCaption?: boolean;
  captionTitle?: string;
  children?: ReactNode;
};

export const ImageRoot: React.FC<ImageRootProps> = (props) => {
  return (
    <figure {...props} className={`${props.classFigure}`}>
      <Image
        {...props}
        className={props.classImage}
        src={props.src}
        alt={props.alt || ""}
        width={0}
        height={0}
        sizes="100vw"
        priority
      />
      {props.isCaption && (
        <>
          <figcaption {...props} className={props.classCaption}>
            {props.children}
            {props.captionTitle}
          </figcaption>
        </>
      )}
    </figure>
  );
};
