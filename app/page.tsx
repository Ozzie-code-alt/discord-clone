import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils"


//we have this cn functio in our lib folder that was added by shadcn to which we can use to make conditional statements in out classNames
export default function Home() {
  return (
    <div className="f">
      <p className="text-3xl font-bold text-indigo-500">Hello World</p>
      <Button>Hello World</Button>
    </div>
     
   
  )
}
