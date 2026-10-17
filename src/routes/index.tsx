import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import logo from "@/assets/wide-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mobiLap Store — Coming Soon" },
      { name: "description", content: "mobiLap Store is launching soon at mobilestore.com — the latest mobiles, laptops and accessories." },
      { property: "og:title", content: "mobiLap Store — Coming Soon" },
      { property: "og:description", content: "Mobiles, laptops & accessories. Launching soon at mobilestore.com." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LAUNCH = new Date("2026-11-01T12:00:00Z").getTime();

const TICKER = [
  "Smartphones",
  "Laptops",
  "Tablets",
  "Audio",
  "Wearables",
  "Accessories",
  "Gaming",
  "Smart Home",
];

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, LAUNCH - (now ?? LAUNCH));
  return [
    { label: "Days", value: Math.floor(diff / 864e5) },
    { label: "Hours", value: Math.floor(diff / 36e5) % 24 },
    { label: "Minutes", value: Math.floor(diff / 6e4) % 60 },
    { label: "Seconds", value: Math.floor(diff / 1e3) % 60 },
  ];
}

function Ticker() {
  const run = (
    <div className="cs-marquee-track" aria-hidden="true">
      {TICKER.map((t) => (
        <span
          key={t}
          className="cs-display flex items-center gap-10 px-10 text-xs font-semibold uppercase tracking-[0.35em] md:text-sm"
        >
          {t}
          <span className="h-1 w-1 rounded-full bg-current opacity-40" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="cs-marquee cs-border relative z-10 border-y py-4 text-white/70">
      <div className="flex">
        {run}
        {run}
      </div>
    </div>
  );
}

function Index() {
  const units = useCountdown();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <main className="cs-page relative flex min-h-screen flex-col overflow-hidden">
      <div className="cs-blob cs-blob-a" />
      <div className="cs-blob cs-blob-b" />
      <div className="cs-grid pointer-events-none absolute inset-0" />
      <div className="cs-noise pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <img src={logo.url} alt="mobiLap" className="cs-logo h-8 w-auto md:h-10" />
        <span className="cs-glass cs-dim flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.3em]">
          <span className="cs-dot h-1.5 w-1.5 animate-pulse rounded-full" /> In progress
        </span>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <p className="cs-fade cs-accent mb-6 text-xs font-semibold uppercase tracking-[0.5em]">
          mobiLap Store
        </p>
        <h1 className="cs-fade cs-d1 cs-display cs-gradient-text text-6xl font-extrabold leading-[0.9] tracking-tight md:text-[9rem]">
          Coming
          <br />
          Soon.
        </h1>
        <p className="cs-fade cs-d2 cs-dim mt-8 max-w-lg text-base md:text-lg">
          The latest smartphones, laptops and accessories — curated, genuine and delivered fast.
          Something great is on its way.
        </p>

        <div className="cs-fade cs-d2 mt-12 grid grid-cols-4 gap-3 md:gap-5">
          {units.map((u) => (
            <div key={u.label} className="cs-cell w-20 rounded-2xl py-4 md:w-28 md:py-6">
              <div className="cs-display text-3xl font-bold tabular-nums md:text-5xl">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="cs-dim mt-1 text-[10px] uppercase tracking-[0.25em] md:text-xs">{u.label}</div>
            </div>
          ))}
        </div>

        <form
          onSubmit={submit}
          className="cs-fade cs-d3 cs-glass mt-12 flex w-full max-w-md items-center gap-2 rounded-full p-1.5 pl-5"
        >
          {done ? (
            <p className="cs-accent w-full py-2.5 text-sm">You're on the list — we'll notify you at launch.</p>
          ) : (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="cs-input min-w-0 flex-1 text-sm"
              />
              <button type="submit" className="cs-btn rounded-full px-5 py-2.5 text-sm font-semibold">
                Notify me
              </button>
            </>
          )}
        </form>
      </section>

      <Ticker />

      <footer className="cs-border relative z-10 flex flex-col items-center justify-between gap-2 border-t px-6 py-6 text-xs md:flex-row md:px-12">
        <a href="https://mobilestore.com" className="cs-display tracking-[0.2em]">
          mobilestore.com
        </a>
        <span className="cs-dim">© 2026 mobiLap Store. All rights reserved.</span>
      </footer>
    </main>
  );
}
