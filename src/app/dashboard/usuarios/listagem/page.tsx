'use client'

import { useEffect, useState } from "react";
import { columns, UserLayout } from "./dataTable/coluns";
import { DataTable } from "./dataTable/dataTable";
import { HeaderList } from "@/components/headerList";
import { getUsers } from "@/api/users";
import { TableFooter } from "@/components/tableFooter";
import { Filter } from "@/api/types/users";

export default function List() {
  const [users, setUsers] = useState<UserLayout[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Filter>({
    admin: false,
    student: false,
    teacher: false
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers([]);
        const response = await getUsers(currentPage * itensPerPage, itensPerPage, search, filter);

        if (response) {
          const formattedUsers = response.data.map((user) => ({
            id: user.id,
            avatarUrl: user.avatarUrl,
            cpf: user.cpf,
            name: user.name,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          }));
          setTotalPages(Math.ceil(response.pagination.total / itensPerPage)); // Calcula o total de páginas
          setUsers(formattedUsers);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentPage, itensPerPage, search, filter]); // Adicione `filter` aqui para que o efeito seja executado quando `filter` mudar

  return (
    <section className="flex-1 flex flex-col gap-5">
      <HeaderList setSearch={setSearch} setFilter={setFilter} filter={filter} />
      <DataTable columns={columns} data={users} />
      <TableFooter
        totalPages={totalPages}
        setItensPerPage={setItensPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
