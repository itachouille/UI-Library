import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const FREE = {
  title: 'free',
  description: 'Un plan gratuit pour les développeurs et petites entreprises',
  price: 0,
  features: [
    'Accès à 20 composants UI de base',
    'Personnalisation avec CSS standard',
    'Documentation complète',
    'Mises à jour régulières',
  ],
};

const PREMIUM = {
  title: 'premium',
  description: 'Un plan pour les entreprises avec des besoins spécifiques',
  price: 99,
  features: [
    'Tout du plan Free',
    'Composants UI illimités',
    'Support technique prioritaire 24/7',
    'Personnalisation complète via une API dédiée',
    'Intégration avec les outils d’entreprise (Figma, Webflow, etc.)',
  ],
};

interface CardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
}

const Card = ({ title, description, price, features }: CardProps) => {
  return (
    <div className="relative flex max-w-[300px] flex-col gap-6 rounded-2xl border-2 border-orange-400/60 bg-[#1B1B1B] p-4 text-white">
      <div className="mx-auto flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-semibold uppercase">{title}</h2>
        <p className="text-sm text-white">{description}</p>
        <span className="text-5xl font-bold text-white">{price} €</span>
      </div>

      <hr className="h-px w-full border-none bg-gradient-to-r from-orange-200/0 via-orange-400/60 to-orange-200/0" />

      <ul className="flex flex-col gap-2 font-normal">
        {features.map(feature => (
          <li key={feature} className="flex gap-3">
            <CheckIcon className="h-6 w-5 flex-none text-xs font-medium text-white" />
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="outline" className="text-black">
        Choisir
      </Button>
    </div>
  );
};

const PricingCard = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 md:flex-row md:items-start">
      <Card {...FREE} />
      <Card {...PREMIUM} />
    </div>
  );
};

export default PricingCard;
