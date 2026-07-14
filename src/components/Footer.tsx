import { Terminal, Github} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-500/15 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-500/15">
            <Terminal className="h-4 w-4 text-neon-300" />
          </span>
          <span className="font-display text-sm font-bold text-white">
            GloomFall<span className="text-neon-400">.</span>
          </span>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} GloomFall. Разработано и создано с душой.
        </p>

        <div className="flex items-center gap-3">
          {[Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 neon-border transition-all hover:text-neon-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
