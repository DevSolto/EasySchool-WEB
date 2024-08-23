import { Switch } from "../ui/switch";
import { BreadcrumbInternal } from "./breadcrumb";
import { Profile } from "./profile";


export function Header() {
  return (
    <header className="flex  items-center justify-between">
      <BreadcrumbInternal />
      <Profile />
    </header>
  )
}