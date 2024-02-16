import { usePathname } from "next/navigation";

interface Props {
    icon?: React.ReactNode;
    title: string;
    path: string;
}
const SidebarItem = ({ icon, title, path }: Props) => {

    const pathName = usePathname()


    return (
        <li>
            <a href={path} className={`relative px-4 py-3 flex items-center space-x-4  bg-gradient-to-r group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${path === pathName ? ' text-white bg-gradient-to-r from-sky-600 to-cyan-400 rounded-xl ' : ' rounded-md  '}`}>
                {icon}
                <span className={` ${path === pathName ? ' -mr-1 font-medium ' : ' group-hover:text-white '} `}>{title}</span>

            </a>
        </li>
    )
}

export default SidebarItem