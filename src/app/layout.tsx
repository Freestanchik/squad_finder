import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Squad finder',
    description: 'Web application for searching new teammates for multiplayer games',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen mx-auto">
        <Header></Header>
        <main className="flex flex-col flex-grow lg:max-w-7xl w-full  mx-auto">
            {children}
        </main>
        <Footer></Footer>
        </body>
        </html>
    )
}
