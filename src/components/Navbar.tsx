import Link from 'next/link';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { ArrowRight, User } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import Image from 'next/image';
import { currentUser } from '@clerk/nextjs/server';

const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-20 w-full border-b border-[#1D1D1D] px-8 backdrop-blur-lg transition-all">
      <div className="flex-between h-full">
        <Link href="/" className="z-40 flex font-semibold">
          <Image src="/logo.svg" alt="Paste logo" width={96} height={32} />
        </Link>

        <div className="flex h-full items-center space-x-4">
          {user ? (
            <>
              {/* <SignOutButton>
                <Button
                  size="sm"
                  variant="ghost"
                  className="border border-[#1D1D1D]"
                >
                  Sign out
                </Button>
              </SignOutButton>

              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'border border-[#1D1D1D]',
                })}
              >
                Dashboard <ArrowRight className="size-4" />
              </Link> */}
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
      </div>
    </nav>
  );
};

export default Navbar;
