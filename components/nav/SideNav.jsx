"use client";

import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
   Circle,
   ChevronRight,
   CircleDashed,
   List,
   Calendar,
   Home,

} from "lucide-react";
import { useState } from "react";

export default function SideNav() {


   const notify = (msg) => toast(msg);

   const getStartSubOptions = [
      {
         label: "Learning Purpose",
         icon: Circle,
      },
      {
         label: "Learning Level",
         icon: Circle,
      },
      {
         label: "Learning Starting Point",
         icon: Circle,
      },
      {
         label: "Learning Goal",
         icon: Circle,
      },
   ];
   const userSubItem = [
      {
         label: "Option 1",
         icon: CircleDashed,
         href: "/page-1"
      },
      {
         label: "Option 2",
         icon: CircleDashed,
         href: "/page-against-option-1"
      },
      {
         label: "Option 3",
         icon: CircleDashed,
         href: "/page-against-option-1"
      },
   ];

   const [currentView, setCurrentView] = useState("Dashboard");
   const [expanded, setExpanded] = useState({
      isUserExpanded: false,
      isGetStartExpanded: false,
   });

   const activeStyle = (what) =>
      currentView == what ? "bg-slate-200 " : "";

   function setExpansion(toBeExpanded) {
      setExpanded({ ...expanded, [toBeExpanded]: !expanded[toBeExpanded] })
   }

   useEffect(() => {
      if (!currentView == "Dashboard") {
         notify(`1. Current Page: ${currentView}  2.No navigation handled     3. that requires different pages along with nested layout`)
      }
   }, [currentView])

   return (
      <div className="col-span-1 flex flex-col gap-2.0 h-full px-0.5 py-1.5 rounded-md bg-wh">
         <ToastContainer />
         <div className="flex flex-col items-start gap-4 ">
            <Badge className="py-0 text-start ps-2 text-slate-700 font-poppins ">
               Main
            </Badge>

            <Button
               onClick={() => {
                  setCurrentView("Dashboard")
                  notify()
               }}
               className={`${activeStyle(
                  "Dashboard"
               )} w-full h-fit ps-2 rounded-md flex gap-2 justify-start items-center text-lg hover:bg-slate-100 py-0.25`}>
               <Home className="w-1.25 h-1.25" />
               <span>Dashboard</span>
            </Button>
            <Button
               onClick={() => setExpansion("isUserExpanded")}
               className={`w-full h-fit ps-2 rounded-lg flex justify-between text-lg items-center hover:bg-slate-100 py-0.25`}
            >
               <span className="flex items-center gap-2 ">
                  <Home className="w-1.25 h-1.25 inline" />
                  User
               </span>
               <ChevronRight
                  className={
                     expanded.isUserExpanded
                        ? "rotate-90 w-1.25 h-1.25"
                        : "rotate-0 w-1.25 h-1.25"
                  }
               />
            </Button>

            {expanded.isUserExpanded && (
               <ul className="w-full space-y-4 ">
                  {userSubItem.map((option) => {
                     return (
                        <Button
                           onClick={() => setCurrentView(option.label)}
                           ind={Math.floor(Math.random())}
                           className={`${activeStyle(
                              option.label
                           )} w-full h-fit ps-1.25 rounded-lg flex gap-2 justify-start items-center font-poppins hover:bg-slate-100 py-0.25`}
                        >
                           <option.icon className="w-1.0 h-1.0  " />
                           <span>{option.label}</span>
                        </Button>
                     );
                  })}
               </ul>
            )}
         </div>

         <div className="flex flex-col items-start gap-4 ">
            <Badge className="py-0 text-start ps-2 text-slate-700 font-poppins ">
               Element
            </Badge>
            <Button
               onClick={() => setExpansion("isGetStartExpanded")}
               className={`w-full h-fit ps-2 rounded-lg flex justify-between items-center text-lg hover:bg-slate-100 py-0.25`}
            >
               <span className="flex items-center gap-2 ">
                  <Calendar className="w-1.25 h-1.25 inline" />
                  Get Start
               </span>

               <ChevronRight
                  className={
                     expanded.isGetStartExpanded
                        ? "rotate-90 w-1.25 h-1.25"
                        : "rotate-0 w-1.25 h-1.25"
                  }
               />
            </Button>
            {expanded.isGetStartExpanded && (
               <ul className="space-y-2 ">
                  {getStartSubOptions.map((option, ind) => {
                     return (
                        <Button
                           ind={ind}
                           onClick={() => setCurrentView(option.label)}
                           className={`${activeStyle(
                              option.label
                           )} w-full h-fit ps-1.25 rounded-lg flex justify-start gap-0.5 items-center font-poppins hover:bg-slate-100 py-0.25`}
                        >
                           <option.icon className="w-1.0 h-1.0  " />
                           <span>{option.label}</span>
                        </Button>
                     );
                  })}
               </ul>
            )}
            <Button onClick={() => setCurrentView("Customers")}
               className={`${activeStyle(
                  "Customers"
               )} w-full h-fit ps-2 rounded-lg flex gap-2 justify-start items-center text-lg hover:bg-slate-100 py-0.25`}>
               <List className="w-1.25 h-1.25" />
               <span>Customers</span>
            </Button>
         </div>
      </div>


   )
}
