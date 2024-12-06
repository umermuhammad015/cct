"use server"

import prisma from "@/prisma/db";

export default async function FetchFacilityList() {

    const facility_list = await prisma.cct_visits.findMany({
        distinct: ['facility_type'],
        select: {
            facility_type: true,
            
        },
        // orderBy: [
        //     {
        //         user_district: 'asc',
        //     },
        // ]
    });

    // console.log(district_list)

    return (facility_list)
}