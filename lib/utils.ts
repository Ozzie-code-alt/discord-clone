import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
//cn function helps us create dynamic classes in Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
