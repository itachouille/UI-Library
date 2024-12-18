import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from './ui/button';
import { currentUser } from '@clerk/nextjs/server';
import { Separator } from '@radix-ui/react-separator';

const Navbar = async () => {
  const user = await currentUser();
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-[#1D1D1D] px-8 backdrop-blur-lg transition-all">
      <nav className="flex-between mx-auto h-full">
        <Link href="/" className="z-40 flex font-semibold">
          <Image src="/logo.svg" alt="Paste logo" width={96} height={32} />
        </Link>

        <div className="flex h-full items-center space-x-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'border border-[#1D1D1D]',
                })}
              >
                Dashboard
              </Link>

              <Separator
                orientation="vertical"
                className="mr-2 h-8"
                decorative
              />

              <UserButton />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'border border-[#1D1D1D]',
                })}
              >
                Sign in
              </Link>

              <div className="h-8 w-px bg-[#1D1D1D]" />

              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'border border-[#1D1D1D]',
                })}
              >
                Sign up
                <ArrowRight className="size-4" />
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
