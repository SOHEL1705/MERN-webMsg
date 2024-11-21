import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import getData from "../helper/getData"


export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
