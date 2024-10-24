import { Link, Outlet } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import CustomButton from "../Buttons/CustomButton";
import {
  IconCloseOutline,
  IconHamburgerMenu,
  IconSpinner,
  IconWhatsapp,
} from "../Icons";
import { useState } from "react";

export default function () {
  const { scrollUp } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group relative top-0 flex w-full place-content-center">
        <nav
          className={`group fixed top-0 z-10 mb-5 flex w-full flex-col rounded-md py-5 text-center sm:bg-transparent md:justify-evenly ${scrollUp && "opacity-5"} `}
        >
          <button
            className={`ml-10 flex w-9 flex-col items-center justify-center text-5xl md:hidden`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <IconHamburgerMenu className="fast-fade-in 2 rounded-full bg-customLightBlue" />
            ) : (
              <IconCloseOutline className="fast-fade-in rounded-full bg-darkYellow text-customLightBlue" />
            )}
          </button>
          <ul
            className={`fast-fade-in peer flex w-full flex-wrap justify-between gap-20 py-4 text-darkYellow duration-500 hover:opacity-100 group-hover:opacity-100 group-hover:brightness-125 md:mt-2 md:flex-row md:bg-transparent md:px-10 ${isOpen && "hidden"} ${!isOpen && "flex-col justify-between gap-4 bg-customBlue"}`}
          >
            <li>
              <a href="#Header">
                <CustomButton text={"Inicio"} />
              </a>
            </li>
            <li>
              <Link to="/">
                <CustomButton text={"Productos"} />
              </Link>
            </li>
            <li className="hidden w-1/3 md:block"></li>
            <li>
              <Link to="/casino">
                <CustomButton text={"Casino"} />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <CustomButton text={"Login"} />
              </Link>
            </li>
          </ul>
        </nav>
        <figure
          className="mt-20 max-h-fit scroll-mt-96 duration-1000 group-hover:brightness-200"
          id="Header"
        >
          <img
            className="mx-auto w-56 rounded-3xl"
            src="img\Nuevo Imagen de mapa de bits.bmp "
            alt="LOGO COCO DRUG-STORE"
          />
          <figcaption className="my-4 flex flex-col gap-2 font-semibold">
            <span>Comestibles , Golosinas, Bebidas</span>
            <span className="relative mx-auto my-8 w-fit text-2xl">
              <p className="animate-pulse"> 24 hs</p>
              <IconSpinner className="absolute -inset-7 mx-auto animate-custom-spin text-8xl" />
            </span>
          </figcaption>
        </figure>
      </div>
      <aside className="shadow-md lg: lg: lg: fixed bottom-8 right-4 cursor-pointer rounded-full bg-green-400 p-1 shadow-slate-600 duration-200 hover:scale-125 hover:bg-green-500 hover:opacity-100 lg:bottom-40 lg:right-32 lg:bg-slate-200 lg:opacity-60">
        <a
          href="https://wa.me/543704094513/?text=Hola%20estoy%20interesado%20en%20pedir%20picadas"
          target="_blank"
        >
          <IconWhatsapp className="lg: text-4xl text-slate-100 hover:text-slate-100 lg:text-5xl lg:text-green-400" />
        </a>
      </aside>
      <Outlet />
    </>
  );
}
