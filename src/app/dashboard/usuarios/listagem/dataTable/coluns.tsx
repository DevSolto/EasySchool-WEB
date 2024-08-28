"use cliente"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"
import { ColumnDef } from "@tanstack/react-table"
import { LuMoreHorizontal } from "react-icons/lu"
import { FaRegCopy, FaRegEdit } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";

export type UserLayout = {
  id: string
  avatarUrl: string | null
  name: string
  cpf: string
  role: string
  createdAt: string
  updatedAt: string
}
export const columns: ColumnDef<UserLayout>[] = [
  {
    accessorKey: "avatarUrl",
    header: () => <div className="text-center">Imagem</div>,
    cell: ({ row }) => {

      return (
        <div className="w-full flex justify-center">
          <Avatar >
            <AvatarImage src={row.getValue("avatarUrl")} />
          </Avatar>
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Nome</div>,
    cell: ({ row }) => {

      return (
        <p className="text-sm">{row.getValue('name')}</p>
      )
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-center">Função</div>,
    cell: ({ row }) => {
      let variant: "teacher" | "admin" | "student" | "default" | "secondary" | "destructive" | "outline" | null | undefined
      let variantLabel = ''
      switch (row.getValue('role')) {
        case 'STUDENT':
          variant = 'student'
          variantLabel = 'Estudante'
          break;
        case 'ADMIN':
          variant = 'admin'
          variantLabel = 'Coordenador'
          break;
        case 'TEACHER':
          variant = 'teacher'
          variantLabel = 'Professor'
          break;
      }
      return (
        <div className="w-full flex items-center justify-center">
          <Badge variant={variant}>
            {variantLabel}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center ">Criado em</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'))
      return (
        <p className="text-sm text-center">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
      )
    },
  },
  {
    accessorKey: "updatedAt",
    header: () => <div className="text-center">Atualizado em</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue('updatedAt'))
      return (
        <p className="text-sm text-center">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { toast } = useToast({})
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <LuMoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem className="flex gap-2"
              onClick={() => {
                const name: string = row.getValue('name')
                navigator.clipboard.writeText(name)
                toast({
                  title: "Nome do usuário copiado",
                  description: name
                })
              }}
            >
              <FaRegCopy />
              Copiar nome
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2">
              <FaRegEdit />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2">
              <TbTrashX />
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]