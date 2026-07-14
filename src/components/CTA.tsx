import { Send, ExternalLink } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass neon-border px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Background glow */}
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-500/20 blur-3xl animate-pulse-glow" />
          <div className="grid-bg absolute inset-0 opacity-30" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
              Давайте создавать
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Готовы перестать терять время<br />
              и <span className="gradient-text">начать отгрузку</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-gray-400">
              Расскажите, что вам нужно сделать. Я отвечу в течение часа, честно оценю объем работ 
              и сдам качественный, рабочий продукт — всегда точно в срок.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={import.meta.env.VITE_KWORK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-neon-500 px-9 py-4 text-base font-semibold text-white shadow-lg shadow-neon-500/30 transition-all hover:bg-neon-400 hover:shadow-neon-400/40"
              >
                Обсудить проект на Kwork
                <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href={import.meta.env.VITE_TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on Telegram"
                className="group inline-flex items-center gap-2.5 rounded-full glass px-7 py-4 text-base font-semibold text-neon-200 neon-border transition-all hover:text-white"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                Напишите в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
