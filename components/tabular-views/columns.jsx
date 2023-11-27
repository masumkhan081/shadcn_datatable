'use client'

import Image from 'next/image'
import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
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
          className=" h-fit"
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'attributes.purpose',
    // header: 'Purpose'
    header: ({ column }) => {
      return (
        <Button
          className=" h-fit"
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Purpose
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      )
    }
  },
  {
    id: "pokath",
    // http://115.127.24.187:1337/
    accessorKey: 'attributes.icon.data.attributes.formats.small',
    // accessorKey: 'attributes.createdAt',
    header: 'createdAt',
    cell: ({ row }) => {
      const date = row.getValue('pokath');
      return date?.url ? <Image src={"http://115.127.24.187:1337" + date.url} width={24} height={24} alt={date?.mime} className='w-2.0 h-2.0 ' />
        : <span className='font-popping text-sm'>{date?.mime}</span>

    }
  },
  {
    id: "someid",
    accessorKey: 'attributes.publishedAt',
    header: 'Actions',
    cell: ({ row }) => {
      const date = row.getValue('someid');


      return <span className='font-semibold '>{JSON.stringify(date)}</span>
    }
  },
]
