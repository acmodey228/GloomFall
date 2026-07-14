import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Category = 'Веб' | 'Дизайн' | 'Автоматизация';

const filters: ('Все' | Category)[] = ['Все', 'Веб', 'Дизайн', 'Автоматизация'];

const projects: { title: string; category: Category; description: string; image: string; tags: string[] }[] = [
  {
    title: 'Inked Dashboard',
    category: 'Веб',
    description:
      'Платформа аналитики в реальном времени, которая превратила недели ручной подготовки отчетов в единую динамическую сводку, обеспечив клиенту мгновенное понимание того, что работает эффективно.',
    image: '/photos/scrin1.avif',
    tags: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Pulse Commerce',
    category: 'Веб',
    description:
      'Интернет-магазин, который сократил число отказов при оформлении заказа за счет уменьшения препятствий на каждом этапе — быстрая загрузка, понятные призывы к действию и отсутствие тупиковых сценариев.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Aurora Brand System',
    category: 'Дизайн',
    description:
      'Комплексный фирменный стиль для креативного агентства — от логотипа до системы анимационной графики, — создающий для команды целостный и приковывающий внимание образ.',
    image: 'https://images.pexels.com/photos/1966452/pexels-photo-1966452.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Figma', 'Motion Design', 'Branding'],
  },
  //{
    //title: 'Cipher Wallet',
    //category: 'Web',
    //description:
      //'Crypto wallet interface that made complex transactions feel simple and secure — increasing user trust and daily active use from day one.',
    //image: 'https://images.pexels.com/photos/8443363/pexels-photo-8443363.jpeg?auto=compress&cs=tinysrgb&w=800',
   // tags: ['React Native', 'Web3', 'Supabase'],
  //},
  {
    title: 'Helio Support Bot',
    category: 'Автоматизация',
    description:
      'Агент поддержки на базе ИИ, который автоматически обрабатывает 80% входящих обращений, позволяя всей команде поддержки сосредоточиться на действительно сложных и нестандартных случаях.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'NLP', 'OpenAI'],
  },
  {
    title: 'Flux Content Engine',
    category: 'Автоматизация',
    description:
      'Комлексный конвейер создания контента, включающий генерацию, планирование и публикацию на различных платформах, позволяет команде из 3 человек экономить более 15 часов в неделю.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Automation', 'APIs'],
  },
];

export default function Projects() {
  const [active, setActive] = useState<'Все' | Category>('Все');

  const filtered = active === 'Все' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
              Избранные работы
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Проекты, которые существенно повлияли на ситуацию
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-500">
            Каждый проект здесь решал реальную бизнес-задачу. Это не просто «красивая картинка» —
            решения созданы для эффективной работы, конверсии и масштабирования.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-neon-500 text-white shadow-lg shadow-neon-500/30'
                    : 'glass text-gray-400 neon-border hover:text-neon-200'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl glass neon-border"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-ink-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon-200 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-neon-200">
                    {project.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon-500/10 text-neon-300 transition-all duration-300 group-hover:bg-neon-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-neon-500/10 px-2.5 py-1 text-xs font-medium text-neon-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
