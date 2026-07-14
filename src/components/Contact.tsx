import { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { Mail, MapPin, Send, CheckCircle2, Github} from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, publicKey);

      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      alert("Ошибка отправки. Проверьте консоль.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
              Связаться со мной
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
             Давайте создадим нечто <span className="gradient-text">выдающееся.</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              У вас есть идея для проекта или вы просто хотите поздороваться? 
              Я всегда открыт к обсуждению новых идей, творческого сотрудничества и амбициозных проектов.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:shirshov.artem21@gmail.com"
                className="group flex items-center gap-4 rounded-2xl glass p-4 neon-border"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-500/15 text-neon-300 transition-colors group-hover:bg-neon-500 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Email</div>
                  <div className="text-sm font-medium text-white">shirshov.artem21@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl glass p-4 neon-border">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-500/15 text-neon-300">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Расположение</div>
                  <div className="text-sm font-medium text-white">Удаленная работа · По всему миру</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[Github].map((Icon, i) => (
                <a
                  key={i}
                  href="javascript:void(0)"
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-400 neon-border transition-all hover:text-neon-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl glass p-7 neon-border sm:p-9">
             <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Имя
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-neon-500/20 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-neon-500/60 focus:ring-2 focus:ring-neon-500/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-neon-500/20 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-neon-500/60 focus:ring-2 focus:ring-neon-500/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Сообщение
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Расскажите мне о своем проекте..."
                  className="w-full resize-none rounded-xl border border-neon-500/20 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-neon-500/60 focus:ring-2 focus:ring-neon-500/20"
                />
              </div>

              <button
  type="submit"
  disabled={sent}
  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-neon-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neon-500/30 transition-all hover:bg-neon-400 hover:shadow-neon-400/40 disabled:opacity-70"
>
  {/* Больше никаких условий внутри кнопки. Просто отображаем иконки и текст */}
  <span className="flex items-center gap-2">
    <span style={{ display: sent ? 'none' : 'flex', alignItems: 'center', gap: '8px' }}>
      Отправить сообщение <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </span>
    <span style={{ display: sent ? 'flex' : 'none', alignItems: 'center', gap: '8px' }}>
      <CheckCircle2 className="h-4 w-4" /> Сообщение отправленно!
    </span>
  </span>
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}