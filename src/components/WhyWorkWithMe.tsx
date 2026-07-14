import { Clock, CalendarCheck, UserCog } from 'lucide-react';

const reasons = [
  {
    Icon: Clock,
    title: 'Быстрая связь',
    description:
      'Я отвечаю в течении часа. Вы всегда точно знаете, на каком этапе находится ваш проект — никаких напоминаний, никакого молчания, никаких неожиданностей.',
  },
  {
    Icon: CalendarCheck,
    title: 'Сроки, которых придерживаются',
    description:
      'Я честно оцениваю объем работы и выполняю ее в срок. Вы можете спланировать свой запуск, свою рекламную компанию и свою команду, исходя из этого.',
  },
  {
    Icon: UserCog,
    title: 'Создана с учетом ваших целей',
    description:
      'Я не использую готовые шаблоны. Ваш продукт формируется с учетом вашей целевой аудитории, вашей бизнес-модели и того, что отличает вас от других.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-28">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
            Почему я?
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Почему со мной легко работать
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            Большинство проблем при работе с фрилансерами возникает из-за плохой коммуникации, 
            срыва сроков и шаблонных результатов. Вот чем я отличаюсь.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl glass p-8 neon-border"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-neon-500/10 blur-2xl transition-all duration-500 group-hover:bg-neon-500/25" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-500/15 text-neon-300 transition-all duration-300 group-hover:bg-neon-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-bold text-white/5 transition-colors duration-300 group-hover:text-neon-500/20">
                    0{i + 1}
                  </span>
                </div>

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
