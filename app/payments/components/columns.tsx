"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Cct_dialog from "./cct_dialog"

export type CCT = {
  short_form: string
  m_name: string
  m_cnic: number
  visit_date: Date
  status: string
  facility: string
  lmp_date: Date
  // visit_no: number
  phone_number: string
  // user_district: string
  // formal_name: string
  // visit_counts: string
  // patient_age: string
  // mother_date_of_birth: Date
  // date_of_birth: Date
  // pregnancy_days: string
  // expected_due_date: Date
  // visit_number: number
  // first_visit_date: Date
  // last_visit_date: Date
  // first_short_form: string
  // last_short_form: string
  // wallet_status: string
  facility_type: string
  // delivery_date: Date
  // flag: string
  // created_date: Date
  // created_time: string
}


// const d = new Date("visit_date");


export const columns: ColumnDef<CCT>[] = [


  {
    accessorKey: "m_cnic",
    header: "CNIC",
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       CNIC
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   )
    // },
    cell: ({ row }) => {
      // console.log(row)
      const cnic: string = row.getValue('m_cnic')
      // const visit_type: string = row.getValue('short_form')
      // const visit_date: Date = row.getValue('visit_date')
      // const m_name: string = row.getValue('m_name')
      // const ph_number:string = row.getValue('phone_number')
      // const distric: string = row.getValue('user district')
      // const formal_name: string = row.getValue('formal_name')
      // const visit_counts: string = row.getValue('visit_counts')
      // const patient_age: string = row.getValue('patient_age')
      // const mother_date_of_birth: string = row.getValue('mother_date_of_birth')
      // const date_of_birth: string = row.getValue('date_of_birth')
      // const pregnancy_days: string = row.getValue('pregnancy_days')
      // const expected_due_date: string = row.getValue('expected_due_date')
      // const visit_number: string = row.getValue('visit_number')
      // const first_visit_date: string = row.getValue('first_visit_date')
      // const last_visit_date: string = row.getValue('last_visit_date')
      // const first_short_form: string = row.getValue('first_short_form')
      // const last_short_form: string = row.getValue('last_short_form ')
      // const wallet_status: string = row.getValue('wallet_status')
      // const facility_type:string = row.getValue('facility_type')
      // const delivery_date: string = row.getValue('delivery_date')
      // const flag: string = row.getValue('flag')
      // const created_date: string = row.getValue('created_date')
      // const created_time: string = row.getValue('created_time')
      // return (<Cct_dialog cnic={cnic} />)
      return (<Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer">{cnic}</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">CNIC</TableCell>
                <TableCell>{cnic}</TableCell>

              </TableRow>
              {/* <TableRow>
                <TableCell className="font-medium">Visit Type</TableCell>
                <TableCell>{visit_type}</TableCell>

              </TableRow> */}
              {/* <TableRow>
                <TableCell className="font-medium">Name</TableCell>
                <TableCell>{m_name}</TableCell>
              </TableRow> */}
              {/* {/* <TableRow>
                <TableCell className="font-medium">Facility Type</TableCell>
                <TableCell>{facility_type}</TableCell>
              </TableRow> */}
              {/* <TableRow>
                <TableCell className="font-medium">Phone Number</TableCell>
                <TableCell>{ph_number}</TableCell>
              </TableRow> */}

            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
        // <>{cnic}</>


      )

    }
  },
  {
    accessorKey: "short_form",
    header: "Visit Type",
  },
  // {
  //   accessorKey: "m_cnic",
  //   header: "CNIC",
  // },
  {
    accessorKey: "m_name",
    header: "Name",
  },
  // {
  //   accessorKey: "facility",
  //   header: "Facility",
  // },
  {
    accessorKey: "visit_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Visit Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('visit_date'))
      const formatted = date.toISOString().slice(0, 10)
      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: "lmp_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lmp Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('lmp_date'))
      const formatted = date.toISOString().slice(0, 10)
      return <div className="font-medium">{formatted}</div>
    }
  },

  {
    accessorKey: "status_msg",
    header: "Acceptance Status",
    cell: ({ row }) => {
      const status_msg: string = row.getValue('status_msg')
      return <Badge variant={status_msg === "Success" ? "secondary" : "destructive"}>{status_msg}</Badge>
    }
  },

  {
    accessorKey: "visit_no",
    header: "Visit No",
  },
]
