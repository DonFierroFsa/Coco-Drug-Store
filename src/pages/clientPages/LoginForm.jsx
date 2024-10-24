import CustomButton from "../../components/Buttons/CustomButton";
import { useLogin } from "../../hooks/controllDbHooks/useLogin";

export default function LoginForm() {
  const { handleSubmit, errorMsg, form } = useLogin();

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex w-11/12 flex-col items-center justify-center gap-2 rounded border border-white bg-customBlue px-2 pb-6 pt-4 text-xl duration-200 hover:brightness-125 md:w-1/4"
    >
      <label htmlFor="name" className="font-bold">
        Nombre de Usuario
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="peer w-2/3 appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
        required
        maxLength={32}
        placeholder="DanielMendoza"
        autoComplete="off"
      />

      <label htmlFor="password" className="peer-invalid:hidden">
        Contraseña
      </label>
      <input
        type="password"
        name="password"
        id="password"
        required
        max={32}
        placeholder="************"
        autoComplete="off"
        className="mb-5 w-2/3 appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center required:border-roseRed valid:border-green-400 valid:bg-green-800 peer-invalid:hidden"
      />
      <CustomButton text={"INGRESAR"} type={"submit"} />
      <span className="w-11/12 pt-2">{errorMsg} </span>
    </form>
  );
}
