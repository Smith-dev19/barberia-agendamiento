import React from "react";
import { NavLink } from "react-router";

function NavBarAdmin() {

  const links = [
    { name: "Perfil", path: "/profile" },
    { name: "Clientes", path: "/customers" },
    { name: "Agenda", path: "/agenda" },
    { name: "Empleados", path: "/employees" },
    { name: "Nuevo empleado", path: "/register" },
  ];

  return (
    <nav className="w-full bg-[#292929] border-b border-[var(--color-principal)]/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="text-xl font-bold text-[var(--color-principal)]">
            Barbería
          </div>

          {/* LINKS */}
          <div className="flex items-center gap-2">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                    isActive
                      ? "bg-[var(--color-terceario)] text-white"
                      : "text-[var(--color-principal)]/70 hover:text-[var(--color-principal)] hover:bg-[var(--color-terceario)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default NavBarAdmin;