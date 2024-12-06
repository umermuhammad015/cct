"use server"

import prisma from "@/prisma/db";

export default async function getData(cnic: any ,m_name:any, user_district:any) {

    // console.log(cct);
    // await sleep(2000)


  const cct = await prisma.cct_visits.findMany({
    select: {
      short_form: true,
      m_cnic: true,
      m_name: true,
      visit_date: true,
      created_date: true,
      status: true,
      status_msg: true,
      lmp_date: true,
      visit_no: true,
      facility: true,
      phone_number: true,
      user_district: true,
      formal_name: true,
      visit_counts: true,
      patient_age: true,
      mother_date_of_birth: true,
      date_of_birth: true,
      pregnancy_days: true,
      expected_due_date: true,
      visit_number: true,
      first_visit_date: true,
      last_visit_date: true,
      first_short_form: true,
      last_short_form: true,
      wallet_status: true,
      facility_type: true,
      delivery_date: true,
      flag: true,
      created_time: true,
      

    },
    take: 5,
    where: {
      // age: {
      //   gte: minAge == null ? undefined : Number(minAge),
      //   lte: maxAge == null ? undefined : Number(maxAge)
      // },
      // games: {
      //   gte: minGames == null ? undefined : Number(minGames),
      //   lte: maxGames == null ? undefined : Number(maxGames)
      // },
      m_cnic: cnic,
      m_name: m_name,
      user_district: user_district,
      // position: position,
      // league_start_year: season,





      // OR: [{ home_team: site_user }, { away_team: site_user }],
    },
  });
  
// console.log(cct)



  return (cct)
}