'use client';

import { SignIn } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const intent = searchParams.get('intent');

  return (
    <div className="flex-center w-full flex-1">
      <SignIn />
    </div>
  );
};

export default Page;
