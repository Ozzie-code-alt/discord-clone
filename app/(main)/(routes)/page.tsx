// import { Button } from "@/components/ui/button";
// import {cn} from "@/lib/utils"
import { UserButton } from "@clerk/nextjs/app-beta"

//we have this cn functio in our lib folder that was added by shadcn to which we can use to make conditional statements in out classNames
export default function Home() {
  return (
    <div>
    <UserButton afterSignOutUrl="/"/>
    </div>
     
   
  )
}
