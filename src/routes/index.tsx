import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mobiLap Store — Coming Soon" },
      { name: "description", content: "mobiLap Store is launching soon at mobilestore.com — mobiles & laptops." },
      { property: "og:title", content: "mobiLap Store — Coming Soon" },
      { property: "og:description", content: "Mobiles & laptops. Launching soon at mobilestore.com." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="cs-page relative flex min-h-screen flex-col overflow-hidden">
      <div className="cs-grid pointer-events-none absolute inset-0" />
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="cs-display text-lg font-bold tracking-tight">mobiLap</span>
        <span className="cs-dim flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
          <span className="cs-dot h-2 w-2 animate-pulse rounded-full" /> Launching soon
        </span>
      </header>

      <section className="cs-fade relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <img src={logo.url} alt="mobiLap logo" className="cs-logo mb-10 w-32 md:w-40" />
        <p className="cs-accent mb-4 text-xs uppercase tracking-[0.5em]">mobiLap Store</p>
        <h1 className="cs-display text-6xl font-extrabold leading-none tracking-tight md:text-9xl">
          Coming Soon
        </h1>
        <p className="cs-dim mt-6 max-w-md text-base md:text-lg" dir="rtl">
          متجرك للموبايلات واللابتوبات — قريبًا جدًا
        </p>
        <a
          href="https://mobilestore.com"
          className="cs-border cs-display mt-10 rounded-full border px-6 py-3 text-sm tracking-widest"
        >
          mobilestore.com
        </a>
      </section>

      <footer className="cs-dim relative z-10 px-6 py-6 text-center text-xs md:px-12">
        © {new Date().getFullYear()} mobiLap Store
      </footer>
    </main>
  );
}
