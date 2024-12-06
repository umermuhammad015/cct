
import { ModeToggle } from '@/components/ThemeToggleButton'
import React from 'react'


export default function Navbar() {

    return (
        <>
            <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">

                {/* <!-- Logo text or image --> */}
                <div className="flex items-center justify-between mb-4 md:mb-0">
                    <h1 className="leading-none text-2xl text-grey-darkest">
                        <a className="no-underline text-grey-darkest hover:text-black" href="#">
                            Site Title
                        </a>
                    </h1>

                    <a className="text-black hover:text-orange md:hidden" href="#">
                        <i className="fa fa-2x fa-bars"></i>
                    </a>
                </div>
                {/* <!-- END Logo text or image --> */}

                {/* <!-- Search field --> */}
                <form className="mb-4 w-full md:mb-0 md:w-1/4">
                    <div className="flex">
                        <label className="hidden" htmlFor="search-form">Search</label>
                        <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
                        <button className="">Submit</button>
                    </div>
                </form>
                {/* <!-- END Search field --> */}

                {/* <!-- Global navigation --> */}
                <nav>
                    <ul className="list-reset md:flex md:items-center">
                        <li className="md:ml-4">
                            <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                                Products
                            </a>
                        </li>
                        <li className="md:ml-4">
                            <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                                About
                            </a>
                        </li>
                        <li className="md:ml-4">
                            <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                                Contact
                            </a>
                        </li>

                    </ul>
                    <ModeToggle />
                </nav>

                {/* <!-- END Global navigation --> */}



            </header>
            {/* <TableDemo /> */}
        </>
    )
}
