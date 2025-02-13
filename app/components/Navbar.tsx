import Image from "next/image";
import logoImage from "../../assets/images/logosaas.png";
import MenuIcon from "../../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className=" bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md h-12 w-12"></div>
          <Image src={logoImage} alt="Saas logo" className="relative w-12 h-12" />
        </div>

        <div className="border border-white border-opacity-30 h-10 w-10 flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="w-6 h-6 text-white" />
        </div>

        <nav className=" flex gap-6 items-center hidden sm:flex">
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition" > Acceuil</a>
            <a href="#"className="text-opacity-60 text-white hover:text-opacity-100 transition" > Services</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition" > Nouveautés</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition" > Aide</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> Clients</a>
            <button className="bg-white py-2 px-4 rounded-lg"> Get for free</button>
        </nav>
      </div>
    </div>
    </div>
  );
};
