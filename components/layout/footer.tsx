import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="body-font bg-[#0A874B]">

                <div className="container text-white rounded-lg ">
                    <div className="flex flex-col text-center lg:text-left lg:items-start items-center px-9 py-12 lg:flex-row sm:px-20 sm:py-10 lg:px-20 lg:py-14 ">
                        <Link href={"/"} className="flex flex-1">
                            <Image src="/logo-smf-siluet.png" width={170} height={50} alt="logo" />
                        </Link>
                        <div className=" flex-1 mt-5 lg:mt-0 overflow-hidden">
                            <div className="flex lg:justify-center">
                                <div>
                                    <div className="font-semibold text-lg">Menu</div>
                                    <div className="mt-2 leading-loose">
                                        <ul className="flex flex-col">
                                            <div>
                                                <li><Link href={"/"}>Home</Link></li>
                                            </div>
                                            <div>
                                                <li><Link href={"/"}>Course</Link></li>
                                            </div>
                                            <div>
                                                <li><Link href={"/"}>Video</Link></li>
                                            </div>
                                            <div>
                                                <li><Link href={"/"}>Advice & Critism</Link></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 mt-5 lg:mt-0 lg:justify-center">
                            <div>
                                <div className="lg:ml-5">
                                    <div className="font-semibold text-lg">Location</div>
                                    <div className="mt-2">
                                        <p>Jl. Boulevard Utara, Ruko Foresta Business Loft 6 Unit 20-21, Pagedangan, Tangerang, Banten. 15331</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 mt-5 lg:mt-0 lg:justify-center">
                            <div>
                                <div className="font-semibold text-lg">Call Us</div>
                                <div className="mt-2">
                                    <p>(021) 1234567</p>
                                </div>
                                <div>
                                    <p>cs@smartincome.co.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 py-5 text-black bg-white">
                    <p className="text-center"><span className="text-xl font-semibold">&copy;</span><span className="text-sm"> Copyright 2024. All Right Riversed By Smart Multifinance</span></p>
                </div>
                {/* <div className="container px-10 py-8 mx-auto flex items-center sm:flex-row flex-col" >
                    <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src="/logo-smf-siluet.png" width={100} height={500} alt="logo" />
                    </Link>
                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <div className="text-gray-500 cursor-pointer">
                            <p>Call Us</p>
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </div>
                        <a className="ml-3 text-gray-500 cursor-pointer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </div>
                </div> */}
            </footer>

        </>
    )
};

export default Footer;