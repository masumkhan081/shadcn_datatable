'use client'

import Image from 'next/image'
import { ColumnDef } from '@tanstack/react-table'
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input'
import { MoreHorizontal, ArrowUpDown, Trash2, FileEdit } from 'lucide-react'
import ActionDropD from './ActionDropD'
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

export const columns = [

  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className=" "
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          className=" h-fit flex justify-center gap-2"
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <ArrowUpDown className='w-4 h-4 ' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const id = row.getValue('id');
      return <p className=' text-center  font-popping text-sm'>{id}</p>
    }
  },
  {
    id: "id_purpose_cell",
    accessorKey: 'attributes.purpose',
    header: ({ column }) => {
      return (
        <Button
          className=" h-fit flex justify-center gap-2 "
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Purpose
          <ArrowUpDown className='w-4 h-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const purpose = row.getValue('id_purpose_cell');
      return <p className=' text-center  font-popping text-sm'>{purpose}</p>
    }
  },
  {
    id: "id_created_at",
    accessorKey: 'attributes.createdAt',
    header: ({ column }) => {
      return (
        <p className='text-center '>
          Created At
          <span className='text-xs ms-0.125'>(dd/mm/yy)</span>
        </p>
      )
    },
    cell: ({ row }) => {
      let date = new Date(row.getValue('id_created_at'));
      date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      return <p className='font-popping text-sm text-center'>{date}</p>
    }
  },
  {
    id: "id_image",
    accessorKey: 'attributes.icon.data.attributes.formats.small',
    header: 'Image',
    cell: ({ row }) => {
      const smallImage = row.getValue('id_image');
      return smallImage?.url ? <Image src={"http://115.127.24.187:1337" + smallImage.url} width={24} height={24} alt={smallImage?.mime} className='w-2.0 h-2.0 ' />
        : <span className='font-popping text-sm'>{smallImage?.mime ? smallImage?.mime : "missing"}</span>
    }
  },
  {
    id: "id_actions",
    header: 'Actions',
    cell: ({ row }) => {
      const rowData = row.original;

      return <ActionDropD data={rowData} />

    },
    enableSorting: false,
    enableHiding: false,
  },
]
