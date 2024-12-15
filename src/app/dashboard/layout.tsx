import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import { AppSidebar } from './_components/sidebar/app-sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <AppSidebar />
      {children}
    </>
  );
};

export default Layout;
