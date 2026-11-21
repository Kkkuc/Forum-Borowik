import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export default function Layout() {
  return (
    <div className="bg-slate-50 dark:bg-slate-500 dark:text-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
