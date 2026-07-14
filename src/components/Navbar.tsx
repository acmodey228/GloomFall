import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const links = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-neon-500/15 py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-500/15 neon-border">
            <Terminal className="h-5 w-5 text-neon-300" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            GloomFall<span className="text-neon-400">.</span>
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-neon-400 to-neon-600 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 inline-flex items-center rounded-full bg-neon-500/15 px-5 py-2 text-sm font-semibold text-neon-200 neon-border transition-all hover:bg-neon-500/25"
            >
              Связаться со мной
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 neon-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-3 overflow-hidden rounded-2xl glass neon-border md:hidden">
          <ul className="flex flex-col p-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-neon-500/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-neon-500/20 px-4 py-3 text-center text-base font-semibold text-neon-100"
              >
                Связаться со мной
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
