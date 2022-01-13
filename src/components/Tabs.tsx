import Link from "next/link";
import React from "react";


type ITabsProps = {
    index: number;
};

const inactiveClasses = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
const activeClasses = 'border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';

const Tabs = (props: ITabsProps) => (
    <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <Link href="/who-i-am">
                <span className={props.index === 0 ? activeClasses : inactiveClasses}>Who I am</span>
            </Link>

            <Link href="/what-i-do">
                <span className={props.index === 1 ? activeClasses : inactiveClasses}>What I do</span>
            </Link>

            <Link href="/what-i-did">
                <span className={props.index === 2 ? activeClasses : inactiveClasses}>What I did</span>
            </Link>
        </nav>
    </div>

)


export default Tabs;