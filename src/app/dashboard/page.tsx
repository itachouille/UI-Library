import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Webflow from '../../assets/icons/webflow.svg';
import Figma from '../../assets/icons/figma.svg';
import { Eye } from 'lucide-react';
import CardsList from './_components/CardsList';

const page = async () => {
  const auth = await currentUser();

  if (!auth) redirect('/sign-in');

  return (
    <main className="flex h-full flex-col bg-[#111111] p-8">
      <div className="flex w-full flex-col justify-around gap-12 lg:h-96 lg:flex-row">
        <div className="flex max-w-2xl flex-col justify-between lg:w-1/2">
          <div>
            <h2 className="text-2xl font-medium text-[#FFFFFF]">
              Hero Section <span>Pro</span>
            </h2>
            <p className="mt-6 text-[#7E7F81]">
              Detailed header section with heading and graphic/image centred and
              feature cards on either side.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1B1B1B] py-2 hover:bg-gray-400 sm:w-1/2">
                <Image
                  src={Webflow}
                  width={20}
                  height={20}
                  alt="webflow icon"
                />
                <span>Copy to Webflow</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1B1B1B] py-2 hover:bg-gray-400 sm:w-1/2">
                <Image src={Figma} width={20} height={20} alt="figma icon" />
                <span>Copy to Figma</span>
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1B1B1B] py-2 hover:bg-gray-400">
              <Eye className="size-5" />
              <span>Live Preview</span>
            </button>
          </div>
        </div>
        <div className="aspect-[4/3] w-full max-w-2xl rounded-xl border border-[#292929] bg-[#1B1B1B]" />
      </div>
      <Separator className="my-10 bg-[#1B1B1B]" />
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-[#FFFFFF]">
          Other sections you might like
        </h2>
        <button className="rounded-md border border-[#292929] bg-[#1B1B1B] p-2 text-[#7E7F81]">
          Browse All
        </button>
      </div>

      <CardsList />
    </main>
  );
};

export default page;
