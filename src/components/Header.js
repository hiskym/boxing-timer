import { useState } from "react";
import logo from "../assets/images/logo.svg"

import {Link} from "react-scroll";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  }

  return (
    <header className="border-b-2 border-black border-solid sticky shadow-md top-0 bg-orange-900">
            <div className="flex justify-between items-center my-0 mx-auto max-w-5xl py-5 px-12">
                <Link
                    to="app"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="flex text-white items-center no-underline hover:text-slate-100 hover:scale-105 active:opacity-80 active:scale-90 gap-2"
                >
                    <img src={logo} alt="logo" className="w-12 rounded-xl" />
                    <span className="text-3xl">Boxing Timer</span>
                </Link>
                <button className="md:hidden text-white text-3xl w-8 h-8 relative" id="hamburger-button" onClick={toggleMenu}>
                    <div className={`${menuOpen ? "bg-transparent w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:translate-y-0 before:rotate-45 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-0 after:-rotate-45 after:transition-all after:duration-500" : "bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"} `}></div>
                </button>
                <nav className="gap-5 hidden md:flex">
                    <Link
                        to="timer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-white no-underline hover:text-slate-100 hover:scale-105 active:opacity-80 active:scale-90"
                    >
                        Timer
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-white no-underline hover:text-slate-100 hover:scale-105 active:opacity-80 active:scale-90"
                    >
                        About
                    </Link>
                </nav>
            </div>
            <div id="mobile-menu" className={`${menuOpen ? "flex" : "hidden"} gap-5 flex flex-col md:hidden bg-amber-600 animate-open-menu origin-top text-center p-5`} >
                <Link
                    to="timer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className="text-white no-underline hover:text-slate-100 hover:scale-105 active:opacity-80 active:scale-90 text-2xl"
                    onClick={toggleMenu}
                >
                    Timer
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className="text-white no-underline hover:text-slate-100 hover:scale-105 active:opacity-80 active:scale-90 text-2xl"
                    onClick={toggleMenu}
                >
                    About
                </Link>
            </div>
        </header>
  )
}
