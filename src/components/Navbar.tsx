import Link from 'next/link';
//import { SignOutButton } from '@clerk/nextjs';
import { ArrowRight, User } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import Image from 'next/image';
//import { currentUser } from '@clerk/nextjs/server';

const Navbar = async () => {
  // const user = await currentUser();
  const user = '';

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-20 w-full border-b border-[#1D1D1D] bg-[#121212] px-8 transition-all">
      <div className="flex-between h-full">
        <Link href="/" className="z-40 flex font-semibold">
          <Image src="/logo.svg" alt="Paste logo" width={96} height={32} />
        </Link>

        <div className="flex h-full items-center space-x-4">
          {user ? (
            <>
              {/*      <SignOutButton> */}
              <Button size="sm" variant="ghost">
                Sign out
              </Button>
              {/*     </SignOutButton> */}

              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: 'sm',
                  className: 'flex items-center gap-1',
                })}
              >
                Dashboard <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </>
          ) : (
            <>
              {/*  <Link
                href="/sign-in"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                Sign in
              </Link> */}

              {/*  <div className="h-8 w-px bg-[#1D1D1D]" /> */}

              <Link
                href="/sign-in"
                className="flex items-center rounded-lg border border-[#1D1D1D] bg-[#121212] p-2 hover:bg-orange-700"
              >
                <User className="size-6 text-[#FFFFFF]" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
