import Link from "next/link";
import BaseButton from "../ui/web/BaseButton";

const Navbar = () => {
  return (
<header className="text-white body-font bg-[#1C1E53] ">
  <div className="container mx-auto flex flex-wrap px-12 py-5 flex-col md:flex-row items-center" >
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl font-semibold">EDUFREE</span>
    </a>
    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <nav >
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/">HOME</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/tentang-kami">TENTANG KAMI</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/kursus">KURSUS</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/faq">FAQ</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/blog">BLOG</Link>
        </nav>
        <BaseButton />
    </div>
  </div>
</header>
  )
};

export default Navbar;