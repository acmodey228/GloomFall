import { Atom, Code2, Palette, Bot } from 'lucide-react';

const skills = [
  {
    Icon: Atom,
    title: 'React',
    description:
      'Быстрые интерактивные интерфейсы, которые действительно понравятся вашим пользователям — созданные на базе чистой компонентной архитектуры и без лишнего кода.',
  },
  {
    Icon: Code2,
    title: 'Python',
    description:
      'Мощные бэкенды, конвейеры обработки данных и скрипты, берущие на себя всю тяжелую работу, — чтобы вы могли сосредоточиться на ведении бизнеса.',
  },
  {
    Icon: Palette,
    title: 'UI/UX Дизайн',
    description:
      'Дизайн, побуждающий пользователей к действию. Каждое решение в компоновке, цвете и деталях продумано — ведь качественный дизайн продает.',
  },
  {
    Icon: Bot,
    title: 'Автоматизация на базе ИИ',
    description:
      'Кастомные боты и рабочие процессы на базе ИИ, которые устраняют рутину, сокращают расходы и высвобождают часы вашего времени каждую неделю.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
            Мой набор инструментов
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Навыки, приносящие результаты
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            Это не универсальное решение «для всего понемногу». Это специализированный технологический стек, 
            созданный для решения реальных проблем, которые стоят бизнесу времени и денег.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl glass p-7 neon-border"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-neon-500/10 blur-2xl transition-all duration-500 group-hover:bg-neon-500/25" />

              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon-500/15 text-neon-300 transition-all duration-300 group-hover:bg-neon-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
              </div>

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-neon-400 to-neon-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
