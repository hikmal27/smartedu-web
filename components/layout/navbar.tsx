import Link from "next/link";
import Image from "next/image";
import BaseButton from "../commons/base-button";

const Navbar = () => {
  return (
<header className="body-font">
  <div className="container mx-auto flex flex-wrap px-20 py-10 flex-col md:flex-row items-center" >
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      <Image src="/logo-smf.png" width={100} height={50} alt="logo" />
    </a>
    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
        <nav >
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/courses">Kursus</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/faq">Kritik & Saran</Link>
        </nav>
        <BaseButton label="Login" />
    </div>
  </div>
</header>
  )
};

export default Navbar;