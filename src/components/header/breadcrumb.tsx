"use client";

import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import { SlashIcon } from '@radix-ui/react-icons';

export function BreadcrumbInternal() {
  const pathname = usePathname();

  const pages = pathname.split('/').filter(Boolean);
  let link = "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pages.map((page, index) => {
          link += `/${page}`;
          return (
            <div key={index} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator><SlashIcon /></BreadcrumbSeparator>}
              <BreadcrumbItem>
                <BreadcrumbLink href={link}>
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
