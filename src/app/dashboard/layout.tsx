import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import { AppSidebar } from './_components/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="h-16">
        <Navbar />
      </div>

      <div className="flex h-[calc(100vh-4rem)] flex-1 overflow-hidden">
        <SidebarProvider className="h-full">
          <AppSidebar />
        </SidebarProvider>

        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
