import { Switch } from "../ui/switch";
import { BreadcrumbInternal } from "../profile/breadcrumb";
import { Profile } from "../profile/profile";


export function Header() {
  return (
    <header className="flex  items-center justify-between">
      <BreadcrumbInternal />
      <Profile />
    </header>
  )
}