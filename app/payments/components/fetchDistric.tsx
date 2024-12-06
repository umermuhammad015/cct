"use client"

import React, { useEffect, useState } from 'react'

// import qs from 'query-string'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import FetchDistrictList from './fetchDistrictList'


export default function FetchDistrict({districts}:any) {

    // console.log("component renderd")

    // const router = useRouter()

    const [district, setDistrict] = useState<any>('');
    const [districtList, setDistrictList] = useState<any>([])



    useEffect(() => {

        // console.log("FetchLeagues() loaded")

        const fetchData = async () => {
            try {
                const all_district = await FetchDistrictList()

                // console.log("league list");
                // console.log(all_league);

                setDistrictList(all_district);
            } catch (error) {

                console.error('Error fetching district list:', error);
            }
        };

        fetchData();

    }, []);




    // useEffect(() => {

    //     console.log("us" + league + " " + season)

    //     const query = {
    //         league_code: league,
    //         season: season,

    //     }
    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true, skipEmptyString: true })

    //     router.push(url)

    // }, [league, season])

    return (
        <>
            <div className="flex gap-2 rounded-lg  mt-1">
                <select
                    name="district"
                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                    value={district}
                    onChange={e => setDistrict(e.target.value)}>
                    {/* <option disabled selected>Leagues</option> */}
                    {districtList.length > 0 && districtList.map((ud: any, i: any) => <option className="text-primary" key={i}>{ud.user_district}</option>)}


                </select>


            </div>
        </>
    )
}

