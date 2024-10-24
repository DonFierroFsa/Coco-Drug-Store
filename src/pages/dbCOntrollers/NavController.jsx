import { Link, Outlet } from "react-router-dom";
import { DbProvider } from "../../context/dbContext";
import { useSession } from "../../hooks/controllDbHooks/useSession";
import CustomButton from "../../components/Buttons/CustomButton";

export default function NavController() {
  const { handleCloseSession, sessionMsg, userName } = useSession();

  return (
    <>
      <nav className="relative top-0 flex w-full flex-col gap-5 bg-richBlack px-10 pt-5 font-bold">
        <ul className="mx-5 flex w-full justify-center gap-10">
          <li className="text-xl">
            Bienvenido <b> {userName.toUpperCase()}</b>
          </li>

          <li onClick={handleCloseSession}>
            <CustomButton text={"Cerrar Sesión"} />
          </li>
        </ul>
        <ul className="flex w-full justify-around rounded-md bg-customLightBlue py-1">
          <li className="rounded-lg bg-customBlue px-2 py-1 hover:brightness-150">
            <Link to="userList">Usuarios</Link>
          </li>
          <li className="rounded-lg bg-customBlue px-2 py-1 hover:brightness-150">
            <Link to="stock">Stock</Link>
          </li>
          <li className="rounded-lg bg-customBlue px-2 py-1 hover:brightness-150">
            <Link to="/dbControllers">Cajas Registradoras</Link>
          </li>
          <li className="rounded-lg bg-customBlue px-2 py-1 hover:brightness-150">
            <Link to="operations">Venta</Link>
          </li>
          <li className="rounded-lg bg-customBlue px-2 py-1 hover:brightness-150">
            <Link to="casinoData">Casino</Link>
          </li>
        </ul>
      </nav>
      {sessionMsg && (
        <aside className="fixed inset-0 grid place-content-center backdrop-blur-sm">
          <h2 className="animate-custom-ping rounded-md border border-darkYellow bg-roseRed bg-opacity-15 px-10 py-5 text-4xl font-bold">
            {sessionMsg}
          </h2>
        </aside>
      )}
      <DbProvider>
        <Outlet />
      </DbProvider>
    </>
  );
}
