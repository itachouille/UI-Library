import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarRail,
} from '@/components/ui/sidebar';
import NavMain from './nav-main';

const data = {
  navMain: [
    {
      title: 'PLATFORM',
      url: '#',
      icon: '/icons/bolt.svg',
      isActive: true,
      items: [
        {
          title: 'Webflow',
          icon: '/icons/webflow.svg',
          url: '#',
        },
        {
          title: 'Figma',
          icon: '/icons/figma.svg',
          url: '#',
        },
      ],
    },
    {
      title: 'SECTIONS',
      url: '#',
      icon: '/icons/grid.svg',
      isActive: true,
      items: [
        {
          title: 'Hero',
          url: '#',
        },
        {
          title: 'How it Works',
          url: '#',
        },
        {
          title: 'Services',
          url: '#',
        },
        {
          title: 'Testimonials',
          url: '#',
        },
        {
          title: 'Pricing',
          url: '#',
        },
        {
          title: 'FAQ',
          url: '#',
        },
        {
          title: 'Footer',
          url: '#',
        },
        {
          title: 'Show more +',
          url: '#',
        },
      ],
    },
    {
      title: 'STYLE',
      url: '#',
      icon: '/icons/stars.svg',
      items: [
        {
          title: 'Style 1',
          url: '#',
        },
        {
          title: 'Style 2',
          url: '#',
        },
        {
          title: 'Style 3',
          url: '#',
        },
      ],
    },
    {
      title: 'SAVED',
      url: '#',
      icon: '/icons/bookmark.svg',
      items: [
        {
          title: 'Draft 1',
          url: '#',
        },
        {
          title: 'Draft 2',
          url: '#',
        },
      ],
    },
    {
      title: 'PLAN',
      url: '#',
      icon: '/icons/star.svg',
      items: [
        {
          title: 'FREE',
          url: '#',
        },
        {
          title: 'PRO',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider>
      <Sidebar {...props} className="top-20">
        <SidebarContent className="bg-mainBlack text-primaryGray border-cardStroke border-r">
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}
