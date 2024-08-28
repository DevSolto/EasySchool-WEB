
import { MenuItem } from "@/components/sidebar/menu";

export const userMenuItems: MenuItem[] = [
  {
    label: "Listar Usuários",
    link: "/dashboard/users/list"
  },
  {
    label: "Criar Usuário",
    link: "/dashboard/users/criar"
  },
  {
    label: "Histórico de Atividades",
    link: "/dashboard/users/historico"
  },
  {
    label: "Métricas e Relatórios",
    link: "/dashboard/users/metricas"
  },
  {
    label: "Importar",
    link: "/dashboard/users/importar"
  },
  {
    label: "Exportar",
    link: "/dashboard/users/exportar"
  },
];
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full  flex-1 flex flex-col">
      <h2 className="text-lg font-bold">Usuários</h2>
      <div className="w-full h-full px-5 pt-5 flex gap-5">
        {children}
      </div>
    </section>
  );
}
