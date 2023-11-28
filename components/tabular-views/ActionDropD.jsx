import React, { useState } from 'react'

import Image from 'next/image'
import { ColumnDef } from '@tanstack/react-table'
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input'
import { MoreHorizontal, ArrowUpDown, Trash2, FileEdit } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'


export default function ActionDropD({ data }) {

   const [selectedDate, setSelectedDate] = useState(new Date(data.attributes.createdAt));
   const [purpose, setPurpose] = useState(new Date(data.attributes.purpose));
   const imageUrl = data.attributes?.icon?.data?.attributes?.formats?.small?.url;

   const [image, setImage] = useState(imageUrl ? "http://115.127.24.187:1337" + imageUrl : "")

   function handleDateSelect(date) {
      setSelectedDate(date)
   }

   return (
      <div className="flex items-center gap-1">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button className="px-0.5 h-fit py-0.125 rounded-md bg-green-600 text-wh"><FileEdit className="w-1.25 h-1.25" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className=" bg-slate-200 mx-auto  md:w-[450px] sm:w-[350px] w-[300px">

               <form className="flex flex-col gap-4 py-1.0 px-0.5">

                  <div className="flex flex-col gap-2">
                     <Label htmlFor="study">Purpose</Label>
                     <Input value={purpose} onChange={(e) => setPurpose(e.target.data)} className="h-fit py-0.125" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <Label htmlFor="study">Created At{data.createdAt}</Label>
                     <DatePicker className='bg-slate-300 text-black h-full py-1 shadow-sm border border-slate-500 rounded-md font-bold text-center w-[120px]' selected={selectedDate} onSelect={handleDateSelect} onChange={(date) => setSelectedDate(date)} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <Label htmlFor="study">Image <span className='text-xs ms-2 text-teal-600'>Click on image to update</span></Label>
                     <Image src={image} width={32} height={32} />
                  </div>
               </form>
            </DropdownMenuContent>
         </DropdownMenu>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button className="px-0.5 h-fit py-0.125 rounded-md   bg-red-700 text-wh"><Trash2 className="w-1.25 h-1.25" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className="flex flex-col items-center gap-4 py-1.5 px-0.5 bg-slate-200 mx-auto  md:w-[450px] sm:w-[350px] w-[300px">

               <DropdownMenuItem className="h-fit py-0.5">Confirm to Delete ?</DropdownMenuItem>

               <div className='flex gap-4'>
                  <Button onClick={() => { }} className="px-0.5 h-fit py-0.125 bg-teal-700 text-slate-100">Close</Button>
                  <Button onClick={() => { }} className="px-0.5 h-fit py-0.125 bg-orange-700 text-slate-100">Confirm</Button>

               </div>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}
