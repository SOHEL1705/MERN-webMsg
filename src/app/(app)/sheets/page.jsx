import { DataTable } from '@/app/payments/data-table'
import React from 'react'
import { Payment, columns } from "./columns"
import getData from '@/app/helper/getData'
export default async function Sheets() {
  const data = await getData()
  return (
    <>
    <DataTable columns={columns} data={data}/>
    </>
  )
}
