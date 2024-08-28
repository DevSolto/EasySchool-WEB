"use client";

import { AccordionContent } from "@radix-ui/react-accordion";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";
import { Feedback } from "./feedback";

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



  return (
    <div className="flex gap-3 items-center">
      <p className="text-sm flex flex-col items-end">
        {`${name[0]} ${name[1] ? name[1] : ""}`}
        <span className="text-muted-foreground text-xs capitalize">
          {user.role.toLowerCase()}
        </span>
      </p>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
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
          <Feedback />
        </PopoverContent>
      </Popover>
    </div>
  );
}
