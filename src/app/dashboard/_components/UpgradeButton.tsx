import Image from 'next/image';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import RightSVG from '@/assets/upgradeBtnRight.svg';
import LeftSVG from '@/assets/upgradeBtnLeft.svg';
import { cn } from '@/lib/utils';

interface UpgradeButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const UpgradeButton = ({
  className,
  children,
  href,
  ...props
}: UpgradeButtonProps) => {
  return (
    <Link
      href={href ?? '#'}
      className={cn(
        'flex items-center justify-center overflow-hidden rounded-lg border border-[#292929] bg-[#1B1B1B] py-2 font-medium text-[#FAFAFA] hover:opacity-75',
        className,
      )}
      {...props}
    >
      <Image
        src={LeftSVG}
        width={50}
        height={20}
        alt="btn decoration"
        className="-translate-x-6"
      />
      Upgrade to
      <span className="ml-1.5 bg-gradient-to-t from-[#FF2900] to-[#FF7A00] bg-clip-text text-transparent">
        Pro
      </span>
      <Image
        src={RightSVG}
        width={50}
        height={20}
        alt="btn decoration"
        className="translate-x-6"
      />
    </Link>
  );
};

export default UpgradeButton;
