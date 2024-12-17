import { ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';

export default function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: string;
    isActive?: boolean;
    items?: {
      title: string;
      icon?: string;
      url: string;
      isActive?: boolean; // Ajout pour les sous-items actifs
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className="text-[#7E7F81]">
        {items.map(item => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {/* Menu principal */}
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} className="">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={25}
                      height={25}
                    />
                  )}
                  <span>{item.title}</span>
                  <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              {/* Sous-items uniquement */}
              <CollapsibleContent>
                <SidebarMenuSub className="border-[#1D1D1D] py-4">
                  {item.items?.map(subItem => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        className={`flex items-center ${
                          subItem.isActive ? 'text-white' : 'text-[#7E7F81]'
                        }`}
                        asChild
                      >
                        <a href={subItem.url} className="flex items-center">
                          {subItem.isActive && (
                            <div className="mr-2 size-2 rounded-full bg-gradient-to-t from-[#FF2900] to-[#FF7A00]" />
                          )}
                          {subItem.icon && (
                            <Image
                              src={subItem.icon}
                              alt={subItem.title}
                              width={25}
                              height={25}
                            />
                          )}
                          <span>{subItem.title}</span>
                        </a>
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
