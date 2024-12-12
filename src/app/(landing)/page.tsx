import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center text-[#FFFFFF] md:px-8">
        <div className="relative mx-auto flex flex-col items-center gap-10">
          <div>
            <h1 className="text-balance bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
              Créez des interfaces
              <br className="hidden md:block" /> utilisateur exceptionnelles
            </h1>
          </div>

          <p className="mb-12 text-balance text-lg tracking-tight text-gray-400 md:text-xl">
            Paste vous offre tous les outils nécessaires pour concevoir et
            développer
            <br className="hidden md:block" />
            des interfaces utilisateur modernes et réactives.
          </p>

          <Button variant="secondary" className="group">
            <span>Tester Gratuitement</span>
            <ArrowRight className="transition-all group-hover:translate-x-1" />
          </Button>

          <div className="relative mt-[8rem]">
            <img
              src="/hero.png"
              alt="dashboard image"
              className="relative h-full w-full rounded-[inherit] border border-transparent object-contain"
            />{' '}
            <BorderBeam duration={12} delay={9} />
          </div>
        </div>
      </section>
    </>
  );
}
