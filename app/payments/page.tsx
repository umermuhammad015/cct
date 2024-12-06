

import prisma from "@/prisma/db";
import { Input } from "@/components/ui/input"
import { DataTable } from "./components/data-table"
import Form from 'next/form'
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import VisitsTable from "./components/visits_table";
import { Button } from "@/components/ui/button";
import FetchDistrict from "./components/fetchDistric";
import FetchFacility from "./components/fetchFacility";
// import { Button } from "react-day-picker";
// import { Input } from "postcss";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.

// const sleep = ms => new Promise(r => setTimeout(r, ms));
// await new Promise((resolve) => setTimeout(resolve, 3000));
// }



export default async function DemoPage({
  // params,
  searchParams,
}: {
  params: { slug: string };
  // searchParams?: { [key: string]: string | string[] | undefined };
  searchParams?: any;
}) {
  const { cnic, m_name, user_district } = await searchParams;


  // const district = await prisma.cct_visits.findMany({
  //   where: {

  //     user_district: user_district,

  //   },
  // });


  // const random_number = Math.random();


  // console.log(cnic)
  // console.log(random_number)

  return (
    <>



      <div className="container mx-auto py-10 ">
        <div className="">


          <Form action="/payments">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <FetchDistrict />
                <FetchFacility />
              </div>
              <div className="flex gap-2 mb-4">
                <Input
                  name="cnic"
                />
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </Form>



        </div>
        {/* <Form action="/payments">
          <div className="flex gap-2 mb-4">
            <Input
              name="m_name"
            />
            <Button type="submit">Submit</Button>
          </div>
        </Form> */}



        <Suspense key={cnic} fallback={
          <div className="flex flex-col gap-1">
            <div className="space-y-2">
              <Skeleton className="h-10 w-full bg-gray-600" />

            </div>
            <div className="flex flex-col gap-0.5">
              <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
              <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
              <Skeleton className="h-8 w-full bg-gray-300 mt-4 rounded-lg" />
            </div>

          </div>


        }>

          <VisitsTable cnic={cnic} m_name={m_name} district={user_district} />

        </Suspense >
      </div >

    </>
  )
}

