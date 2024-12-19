import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { SIDEBAR_ITEMS } from '@/constants';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import RightSVG from '@/assets/upgradeBtnRight.svg';
import LeftSVG from '@/assets/upgradeBtnLeft.svg';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="top-16 border-none">
      <SidebarContent className="bg-[#0B0B0B]">
        <SidebarGroup>
          <SidebarMenu className="flex text-[#7E7F81]">
            {SIDEBAR_ITEMS.map(({ category, icon: Icon, items }) => (
              <Collapsible key={category} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {Icon && <Icon />}
                      <span>{category}</span>
                      <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-[#1D1D1D]">
                      {items.map(item => (
                        <SidebarMenuSubItem key={item.text}>
                          <SidebarMenuSubButton
                            /*  className={`flex items-center ${
                              item.isActive ? 'text-white' : 'text-[#7E7F81]'
                            }`} */
                            asChild
                          >
                            <a
                              href={item.href}
                              className="flex items-center py-4"
                            >
                              {/*   {item.isActive && (
                                <div className="mr-2 size-2 rounded-full bg-gradient-to-t from-[#FF2900] to-[#FF7A00]" />
                              )} */}
                              {/*  {item.icon && (
                                <span className="mr-2">{item.icon}</span>
                              )} */}
                              {item.icon && (
                                <Image src={item.icon} alt="item icon" />
                              )}

                              <span>{item.text}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                  <Separator
                    className="mx-auto my-2 w-[85%] bg-[#1D1D1D]"
                    decorative
                  />
                </SidebarMenuItem>
              </Collapsible>
            ))}
            <Link
              href="/dasboard/upgrade"
              className="flex items-center justify-center overflow-hidden rounded-lg border border-[#292929] bg-[#1B1B1B] py-2 font-medium text-[#FAFAFA] hover:opacity-75"
            >
              <Image
                src={LeftSVG}
                width={50}
                height={20}
                alt="btn decoration"
                className="-translate-x-6"
              />
              Upgrade to
              <span className="ml-1.5 bg-gradient-to-t from-[#FF2900] to-[#FF7A00] bg-clip-text text-transparent">
                Pro
              </span>
              <Image
                src={RightSVG}
                width={50}
                height={20}
                alt="btn decoration"
                className="translate-x-6"
              />
            </Link>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
