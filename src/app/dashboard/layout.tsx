import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from './_components/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <div className="mx-2 h-fit pt-2.5 text-[#7E7F81]">
          <SidebarTrigger />
        </div>
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
