'use client'

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

// export type User = {
//   id: string
//   name: string
//   emaiL: string
//   image: string
//   lastSeen: string
// }

export const columns  = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
        className=" h-fit"
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'lastSeen',
    header: 'Last seen',
    cell: ({ row }) => {
      const date = new Date(row.getValue('lastSeen'))
      const formatted = date.toLocaleDateString()
      return <span className='font-semibold '>{formatted}</span>
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='w-8 h-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='w-4 h-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id)}
              >
                Copy user ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )
    }
  }
]
