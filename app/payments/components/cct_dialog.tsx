// "use client"

// import React, { useEffect, useState } from 'react'

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
import Fetchdialog from './fetchdialog'
import getData from "./fetchVisits"

export default async function Cct_dialog({ cnic }: any) {

    // const [cnic_info, setCnic_Info] = useState<any>([])

    // const data = await Fetchdialog()
    // console.log(data)

    // useEffect(() => {


    //     const fetchData = async () => {
    //         try {
    //             const data = await Fetchdialog()

    //             setCnic_Info(data);
    //         } catch (error) {

    //             console.error('Error fetching league code list:', error);
    //         }
    //     };

    //     fetchData();

    // }, []);


    // const data = await getData(cnic, null, null )
    // console.log("data")
    // console.log(data)

    console.log(cnic)

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="cursor-pointer">{cnic}</div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                    hello
                </DialogContent>

            </Dialog>



        </>
    )
}

