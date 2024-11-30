import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge tailwind classes without style conflicts using `twMerge(clsx(...))`. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
