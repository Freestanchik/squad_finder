import {FC} from "react";
import Link from "next/link";

const Navigation: FC = () => {
    {
        return (
            <nav>
                <ul className="flex">
                    <li>
                        <Link href="/" className="hover:text-red-600 p-5">Game sessions</Link>
                    </li>
                    <li>
                        <Link href="/gamesInfo" className="hover:text-red-600 p-5">games</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation