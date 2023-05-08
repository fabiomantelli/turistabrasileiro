"use client";
import { FaShoppingBag } from "react-icons/fa";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="absolute h-16 md:h-24 p-4 w-[100%] bg-white flex items-center justify-between gap-4 md:bg-black md:bg-opacity-20">
        <div>
          <ul className="hidden text-white gap-4 md:flex ml-10">
            <li>EVERTHING</li>
            <li>GASTRONOMIA</li>
            <li>HOSPEDAGEM</li>
            <li>RECEPTIVOS</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 md:text-white">
          <strong>R$ 0,00</strong>
          <FaShoppingBag />
          <Hamburger />
        </div>
      </div>
    </header>
  );
}

export default Header;
