import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar';
import NavMain from './nav-main';
import Bolt from '@/assets/icons/bolt.svg';
import Figma from '@/assets/icons/figma.svg';
import Webflow from '@/assets/icons/webflow.svg';
import Grid from '@/assets/icons/grid.svg';
import Star from '@/assets/icons/star.svg';
import Stars from '@/assets/icons/stars.svg';
import Bookmark from '@/assets/icons/bookmark.svg';

const data = {
  navMain: [
    {
      title: 'PLATFORM',
      url: '#',
      icon: Bolt,
      isActive: true,
      items: [
        {
          title: 'Webflow',
          icon: Webflow,
          url: '#',
        },
        {
          title: 'Figma',
          icon: Figma,
          url: '#',
        },
      ],
    },
    {
      title: 'SECTIONS',
      url: '#',
      icon: Grid,
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
      icon: Stars,
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
      icon: Bookmark,
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
      icon: Star,
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
    <Sidebar {...props} className="top-16">
      <SidebarContent className="bg-[#121212]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
