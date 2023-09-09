import {FC} from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FaRegUser} from "react-icons/fa"

const Header: FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-dark-blue text-amber-50">
            <div className="h-16 lg:max-w-7xl mx-auto flex justify-between items-center px-2">
                <Link href="/" className="text-xl lg:text-4xl font-bold">SQUAD FINDER</Link>
                <Navigation></Navigation>
                <FaRegUser className="text-4xl hidden lg:block"/>
            </div>
        </header>
    )
}
export default Header