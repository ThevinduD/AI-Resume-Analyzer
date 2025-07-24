import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  } else if (bytes >= 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return bytes + " bytes";
  }
}

export const generateUUID = () => crypto.randomUUID()

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}