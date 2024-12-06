"use server"

import prisma from "@/prisma/db";

export default async function Fetchdialog() {

  const dialoge = await prisma.cct_visits.findMany({
    select: {
      short_form: true,
      m_cnic: true,
    },
    take:5,
  });
  
// console.log(dialoge)



  return (dialoge)
}