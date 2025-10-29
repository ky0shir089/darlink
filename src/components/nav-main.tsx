"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import DynamicIcon from "./dynamic-icon";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    name: string;
    icon: string;
    position: number;
    menus?: {
      id: number;
      menu: {
        name: string;
        url: string;
      };
    }[];
  }[];
}) {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const route = `/${splitPathname[1]}/${splitPathname[2]}`;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items?.map((item) => (
          <Collapsible
            key={item.name}
            asChild
            defaultOpen={true}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.name}>
                  <DynamicIcon name={item.icon} />
                  <span>{item.name}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.menus?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.id}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={subItem.menu.url === route}
                        className={cn(
                          "data-[active=true]:bg-primary/10 data-[active=true]:text-foreground"
                        )}
                      >
                        <Link href={subItem.menu.url}>
                          <span>{subItem.menu.name}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
