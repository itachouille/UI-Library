import { ChevronDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarProvider,
} from "./ui/sidebar"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

const DashboardSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar className="p-8">
        <Collapsible defaultOpen className="group/platform">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="gap-2">
                <Image
                  src="/icons/bolt.svg"
                  alt="platform icon"
                  width={16}
                  height={16}
                />
                PLATFORM
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/platform:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <div className="flex flex-col p-4 gap-6 border-l border-l-stroke">
                <Link href="/" className="flex gap-2">
                  <Image
                    src="/icons/webflow.svg"
                    alt="Webflow logo"
                    width={22}
                    height={22}
                  />
                  Webflow
                </Link>
                <Link href="/" className="flex gap-2">
                  <Image
                    src="/icons/figma.svg"
                    alt="Figma logo"
                    width={22}
                    height={22}
                  />
                  Figma
                </Link>
              </div>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Image src="/divider.svg" alt="divider" width={216} height={1} />

        <Collapsible defaultOpen className="group/sections">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="gap-2">
                <Image
                  src="/icons/grid.svg"
                  alt="sections icon"
                  width={16}
                  height={16}
                />
                SECTIONS
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/sections:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <div className="flex flex-col p-4 gap-6 border-l border-l-stroke">
                <Link href="/">Hero</Link>
                <Link href="/">How it Works</Link>
                <Link href="/">Services</Link>
                <Link href="/">Testimonials</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">FAQ</Link>
                <Link href="/">Footer</Link>
              </div>
              <Link href="/">Show more +</Link>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Image src="/divider.svg" alt="divider" width={216} height={1} />

        <Collapsible className="group/style">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="gap-2">
                <Image
                  src="/icons/stars.svg"
                  alt="style icon"
                  width={16}
                  height={16}
                />
                STYLE
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/style:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="flex flex-col">
              <Link href="/">Style 1</Link>
              <Link href="/">Style 2</Link>
              <Link href="/">Style 3</Link>
              <Link href="/">Style 4</Link>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Image src="/divider.svg" alt="divider" width={216} height={1} />

        <Collapsible className="group/saved">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="gap-2">
                <Image
                  src="/icons/bookmark.svg"
                  alt="saved icon"
                  width={16}
                  height={16}
                />
                SAVED
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/saved:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="flex flex-col">
              <Link href="/">Draft 1</Link>
              <Link href="/">Draft 2</Link>
              <Link href="/">Draft 3</Link>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Image src="/divider.svg" alt="divider" width={216} height={1} />

        <Collapsible className="group/plan">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="gap-2">
                <Image
                  src="/icons/star.svg"
                  alt="plan icon"
                  width={16}
                  height={16}
                />
                PLAN
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/plan:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="flex flex-col">
              <Link
                href="/pricing"
                className={buttonVariants({
                  size: "sm",
                  className:
                    "flex items-center overflow-hidden border border-cardStroke bg-primaryGray",
                })}
              >
                <img src="buttonDetails_left.svg" alt="button decoration" />
                Upgrade to
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-primaryOrange to-secondaryOrange">
                  Pro
                </span>
                <img src="/buttonDetails.svg" alt="button decoration" />
              </Link>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </Sidebar>
    </SidebarProvider>
  )
}

export default DashboardSidebar
