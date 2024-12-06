'use client'
 import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation'

import { CCT, columns } from './columns';
import { DataTable } from './data-table';
import prisma from '@/prisma/db';
import getData from "./fetchVisits"

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
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';


export default function VisitsTable({ cnic, m_name, user_district }:any) {

    // const searchParams = useSearchParams()
 
    // const cnic = searchParams.get('cnic')

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRecord, setSelectedRecord] = useState(null);

    // const data = await getData(cnic, m_name, user_district)

    // console.log("data")
    // console.log(data)

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await getData(cnic, m_name, user_district); // Replace with your API endpoint
          setData(response);
        } catch (err) {
          setError("Failed to fetch data.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
    <DataTable columns={columns} data={data} />

    {/* <Dialog open={!!selectedRecord} onOpenChange={() => setSelectedRecord(null)}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> */}
    </>
  )
}