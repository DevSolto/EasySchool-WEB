import Link from "next/link"
import { MenuItem } from "../sidebar/menu"

type DashboardSidebarProps = {
  itens: MenuItem[]
}

export function DashboardSidebar({ itens }: DashboardSidebarProps) {
  return (
    <nav className="flex flex-col">
      {
        itens.map((item) => {
          return (
            <Link href={item.link} className="hover:font-bold text-sm">
              {item.label}
            </Link>
          )
        })
      }
    </nav>
  )
}