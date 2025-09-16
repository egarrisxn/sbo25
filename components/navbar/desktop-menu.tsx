"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/data";

export default function DesktopMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };

  return (
    <div className='hidden md:block'>
      <NavigationMenu className='flex'>
        <NavigationMenuList className='md:gap-6 xl:gap-8'>
          {navLinks.map((link, index) => (
            <NavigationMenuItem
              key={index}
              className='inline-flex w-max cursor-pointer items-center justify-center text-sm font-medium transition-all hover:text-link xl:text-lg'
            >
              {link.external ? (
                <a href={link.href} target='_blank' rel='noreferrer noopener'>
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
    </div>
  );
}
