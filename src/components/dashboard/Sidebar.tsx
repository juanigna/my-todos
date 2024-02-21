"use client"

import Image from "next/image"
import { CiLogout } from "react-icons/ci"
import SidebarItem from "./SidebarItem"
import { IoBasketOutline, IoCalendarClearOutline, IoCheckboxOutline, IoListOutline } from "react-icons/io5"
import { CiBoxList, CiVirus } from "react-icons/ci";
import Link from "next/link"


const menuItems = [
    {
        icon: <IoCalendarClearOutline />,
        title: 'Dashboard',
        path: '/dashboard',
    },
    {
        icon: <IoCheckboxOutline />,
        title: 'Rest Todos',
        path: '/dashboard/rest-todos',
    },
    {
        icon: <IoListOutline />,
        title: 'Server actions',
        path: '/dashboard/server-todos',
    },
    {
        icon: <CiVirus />,
        title: 'Cookies',
        path: '/dashboard/cookies',
    },
    {
        icon: <IoBasketOutline />,
        title: 'Productos',
        path: '/dashboard/products',
    },

]

const Sidebar = () => {
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home" className="flex items-center gap-1">
                        <CiBoxList size={30} />
                        <span className=" ml-2 text-xl font-semibold text-gray-600">Dashboard</span>
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image src="https://avatars.githubusercontent.com/u/21323876?v=4" className="m-auto w-32 rounded-full" alt="tailus logo" width={150} height={150} />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">

                    {
                        menuItems.map((item) => (

                            <SidebarItem key={item.path} {...item} />
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar