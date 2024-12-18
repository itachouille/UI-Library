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
    <div className="h-screen overflow-hidden">
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <div className="flex items-start justify-center p-2">
          <SidebarTrigger className="text-[#7E7F81]" />
        </div>
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
