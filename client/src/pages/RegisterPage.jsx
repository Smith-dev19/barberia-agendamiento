import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/customers");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-secundario)] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-[#292929] border border-[var(--color-terceario)]/40 rounded-2xl p-8 shadow-2xl"
      >
        {/* TÍTULO */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-principal)]">
            Crear cuenta
          </h1>

          <p className="mt-2 text-sm text-[var(--color-principal)]/60">
            Ingresa los datos del nuevo Barbero.
          </p>
        </div>

        {/* BACKEND ERRORS */}
        {RegisterErrors?.length > 0 && (
          <div className="mb-6 space-y-2">
            {RegisterErrors.map((error, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-[var(--color-terceario)]/40 bg-[var(--color-terceario)]/10 px-4 py-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-terceario)] text-white text-xs font-bold">
                  !
                </span>

                <p className="text-sm font-semibold text-[var(--color-principal)]">
                  {error}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* USERNAME */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-[var(--color-principal)] bg-transparent border-0 border-b-2 border-[var(--color-principal)]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-terceario)] peer"
          />
          {errors.username && (
            <p className="text-[var(--color-terceario)] font-semibold">
              El usuario es requerido
            </p>
          )}

          <label className="absolute text-sm text-[var(--color-principal)]/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[var(--color-terceario)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Usuario
          </label>
        </div>

        {/* NOMBRE */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-[var(--color-principal)] bg-transparent border-0 border-b-2 border-[var(--color-principal)]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-terceario)] peer"
          />
          {errors.name && (
            <p className="text-[var(--color-terceario)] font-semibold">
              El nombre es requerido
            </p>
          )}

          <label className="absolute text-sm text-[var(--color-principal)]/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[var(--color-terceario)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nombre
          </label>
        </div>

        {/* APELLIDO */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("lastName", { required: true })}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-[var(--color-principal)] bg-transparent border-0 border-b-2 border-[var(--color-principal)]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-terceario)] peer"
          />
          {errors.lastName && (
            <p className="text-[var(--color-terceario)] font-semibold">
              El apellido es requerido
            </p>
          )}

          <label className="absolute text-sm text-[var(--color-principal)]/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[var(--color-terceario)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Apellido
          </label>
        </div>

        {/* TELÉFONO */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-[var(--color-principal)] bg-transparent border-0 border-b-2 border-[var(--color-principal)]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-terceario)] peer"
          />
          {errors.lastName && (
            <p className="text-[var(--color-terceario)] font-semibold">
              El teléfono es requerido
            </p>
          )}

          <label className="absolute text-sm text-[var(--color-principal)]/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[var(--color-terceario)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Teléfono
          </label>
        </div>

        {/* PASSWORD */}
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-[var(--color-principal)] bg-transparent border-0 border-b-2 border-[var(--color-principal)]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-terceario)] peer"
          />
          {errors.lastName && (
            <p className="text-[var(--color-terceario)] font-semibold">
              La contraseña es requerida
            </p>
          )}

          <label className="absolute text-sm text-[var(--color-principal)]/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[var(--color-terceario)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Contraseña
          </label>
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full text-white bg-[var(--color-terceario)] hover:brightness-110 focus:ring-4 focus:outline-none focus:ring-[var(--color-terceario)]/30 font-medium rounded-lg text-sm px-5 py-3 text-center transition duration-200"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
