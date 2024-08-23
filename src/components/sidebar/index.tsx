import { RiBook2Line } from "react-icons/ri";
import { Menu } from "./menu";


export function Sidebar() {
  return (
    <aside className="flex flex-col items-start justify-start gap-10 max-w-72 py-10 px-5 bg-white min-h-screen rounded-e-3xl shadow-xl">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-1">
          <div className="p-2 bg-primary rounded-md">
            <RiBook2Line className="text-white" />
          </div>
          EasySchool
        </h1>
      </div>
      <Menu />
    </aside>
  )
}