'use client'

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Checkbox } from "../ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { FiPlusCircle } from "react-icons/fi";
import { Filter } from "@/api/types/users";

type HeaderListProps = {
  setSearch: (search: string) => void;
  setFilter: (filter: Filter) => void;
  filter: Filter;
}

export function HeaderList({ setSearch, filter, setFilter }: HeaderListProps) {
  const handleCheckboxChange = (role: keyof Filter) => (checked: boolean | "indeterminate") => {
    setFilter({
      ...filter,
      [role]: checked === true,
    });
  };

  return (
    <header className="flex justify-between">
      <div className="flex gap-5 justify-between w-full">
        <div className="flex items-center gap-5">
          <Input
            className="max-w-60 bg-white"
            placeholder="Digite o nome do usuário..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Popover>
            <PopoverTrigger className="bg-white rounded-lg flex h-full items-center px-5 gap-2 shadow">
              <FiPlusCircle />
              Função
            </PopoverTrigger>
            <PopoverContent align="start">
              <Label htmlFor="teacher" className="flex items-center gap-2">
                <Checkbox
                  id="teacher"
                  checked={filter.teacher}
                  onCheckedChange={handleCheckboxChange('teacher')}
                />
                Professores
              </Label>
              <Label htmlFor="admin" className="flex items-center gap-2">
                <Checkbox
                  id="admin"
                  checked={filter.admin}
                  onCheckedChange={handleCheckboxChange('admin')}
                />
                Coordenadores
              </Label>
              <Label htmlFor="students" className="flex items-center gap-2">
                <Checkbox
                  id="students"
                  checked={filter.student}
                  onCheckedChange={handleCheckboxChange('student')}
                />
                Estudantes
              </Label>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Button className="flex gap-2">
        <FiPlusCircle />
        Adicionar
      </Button>
    </header>
  )
}
