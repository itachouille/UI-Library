'use client';

import { client } from '@/lib/client';
import Card from '@/components/Card';
import { Plan } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BarChart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

const UpgradePageContent = ({ plan }: { plan: Plan }) => {
  const router = useRouter();

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post();
      return await res.json();
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url);
    },
  });

  const { data: usageData } = useQuery({
    queryKey: ['usage'],
    queryFn: async () => {
      const res = await client.project.getUsage.$get();
      return await res.json();
    },
  });

  return (
    <div className="flex max-w-3xl flex-col gap-8">
      <div>
        <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
          {plan === 'PRO' ? 'Plan: Pro' : 'Plan: Free'}
        </h1>
        <p className="max-w-prose text-sm/6 text-gray-600">
          {plan === 'PRO'
            ? 'Thank you for supporting PingPanda. Find your increased usage limits below.'
            : 'Get access to more events, categories and premium support.'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="border-brand-700 border-2">
          <div className="flex-between flex-row space-y-0 pb-2">
            <p className="text-sm/6 font-medium">Total Events</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {usageData?.eventsUsed || 0} of{' '}
              {usageData?.eventsLimit.toLocaleString() || 100}
            </p>
            <p className="text-xs/5 text-muted-foreground">
              Events this period
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex-between flex-row space-y-0 pb-2">
            <p className="text-sm/6 font-medium">Event Categories</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {usageData?.categoriesUsed || 0} of{' '}
              {usageData?.categoriesLimit.toLocaleString() || 10}
            </p>
            <p className="text-xs/5 text-muted-foreground">Active categories</p>
          </div>
        </Card>
      </div>

      <p className="text-sm text-gray-500">
        Usage will reset{' '}
        {usageData?.resetDate ? (
          format(usageData.resetDate, 'MMM d, yyyy')
        ) : (
          <span className="h-4 w-8 animate-pulse bg-gray-200"></span>
        )}
        {plan !== 'PRO' ? (
          <span
            onClick={() => createCheckoutSession()}
            className="text-brand-600 inline cursor-pointer underline"
          >
            {' '}
            or upgrade now to increase your limit &rarr;
          </span>
        ) : null}
      </p>
    </div>
  );
};

export default UpgradePageContent;
