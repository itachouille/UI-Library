import { db } from '@/db';
import { createCheckoutSession } from '@/lib/stripe';
import { currentUser } from '@clerk/nextjs/server';

export const paymentRouter = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const session = await createCheckoutSession({
    userEmail: user.emailAddresses[0].emailAddress,
    userId: user.id,
  });

  const getUserPlan = await db.user.update({
    where: {
      clerkUserId: user.id,
    },
    data: {
      plan: 'PRO',
    },
  });

  return;
};
