    "use client"

    import { useState } from "react";

    export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex flex-col w-full shadow-lg shadow-slate-00/50 sticky top-0 z-50 bg-white">
        {/* Bagian Navbar Hijau */}
        <div className="hidden sm:flex justify-center items-center gap-14 md:gap-7 xl:gap-10 bg-[#23856D] w-full h-[3.5rem]">
            <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-6 justify-center items-center w-[10rem] md:w-[14rem] lg:w-[20rem] xl:w-[24rem]">
            <div className="flex flex-row gap-1 items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
                </svg>
                <p className="text-xs md:text-xs font-normal font-Montserrat">
                (225) 555-0118
                </p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
                </svg>
                <p className="text-xs md:text-xs font-normal font-Montserrat">
                budiarie@kominfogege.com
                </p>
            </div>
            </div>
            <div className="text-center text-xs md:text-xs w-[10rem] font-bold font-Montserrat md:w-[14rem] lg:w-[18rem] xl:w-[24rem]">
            Follow Us and get a chance to win 69% off
            </div>
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-1 w-[10rem] md:w-[14rem] lg:w-[18rem] xl:w-[24rem]">
            <p className="text-xs md:text-xs font-semibold font-Montserrat">
                Follow Us :
            </p>
            <svg className="sm:h-5 sm:w-5 md:h-4 md:w-4 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            <svg className="sm:h-4 sm:w-4 md:h-4 md:w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            <svg className="sm:h-4 sm:w-4 md:h-4 md:w-4 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
            <svg className="sm:h-4 sm:w-4 md:h-4 md:w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </div>
        </div>

        {/* Bagian Navbar Putih */}
        <div className="bg-white w-full h-[4rem] flex items-center justify-between sm:justify-evenly px-6 sm:px-4 sm:gap-1">
            <h1 className="font-Montserrat text-2xl font-semibold text-black">
            Bandage
            </h1>
            {/* Menu Hamburger untuk layar kecil */}
            <button
            className="sm:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
            </svg>
            </button>

            {/* Menu Dropdown */}
            <div
            className={`${
                menuOpen ? "menu-open" : "menu-close"
            } sm:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10 transition-all duration-300 ease-in-out`}
            >
            <ul className="flex flex-col font-Montserrat items-center py-4 space-y-4">
                <li className="text-black font-semibold">Home</li>
                <li className="text-black font-semibold">Shop +</li>
                <li className="text-black font-semibold">About</li>
                <li className="text-black font-semibold">Blog</li>
                <li className="text-black font-semibold">Contact</li>
                <li className="text-black font-semibold">Pages</li>
            </ul>
            </div>

            {/* Menu untuk layar besar */}
            <div className="hidden sm:flex flex-row gap-3 md:gap-4">
                <a href="#" className="text-slate-500 hover:text-slate-800 text-xs lg:text-sm font-Montserrat font-bold">Home</a>
                <a href="#" className="text-slate-500 hover:text-slate-800 text-xs lg:text-sm font-Montserrat font-bold">Shop +</a>
                <a href="#" className="text-slate-500 hover:text-slate-800 text-xs lg:text-sm font-Montserrat font-bold">About</a>
                <a href="#" className="text-slate-500 hover:text-slate-800 text-xs lg:text-sm font-Montserrat font-bold">Blog</a>
                <a href="#" className="text-slate-500 hover:text-slate-800 text-xs lg:text-sm font-Montserrat font-bold">Contact</a>
                <a href="#" className="text-slate-500 hover:text-slate-800 text-xs lg:text-sm font-Montserrat font-bold">Pages</a>
            </div>
            <div className="hidden sm:flex flex-row gap-2 md:gap-4">
                    <div className="flex flex-row gap-2">
                        <svg className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        <div className="flex flex-row gap-1">
                            <a href="" className="text-xs lg:text-sm font-Montserrat text-blue-400 font-bold hover:text-blue-800">Login</a>
                            <p className="text-xs lg:text-sm font-Montserrat text-blue-400 font-bold">/</p>
                            <a href="" className="text-xs lg:text-sm font-Montserrat text-blue-400 font-bold hover:text-blue-800">Register</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 lg:gap-5">
                        <svg className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400 hover:text-blue-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                        <svg className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400 hover:text-blue-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
                        <svg className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400 hover:text-blue-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </div>
                </div>
            </div>
        </nav>
    );
    }
