'use client'
import { FaShoppingBag } from "react-icons/fa";
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from "react";

function Header() {
const [isOpen, setOpen] = useState(false)
  return (
    <header>
      <div className="h-16 p-4 bg-white w-screen flex items-center justify-end gap-4">
        <strong>R$ 0,00</strong>
        <FaShoppingBag />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
