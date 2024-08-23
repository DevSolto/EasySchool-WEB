"use client";

import { AccordionContent } from "@radix-ui/react-accordion";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";

type User = {
  id: string;
  avatarUrl: string;
  name: string;
  cpf: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
};

export function Profile() {
  const [user, setUser] = useState<User>({
    id: 'cm04gmd0g0000spvqt6w1j73m',
    avatarUrl: "https://github.com/DevSolto.png",
    name: 'Santiago Siqueira Souto',
    cpf: '334.100.022-43',
    role: 'STUDENT',
    password: '$2b$10$3I.FI5/mopZHXnnmOYXaEOghguVoQjybRujFDs5KMWmfR4AOYxp0q',
    salt: '$2b$10$3I.FI5/mopZHXnnmOYXaEO',
    createdAt: new Date('2024-08-21T23:03:11.968Z'),
    updatedAt: new Date('2024-08-21T23:03:11.968Z'),
  });

  const name = user.name.split(" ");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="flex gap-3 items-center">
      <p className="text-sm flex flex-col items-end">
        {`${name[0]} ${name[1]}`}
        <span className="text-muted-foreground text-xs capitalize">
          {user.role.toLowerCase()}
        </span>
      </p>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt="Profile image" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80 flex flex-col items-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.avatarUrl} alt="Profile image" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <p className="text-center">
            Bem-vindo, <br /> <span className="font-bold">{user.name}</span>
          </p>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>
                Alterar informações
              </AccordionTrigger>
              <AccordionContent>
                <form action="" method="post" className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={user.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      name="cpf"
                      type="text"
                      value={user.cpf}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="confirmPassword">Repita a senha</Label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" />
                  </div>
                  <Button type="submit">Editar</Button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>
    </div>
  );
}
