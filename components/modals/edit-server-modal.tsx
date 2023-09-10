"use client"
import {Dialog, DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle} from "@/components/ui/dialog"
import {Form, FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {zodResolver} from '@hookform/resolvers/zod'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { FileUpload } from "../file-upload"
import {useRouter} from "next/navigation"
import axios from "axios"
import { useModal } from "@/hooks/use-modal-store"

const formSchema = z.object({
    name: z.string().min(1,{
        message:"Server name is required."
    }),
    imageUrl: z.string().min(1,{
        message:"Server image is required"
    })
})
export const EditServerModal = ()=>{
    const {isOpen, onClose, type, data} = useModal()
    const router = useRouter()

    const isModalOpen = isOpen && type === 'editServer'
    const {server}= data
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageUrl:"",
        }
    });

    useEffect(()=>{
        if(server){
            form.setValue("name", server.name)
            form.setValue("imageUrl", server.imageUrl)
        }
    },[server, form])

    // disable loading state soo we can disable inputs when loading
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(values: z.infer<typeof formSchema>) =>{
        try {
            await axios.patch(`/api/servers/${server?.id}`, values)

            form.reset()
            router.refresh()
            onClose()
        } catch (error) {
            console.log(error)
        }
    }

const handleClose = ()=>{
    form.reset(); 
    onClose();
}
    return(
   <Dialog open={isModalOpen} onOpenChange={handleClose}>
    <DialogContent className ="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6"> 
            <DialogTitle className="text-2xl text-center font-bold">
                Customize your server
                </DialogTitle>
                <DialogDescription className="text-center text-zinc-500">
                    Give your Server a personality with a name and an image. You can always change it later
                </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-8 px-6">
                            <div className="flex items-center justify-center text-center">
                                <FormField control={form.control} name="imageUrl" render={({field})=>(<FormItem> <FormControl><FileUpload endpoint="serverImage" value ={field.value} onChange={field.onChange}/></FormControl></FormItem>)}/>
                            </div>

                            <FormField 
                            control={form.control}
                            name="name"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel className="uppercase text-cs font-bold text-zinc-500 dark:text-secondary/70">
                                        Server Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={isLoading} className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0" 
                                        placeholder="Enter Server name" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                                    <Button variant={"primary"} disabled={isLoading}>
                                        Save
                                    </Button>
                        </DialogFooter>
                    </form>
                </Form>
    </DialogContent>
   </Dialog> 
    )
 
}