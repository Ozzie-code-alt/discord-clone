"use client";

import { PlayCircle } from "lucide-react";
import GifPicker from 'gif-picker-react'

import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



export const GifGenerator = () => {
  

  return (
    <Popover>
      <PopoverTrigger>
        <PlayCircle
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
        />
        
      </PopoverTrigger>
      <PopoverContent 
        side="right" 
        sideOffset={40}
        className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
      >
        <GifPicker
        tenorApiKey="AIzaSyB-vMPgyD50AvBMGObqaeOe_VPkJETKxIg" onGifClick={(gifValue)=>{
          console.log(gifValue)
        }}
        />
      </PopoverContent>
    </Popover>
  )
}