import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Code2, GitBranch, Radio, Server, Sparkles, Terminal } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const codeLines = [
  '// Frontend Portfolio',
  'const developer = "Renato Vieira";',
  "",
  "function welcome() {",
  '  return "Bem-vindo ao meu portfolio.";',
  "}",
  "",
  "welcome();"
];

const command = "npm run dev";

const terminalOutput = [
  "Installing digital experience...",
  "Compiling interface...",
  "Injecting premium animations...",
  "Starting portfolio server...",
  "",
  "> frontend-portfolio@1.0.0 dev",
  "> vite",
  "",
  "API:     /api",
  "Status:  Portfolio online",
  "Ready in 1.2s",
  "",
  "Launching frontend experience..."
];

const files = ["src/", "components/", "pages/", "App.jsx", "Home.jsx", "api.js"];

function useTypedText(text, active, speed = 18, onDone) {
  const [value, setValue] = useState("");
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!active) return undefined;

    setValue("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
        doneRef.current?.();
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [active, speed, text]);

  return value;
}

function CodeLine({ number, text, typedCode }) {
  const previousLength = codeLines.slice(0, number - 1).join("\n").length + (number > 1 ? 1 : 0);
  const visible = typedCode.slice(previousLength, previousLength + text.length);
  const isComment = text.trim().startsWith("//");
  const isKeyword = text.includes("const") || text.includes("function") || text.includes("return");

  return (
    <div className="grid grid-cols-[2.4rem_1fr] gap-3 text-[13px] leading-6 md:text-sm">
      <span className="select-none text-right text-slate-600">{number}</span>
      <pre className="min-h-6 overflow-hidden font-mono">
        <span className={isComment ? "text-slate-500" : isKeyword ? "text-fuchsia-300" : "text-slate-200"}>
          {visible}
        </span>
      </pre>
    </div>
  );
}

function Cursor() {
  return <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-cyan" />;
}

export function CodeStartupIntro({ onFinish }) {
  const [phase, setPhase] = useState("code");
  const [visibleOutputs, setVisibleOutputs] = useState([]);
  const [closing, setClosing] = useState(false);

  const fullCode = useMemo(() => codeLines.join("\n"), []);
  const typedCode = useTypedText(
    fullCode,
    phase === "code",
    16,
    () => window.setTimeout(() => setPhase("terminal"), 280)
  );
  const typedCommand = useTypedText(command, phase === "terminal", 42, () => setPhase("output"));

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    if (phase !== "output") return undefined;

    const timers = terminalOutput.map((line, index) =>
      window.setTimeout(() => {
        setVisibleOutputs((current) => [...current, line]);
      }, index * 155)
    );

    const finishTimer = window.setTimeout(() => {
      setClosing(true);
      window.setTimeout(() => onFinish(false), 620);
    }, terminalOutput.length * 155 + 780);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(finishTimer);
    };
  }, [onFinish, phase]);

  function skip() {
    setClosing(true);
    window.setTimeout(() => onFinish(true), 260);
  }

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#05070d] p-3 text-slate-100 md:p-6"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(18px)" }}
          transition={{ duration: 0.62, ease: "easeInOut" }}
        >
          <div className="noise" />
          <div className="tech-grid absolute inset-0 opacity-60" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.28, 0.48, 0.28] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b1020]/92 shadow-[0_30px_140px_rgba(34,211,238,0.18)] backdrop-blur-2xl md:rounded-3xl"
            initial={{ opacity: 0, y: 28, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
          >
            <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#111827]/90 px-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 sm:flex">
                <Sparkles size={13} className="text-cyan" />
                Frontend Dev Studio
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Radio size={13} className="text-emerald-300" />
                live
              </div>
            </div>

            <div className="grid min-h-[74vh] grid-rows-[1fr_auto] md:min-h-[34rem]">
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[13rem_1fr]">
                <aside className="hidden border-r border-white/10 bg-[#0f172a]/80 p-4 md:block">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Explorer</p>
                  <div className="grid gap-2">
                    {files.map((file, index) => (
                      <motion.div
                        key={file}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * index }}
                        className={`rounded-lg px-3 py-2 text-sm ${file === "Home.jsx" ? "bg-cyan/10 text-cyan" : "text-slate-400"}`}
                      >
                        {file}
                      </motion.div>
                    ))}
                  </div>
                </aside>

                <aside className="flex flex-col items-center gap-5 border-r border-white/10 bg-[#0f172a]/80 py-4 md:hidden">
                  <Code2 size={18} className="text-cyan" />
                  <GitBranch size={18} className="text-slate-500" />
                  <Terminal size={18} className="text-slate-500" />
                </aside>

                <main className="min-w-0 bg-[#0b1120]/95">
                  <div className="flex h-10 items-center border-b border-white/10 bg-[#111827]/70">
                    <div className="flex h-full items-center gap-2 border-r border-white/10 bg-[#0b1120] px-4 text-sm text-slate-200">
                      <Code2 size={15} className="text-cyan" />
                      Portfolio.jsx
                    </div>
                  </div>

                  <div className="relative p-4 md:p-6">
                    <div className="pointer-events-none absolute right-6 top-6 hidden rounded-2xl border border-cyan/20 bg-cyan/10 px-4 py-3 text-xs font-bold text-cyan md:block">
                      frontend interface boot
                    </div>
                    <div className="font-mono">
                      {codeLines.map((line, index) => (
                        <CodeLine key={index} number={index + 1} text={line} typedCode={typedCode} />
                      ))}
                      {phase === "code" && <div className="ml-[3.3rem]"><Cursor /></div>}
                    </div>
                  </div>
                </main>
              </div>

              <section className="border-t border-white/10 bg-[#020617]/95">
                <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-[#0f172a] px-4 text-xs font-bold text-slate-400">
                  <Terminal size={15} className="text-cyan" />
                  Terminal
                  <span className="ml-auto hidden text-slate-500 sm:inline">Portfolio integrated terminal</span>
                </div>
                <div className="h-40 overflow-hidden p-4 font-mono text-xs leading-6 text-slate-300 md:h-44 md:text-sm">
                  <div>
                    <span className="text-emerald-300">portfolio</span>
                    <span className="text-slate-500"> ~/frontend-lab $ </span>
                    <span className="text-cyan">{typedCommand}</span>
                    {phase === "terminal" && <Cursor />}
                  </div>
                  <div className="mt-1">
                    {visibleOutputs.map((line, index) => (
                      <motion.div
                        key={`${line}-${index}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={
                          line.includes("Status") || line.includes("Ready") || line.includes("Launching")
                            ? "text-cyan"
                            : line.includes("Local")
                              ? "text-emerald-300"
                              : "text-slate-400"
                        }
                      >
                        {line || "\u00a0"}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <div className="flex h-8 items-center gap-4 bg-[#0e7490] px-4 text-[11px] font-bold text-white md:text-xs">
              <span className="inline-flex items-center gap-1"><GitBranch size={12} /> main</span>
              <span>JavaScript</span>
              <span>UTF-8</span>
              <span className="ml-auto inline-flex items-center gap-1"><Server size={12} /> Portfolio Dev Mode</span>
              <span className="hidden items-center gap-1 sm:inline-flex"><CheckCircle2 size={12} /> Online</span>
            </div>
          </motion.div>

          <button
            onClick={skip}
            className="fixed bottom-5 right-5 z-[101] rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-white backdrop-blur-xl transition hover:border-cyan hover:bg-cyan hover:text-ink md:bottom-7 md:right-7"
          >
            Pular intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
