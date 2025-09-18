"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownToggle } from "@/components/navbar/dropdown-toggle";
import { navLinks } from "@/lib/data";

export function MobileMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };

  return (
    <div className='md:hidden'>
      <Popover>
        <PopoverTrigger asChild>
          <DropdownToggle />
        </PopoverTrigger>
        <PopoverContent align='start' className='w-32'>
          <NavigationMenu className='max-w-none'>
            <NavigationMenuList className='flex flex-col items-start justify-start gap-1 border'>
              {navLinks.map((link, index) => (
                <NavigationMenuItem
                  key={index}
                  className='w-full cursor-pointer border text-sm font-medium transition-all hover:text-link'
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={pathname === link.href ? activeStyle : {}}
                    >
                      {link.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>
      </Popover>
    </div>
  );
}
