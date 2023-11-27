"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   ArrowLeft,
   Search,
   UserRound,
   Settings,

   LogOut,

} from "lucide-react";
import React, { } from "react";

export default function TopNav() {
   const numberOfNotification = 3;
   return (
      <div className="flex justify-between items-center py-0.5 px-2.0 bg-wh  border rounded-lg">
         <Badge className="flex gap-2 px-0 border">
            <ArrowLeft className="w-1.25 h-1.25" />
            <span>Home</span>
            <span>Setting</span>
            <span>Help</span>
         </Badge>

         <Badge className="text-lg font-semibold tracking-wide">Nakhlah</Badge>

         <div className="flex items-center gap-1.0">
            <Search className="" />
            <span className="bg-slate-200 rounded-full h-1.75 w-1.75 text-orange-700 font-semibold text-center pt-0.125 ">
               {numberOfNotification}
            </span>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-8 h-8 p-0">
                     <span className="sr-only">Open User Menu</span>
                     <UserRound />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent
                  align="end"
                  className="bg-slate-100 rounded-md py-2.5 px-1.0 flex flex-col gap-4"
               >
                  <DropdownMenuItem className="p-0 shadow-sm shadow-slate-300">
                     <Button className="flex gap-2 justify-start h-fit py-0.25 w-full hover:bg-slate-200">
                        <Settings className="w-1.25 h-1.25" />
                        Settings
                     </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0 text-orange-800 shadow-sm shadow-slate-300">
                     <Button className="flex gap-2 justify-start h-fit py-0.25 w-full hover:text-orange-800 hover:bg-slate-200 ">
                        <LogOut className="w-1.25 h-1.25" />
                        Log Out
                     </Button>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   )
}
