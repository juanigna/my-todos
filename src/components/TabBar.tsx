"use client"

import { useState } from "react";
import { setCookie } from "cookies-next"

interface Props {
    currentTab?: number;
    tabOptions?: number[];

}

const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3, 4] }: Props) => {
    const [selected, setSelected] = useState(currentTab)

    const onTabSelected = (tab: number) => {
        setSelected(tab)
        setCookie('selectedTab', tab.toString())
    }

    return (
        <div className={`grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>

            {
                tabOptions.map((option) => (
                    <div key={option}>
                        <input
                            checked={selected === option}
                            onChange={() => { }}
                            type="radio"
                            id={option.toString()}
                            className="peer hidden" />
                        <label
                            onClick={() => onTabSelected(option)}
                            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                            {option}
                        </label>
                    </div>
                ))
            }

        </div>
    )
}

export default TabBar