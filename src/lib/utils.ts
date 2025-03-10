import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { UTApi } from "uploadthing/server";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDuration = (duration: number) => {
  const seconds = Math.floor((duration % 60000) / 1000);
  const minutes = Math.floor(duration / 60000);

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const snakeCaseToTitle = (str: string) => {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export const deleteFilesFromUploadThing = async (
  thumbnailKey: string | null,
  previewKey: string | null
) => {
  const utApi = new UTApi();

  const deleteUploads = [];

  if (thumbnailKey) deleteUploads.push(utApi.deleteFiles(thumbnailKey));
  if (previewKey) deleteUploads.push(utApi.deleteFiles(previewKey));

  await Promise.all(deleteUploads);
};
