import { ArrowDown, ExternalLink, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-500/5 blur-[120px]" />
        <div className="grid-bg absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 neon-border">
          <span className="h-2 w-2 rounded-full bg-neon-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-neon-300">
            Открыт для новых проектов
          </span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Ваш продукт — качественно реализованный —<br />
          <span className="gradient-text">вовремя</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          Боты, экономящие часы вашего времени. Масштабируемые системы автоматизации. Визуальный контент, который конвертирует. 
          Я создаю цифровые продукты, которые делают ваш бизнес быстрее, эффективнее и прибыльнее.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={import.meta.env.VITE_KWORK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-neon-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neon-500/30 transition-all hover:bg-neon-400 hover:shadow-neon-400/40"
          >
            Услуга по оформлению заказов
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-gray-200 neon-border transition-all hover:text-white"
          >
            Посмотрите мои работы
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-5">
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            //{ Icon: Linkedin, href: '#', label: 'LinkedIn' },
            //{ Icon: Twitter, href: '#', label: 'Twitter' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-gray-500 neon-border transition-all hover:text-neon-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 hover:text-neon-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
