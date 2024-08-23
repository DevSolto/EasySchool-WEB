import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { IconType } from "react-icons/lib";
import { LuAlarmCheck, LuBarChartBig, LuBookCopy, LuDoorClosed, LuFile, LuMegaphone, LuUsers2 } from "react-icons/lu";

type menuItem = {
  label: string;
  link: string;
  icon: IconType;
};
const menuItens: menuItem[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: LuBarChartBig
  },
  {
    label: "Usuários",
    link: "/dashboard/users",
    icon: LuUsers2
  },
  {
    label: "Turmas",
    link: "/dashboard/classes",
    icon: LuDoorClosed
  },
  {
    label: "Avisos",
    link: "/dashboard/notices",
    icon: LuMegaphone
  },
  {
    label: "Disciplinas",
    link: "/dashboard/subjects",
    icon: LuBookCopy
  },
  {
    label: "Notas",
    link: "/dashboard/grade",
    icon: LuFile
  },
  {
    label: "Horários",
    link: "/dashboard/schedules",
    icon: LuAlarmCheck
  },
]

export function Menu() {
  return (
    <NavigationMenu className="items-start justify-start">
      <NavigationMenuList className="flex-col items-start justify-start gap-3">
        {
          menuItens.map((item) => {

            return (
              <NavigationMenuItem key={item.label} className="ml-1">
                <Link href={item.link} legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base flex gap-2`}>

                    <item.icon />
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )

          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}