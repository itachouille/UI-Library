import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Webflow from '../../assets/icons/webflow.svg';
import Figma from '../../assets/icons/figma.svg';
import { Eye } from 'lucide-react';

const page = async () => {
  const auth = await currentUser();

  if (!auth) redirect('/sign-in');

  return (
    <main className="flex h-full flex-col bg-[#111111] p-8">
      <div className="flex h-96 w-full justify-between">
        <div className="flex w-1/2 max-w-xl flex-col justify-between">
          <div>
            <h2 className="text-2xl font-medium text-[#FFFFFF]">
              Hero Section
            </h2>
            <p className="mt-6 text-[#7E7F81]">
              Detailed header section with heading and graphic/image centred and
              feature cards on either side.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex gap-6">
              <button className="flex w-1/2 items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1B1B1B] py-2 hover:bg-gray-400">
                <Image
                  src={Webflow}
                  width={20}
                  height={20}
                  alt="webflow icon"
                />
                <span>Copy to Webflow</span>
              </button>
              <button className="flex w-1/2 items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1B1B1B] py-2 hover:bg-gray-400">
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
        <div className="w-1/2 max-w-xl rounded-xl border border-[#292929] bg-[#1B1B1B]" />
      </div>
      <Separator className="my-10" />
      <div>
        <h2>Other sections you might like</h2>
      </div>
    </main>
  );
};

export default page;
