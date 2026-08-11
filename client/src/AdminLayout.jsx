import NavBarAdmin from "./components/NavBarAdmin"
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-secundario)]">

      <NavBarAdmin />

      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;