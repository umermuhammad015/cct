"use server"

import prisma from "@/prisma/db";



export default async function FetchDistrictList() {

    const district_list = await prisma.cct_visits.findMany({
        distinct: ['user_district'],
        select: {
            user_district: true,
            
        },
        orderBy: [
            {
                user_district: 'asc',
            },
        ]
    });

    // console.log(district_list)

    return (district_list)
}