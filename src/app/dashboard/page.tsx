import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const page = async () => {
  const auth = await currentUser();

  if (!auth) redirect('/sign-in');

  return <div>page</div>;
};

export default page;
