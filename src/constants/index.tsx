import Bolt from '@/assets/icons/bolt.svg';
import Figma from '@/assets/icons/figma.svg';
import Webflow from '@/assets/icons/webflow.svg';
import Grid from '@/assets/icons/grid.svg';
import Star from '@/assets/icons/star.svg';
import Stars from '@/assets/icons/stars.svg';
import Bookmark from '@/assets/icons/bookmark.svg';

export interface SidebarItem {
  href: string;
  icon?: string;
  text: string;
}

export interface SidebarCategory {
  category: string;
  isActive?: boolean;
  icon?: string;
  items: SidebarItem[];
}

export interface CarditemProps {
  title: string;
  date: string;
  marked?: boolean;
}

export const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    category: 'PLATFORM',
    isActive: true,
    icon: Bolt,
    items: [
      {
        text: 'Webflow',
        icon: Webflow,
        href: '/dashboard',
      },
      {
        text: 'Figma',
        icon: Figma,
        href: '/dashboard',
      },
    ],
  },
  {
    category: 'SECTIONS',
    isActive: true,
    icon: Grid,
    items: [
      {
        text: 'Hero',
        href: '/dashboard/hero',
      },
      {
        text: 'How it Works',
        href: '/dashboard/how-it-works',
      },
      {
        text: 'Services',
        href: '/dashboard/services',
      },
      {
        text: 'Testimonials',
        href: '/dashboard/testimonials',
      },
      {
        text: 'Pricing',
        href: '/dashboard/pricing',
      },
      {
        text: 'FAQ',
        href: '/dashboard/faq',
      },
      {
        text: 'Footer',
        href: '/dashboard/footer',
      },
      {
        text: 'Show more +',
        href: '/dashboard/more',
      },
    ],
  },
  {
    category: 'STYLE',
    icon: Stars,
    items: [
      {
        text: 'Style 1',
        href: '/style',
      },
      {
        text: 'Style 2',
        href: '/style',
      },
      {
        text: 'Style 3',
        href: '/style',
      },
    ],
  },
  {
    category: 'SAVED',
    icon: Bookmark,
    items: [
      {
        text: 'Draft 1',
        href: '/draft',
      },
      {
        text: 'Draft 2',
        href: '/draft',
      },
    ],
  },
  {
    category: 'PLAN',
    icon: Star,
    items: [
      {
        text: 'FREE',
        href: '/dashboard',
      },
      {
        text: 'PRO',
        href: '/dashboard',
      },
    ],
  },
];

export const CARD_DATA: CarditemProps[] = [
  { title: 'HERO SECTION', date: '28th of Feb 2024', marked: true },
  { title: 'HERO SECTION', date: '15th of Mar 2024' },
  { title: 'FOOTER SECTION', date: '10th of Apr 2024' },
  { title: 'PRICING SECTION', date: '5th of May 2024' },
  { title: 'CONTACT SECTION', date: '25th of May 2024' },
  { title: 'ABOUT SECTION', date: '15th of Jun 2024' },
];
