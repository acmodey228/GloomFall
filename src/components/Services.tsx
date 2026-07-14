import { Code2, Palette, Zap, Layers, PenTool, Globe } from 'lucide-react';

const services = [
  {
    Icon: Code2,
    title: 'Веб-Разработка',
    description:
      'Веб-приложения производственного уровня, созданные с использованием React, TypeScript и современных инструментов. Быстрые, доступные и масштабируемые.',
    features: ['React / Next.js', 'TypeScript', 'API Интеграция'],
  },
  {
    Icon: Palette,
    title: 'UI / UX Дизайн',
    description:
      'Человекоориентированные интерфейсы с футуристической эстетикой. От каркасных моделей до отточенных, анимированных прототипов.',
    features: ['Системы проектирования', 'Прототипированеи', 'Моушн-дизайн'],
  },
  {
    Icon: PenTool,
    title: 'Дизайн контента',
    description:
      'Стратегически выстроенный контент, обеспечивающий четкую коммункиацию — коппирайтинг, информационная архитектура и фирменный стиль.',
    features: ['Коппирайтинг', 'Голос бренда', 'Информационная архитектура'],
  },
  {
    Icon: Zap,
    title: 'Производительность',
    description:
      'Скорость имеет значение. Я оптимизирую каждую загрузку — Core Web Vitals, анализ пакетов и доставку на переферии сети.',
    features: ['Core Web Vitals', 'Edge Rendering', 'SEO'],
  },
  //{
    //Icon: Layers,
    //title: 'Дизайн-Система',
    //description:
      //'Scalable component libraries and design tokens that keep teams consistent and shipping fast.',
    //features: ['Component Libraries', 'Design Tokens', 'Documentation'],
  //},
 // {
   // Icon: Globe,
    //title: 'Creative Direction',
    //description:
      //'End-to-end creative vision for launches, campaigns, and digital products that stand out.',
    //features: ['Art Direction', 'Campaign Design', 'Brand Strategy'],
  //},
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
            Что я делаю
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Услуги
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            Комплексные возможности в области разработки, дизайна и создания контента, 
            объединенные единым видением смелых, футуристичных цифровых продуктов.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description, features }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl glass p-7 neon-border"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon-500/10 blur-2xl transition-all duration-500 group-hover:bg-neon-500/20" />

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-500/15 text-neon-300 transition-all duration-300 group-hover:bg-neon-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>

                <ul className="mt-5 space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="h-1 w-1 rounded-full bg-neon-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
