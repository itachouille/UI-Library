import Marquee from '@/components/ui/marquee';
import {
  BarChart,
  ChevronRight,
  File,
  Globe,
  HeartHandshake,
  HeartHandshakeIcon,
  Rss,
  Shield,
} from 'lucide-react';

const ICONS = [
  { Icon: Shield, gradient: 'from-yellow-400 via-orange-500 to-yellow-600' },
  {
    Icon: HeartHandshake,
    gradient: 'from-orange-600 via-rose-600 to-violet-600',
  },
  { Icon: BarChart, gradient: 'from-gray-600 via-gray-500 to-gray-400' },
  { Icon: Globe, gradient: 'from-cyan-500 via-blue-500 to-indigo-500' },
  { Icon: Rss, gradient: 'from-orange-600 via-rose-600 to-violet-600' },
  { Icon: File, gradient: 'from-green-500 via-teal-500 to-emerald-600' },
];

const MarqueeSection = () => {
  return (
    <section className="relative py-32">
      <div className="relative mx-auto flex w-full flex-col gap-4 overflow-hidden">
        <Marquee className="[--duration:20s]">
          {ICONS.map(({ Icon, gradient }, index) => (
            <div className="relative" key={index}>
              <Icon className="size-20 transform-gpu cursor-pointer overflow-hidden rounded-2xl border bg-transparent p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]" />
              <div
                className={`absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${gradient} opacity-70 blur-[20px] filter`}
              />
            </div>
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:15s]">
          {ICONS.map(({ Icon, gradient }, index) => (
            <div className="relative" key={index}>
              <Icon className="size-20 transform-gpu cursor-pointer overflow-hidden rounded-2xl border bg-transparent p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]" />
              <div
                className={`absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${gradient} opacity-70 blur-[20px] filter`}
              />
            </div>
          ))}
        </Marquee>

        <Marquee className="[--duration:25s]">
          {ICONS.map(({ Icon, gradient }, index) => (
            <div className="relative" key={index}>
              <Icon className="size-20 transform-gpu cursor-pointer overflow-hidden rounded-2xl border bg-transparent p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]" />
              <div
                className={`absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${gradient} opacity-70 blur-[20px] filter`}
              />
            </div>
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:20s]">
          {ICONS.map(({ Icon, gradient }, index) => (
            <div className="relative" key={index}>
              <Icon className="size-20 transform-gpu cursor-pointer overflow-hidden rounded-2xl border bg-transparent p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]" />
              <div
                className={`absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${gradient} opacity-70 blur-[20px] filter`}
              />
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#121212]" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#121212]" />

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#121212]/40 to-[#121212]" />

        <div className="absolute z-40 flex size-full">
          <div className="mx-auto my-16 flex flex-col items-center justify-around rounded-3xl border border-[#1D1D1D] bg-black/10 p-6 text-center backdrop-blur-md md:my-10 md:p-8">
            <HeartHandshakeIcon className="size-20 text-white md:size-32" />
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Concentrez-vous sur l'essentiel.
            </h2>
            <p className="mt-2 text-sm text-gray-300 md:text-base">
              Laissez-nous gérer la conception.
              <br />
              Simplifiez votre workflow dès maintenant.
            </p>
            <a
              className="group mt-4 flex w-fit cursor-pointer items-center justify-center gap-1 rounded-lg border border-white bg-white px-4 py-1 text-black transition"
              href="#"
            >
              Lancez-vous
              <ChevronRight className="size-5 transition-all group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
