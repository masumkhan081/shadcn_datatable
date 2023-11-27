"use client";

import { DataTable } from '../components/tabular-views/DataTable'
import { payments, columns } from "../components/tabular-views/columns"


async function getUsers() {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

export default async function Page() {

  const data = await getUsers()

  return (
    <div className="col-span-4 h-full bg-wh px-2.0 py-1.5 rounded-md">

      <DataTable columns={columns} data={data} />

    </div>
  );
}
