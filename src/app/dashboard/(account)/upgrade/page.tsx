import { db } from '@/db';
import { paymentRouter } from '@/server/routers/payment-router';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const UpgradePage = async () => {
  const auth = await currentUser();

  if (!auth) {
    redirect('/sign-in');
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: auth.id,
    },
  });

  if (!user) {
    redirect('/sign-up');
  }

  return (
    <div className="flex max-w-3xl flex-col gap-8">
      <div>
        <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
          Plan: Free
        </h1>
        <p className="max-w-prose text-sm/6 text-gray-600">
          Thank you for supporting Paste. Find your increased usage limits
          below.
        </p>

        <span
          onClick={() => paymentRouter()}
          className="text-brand-600 inline cursor-pointer underline"
        >
          {' '}
          Ï or upgrade now to increase your limit &rarr;
        </span>
      </div>
    </div>
  );
};

export default UpgradePage;
