'use client'

import React, { useEffect, useState } from 'react'
import { Plus } from "lucide-react";
import { columns } from './columns'
import {
  ColumnDef,
  flexRender,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

async function getUsers() {
  const res = await fetch(
    'http://115.127.24.187:1337/api/learning-purposes?pagination[page]=2&pagination[pageSize]=5&sort=purpose:asc&populate=icon'
  )
  const data = await res.json()
  return data;
}
export function DataTable() {

  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // onRowSelectionChange: setRowSelection,
  })

  useEffect(() => {
    const fetch = async () => {
      const apiData = await getUsers();
      setData(apiData.data);
    };
    fetch();
  }, [data])

  return (
    <div className='flex flex-col gap-2'>


      <div className='flex items-center justify-between'>

        <Input
          placeholder='Filter purpose ...'
          value={(table.getColumn('id_purpose_cell')?.getFilterValue()) ?? ''}
          onChange={event =>
            table.getColumn('id_purpose_cell')?.setFilterValue(event.target.value)
          }
          className='h-fit min-w-10.6 max-w-[300px]  py-0.25'
        />

        <Button className="flex items-center gap-2 py-0.25 h-fit" variant="outline">
          <Plus className='w-1.25 h-1.25' />
          Add New
        </Button>  </div>

      {/* Table */}
      <div className='border rounded-md'>
        <Table >
          <TableHeader >
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} >
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}  >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-between py-4 space-x-2'>

        <div className="  text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='flex gap-3'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>

      </div>

      {JSON.stringify(data[0])}
    </div>
  )
}
