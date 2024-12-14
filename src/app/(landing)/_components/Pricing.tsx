import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-8 px-4 pb-7 md:px-8 md:pb-14">
        <div className="text-center">
          <h4 className="text-xl font-bold tracking-tight text-white">
            Nos offres
          </h4>
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Accédez gratuitement ou choisissez le premium à vie.
          </h2>
          <p className="mt-6 text-xl leading-8 text-white">
            Aucun abonnement, aucune surprise, juste de la simplicité.
          </p>
        </div>
      </div>

      <PricingCard />
    </section>
  );
};

export default Pricing;
