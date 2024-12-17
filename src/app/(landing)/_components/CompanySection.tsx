import Acme from '@/assets/company/acme.svg';
import AlphaWave from '@/assets/company/alphaWave.svg';
import AltShift from '@/assets/company/altShift.svg';
import Capsule from '@/assets/company/capsule.svg';
import Degrees from '@/assets/company/degrees.svg';
import Image from 'next/image';

const COMPANY_ICONS = [Acme, AlphaWave, AltShift, Capsule, Degrees];

const CompanySection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-6 text-center md:px-8">
      <div className="md:py-28">
        <div className="mx-auto px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold uppercase text-gray-500">
            des équipes du monde entier nous font confiance
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
              {COMPANY_ICONS.map((company, index) => (
                <li key={index}>
                  <Image src={company} alt="company logo" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
