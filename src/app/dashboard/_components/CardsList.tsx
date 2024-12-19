import { CARD_DATA } from '@/constants';
import { cn } from '@/lib/utils';
import { CarditemProps } from '@/types';
import { Bookmark } from 'lucide-react';

const CardsList = () => {
  return (
    <div className="mt-10 grid auto-rows-min gap-8 lg:grid-cols-3">
      {CARD_DATA.map((card, i) => (
        <Card
          key={i}
          title={card.title}
          date={card.date}
          marked={card.marked}
        />
      ))}
    </div>
  );
};

export default CardsList;

const Card = ({ title, date, marked }: CarditemProps) => {
  return (
    <div className="aspect-[4/3] w-full max-w-2xl rounded-xl">
      <div className="aspect-video rounded-xl border border-[#292929] bg-[#1B1B1B]" />
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">
            {title}
            <span className="pl-2">Pro</span>
          </p>
          <Bookmark
            className={cn(
              marked ? 'fill-orange-500 text-orange-500' : '',
              'size-5 cursor-pointer',
            )}
          />
        </div>
        <div className="pt-2 text-[#7E7F81]">
          <p>— {date}</p>
        </div>
      </div>
    </div>
  );
};
