import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link className="flex items-center gap-2" href="/">
              <Image src="/logo.svg" alt="Paste logo" width={96} height={32} />
            </Link>
            <p className="max-w-xs">UI Library for Design Engineers</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {FOOTER_LINKS.map(section => (
              <div key={section.title}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-white">
                  {section.title}
                </h2>
                <ul className="grid gap-2">
                  {section.items.map(item => (
                    <li key={item.label}>
                      {item.external ? (
                        <a
                          href={item.href}
                          className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex space-x-5 sm:mt-0 sm:justify-center">
            {SOCIAL_LINKS.map(social => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-500 hover:text-gray-600"
              >
                {social.svg}
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-400 sm:text-center">
            Copyright © 2024
            <Link className="cursor-pointer" href="/">
              {' '}
              Paste
            </Link>
            . Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
