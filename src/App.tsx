import { useState } from "react";
import { ArrowUpRight, Wrench, Gauge, Compass, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";
import supportImage from "@/assets/service-support.jpg";
import optimizeImage from "@/assets/service-optimize.jpg";
import strategyImage from "@/assets/service-strategy.jpg";

export default function App() {
  return (
    <div className="noise min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-sm bg-primary text-primary-foreground grid place-items-center font-mono text-sm font-bold">X</span>
          <span className="font-display text-lg tracking-tight">ComeOnLet<span className="text-primary">X</span>FixIt</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
          Book a call <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <p className="text-eyebrow mb-8">/ 01 — IT Consulting & Services</p>
          <h1 className="text-display text-[clamp(3rem,8vw,7.5rem)] text-foreground">
            Fix it. <span className="italic font-light text-muted-foreground">Enhance it.</span>
            <br />Elevate the<br />whole <span className="text-primary italic font-light">stack.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A senior IT consultancy for businesses that can't afford downtime, dead weight, or duct-tape architecture. We diagnose, optimize, and modernize the systems your company runs on.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              See what we fix <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-border-strong text-foreground hover:bg-surface transition-colors">
              Talk to an engineer
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
            <img src={heroImage} alt="Glowing network infrastructure" width={1600} height={1200} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-foreground/80 flex justify-between">
              <span>UPTIME · 99.98%</span><span>NODE_07</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface border border-border-strong rounded-sm p-5 max-w-[220px] shadow-[var(--shadow-card)]">
            <p className="text-eyebrow mb-2">Avg. response</p>
            <p className="font-display text-4xl">17<span className="text-primary">m</span></p>
            <p className="text-xs text-muted-foreground mt-1">from ticket to engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Cloud Migration", "Network Audit", "Endpoint Security", "Backup & DR", "Microsoft 365", "Helpdesk", "SaaS Integration", "Compliance"];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-surface/40">
      <div className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-12">{s} <span className="text-primary">✦</span></span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="text-eyebrow mb-6">/ 02 — About</p>
          <h2 className="text-display text-5xl lg:text-6xl">Built for the businesses everyone else gave up on.</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8">
          <p className="text-xl leading-relaxed text-foreground/90">
            ComeOnLetXFixIt is a trusted IT partner for teams who need their technology to just work — and need it to work better than it did yesterday.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            We sit between the urgent ticket and the long-term roadmap. Whether you need an unrecoverable server rescued before close of business, a network rebuilt for a hundred new hires, or a strategy that takes your stack from legacy to leading — our engineers fix, enhance, and elevate.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[{n:"14+",l:"Years in the field"},{n:"300+",l:"Networks under care"},{n:"24/7",l:"On-call coverage"}].map((s) => (
              <div key={s.l}>
                <p className="text-display text-4xl text-primary">{s.n}</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { n: "01", icon: Wrench, title: "Troubleshooting & Support", desc: "Rapid diagnosis and resolution. Hardware failures, software conflicts, mystery outages — we get you back online before your team finishes their coffee.", img: supportImage, tags: ["Helpdesk","On-site","Remote"] },
    { n: "02", icon: Gauge, title: "Optimization & Performance", desc: "We audit your stack end-to-end, find the bottlenecks, kill the bloat, and tune systems so your infrastructure earns its keep.", img: optimizeImage, tags: ["Audit","Network","Cloud cost"] },
    { n: "03", icon: Compass, title: "Strategic Planning & Consulting", desc: "From cloud migrations to security posture to a five-year roadmap — we align your technology with where the business is actually going.", img: strategyImage, tags: ["Roadmap","Migration","Security"] },
  ];
  return (
    <section id="services" className="py-24 lg:py-40 bg-surface/30 border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-eyebrow mb-6">/ 03 — Services</p>
            <h2 className="text-display text-5xl lg:text-7xl max-w-2xl">Three disciplines. <span className="italic text-muted-foreground">One standard.</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground">Pick what you need today. Engage us for the next ten years. Either works.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article key={s.n} className="group relative bg-background p-8 lg:p-10 flex flex-col hover:bg-surface transition-colors">
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">{s.n} / 03</span>
                <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-8 border border-border">
                <img src={s.img} alt={s.title} width={1200} height={1500} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-display text-3xl mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground px-2 py-1 border border-border rounded-sm">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Diagnose", d: "We listen, audit, and map the actual problem — not the symptom in the ticket." },
    { n: "02", t: "Stabilize", d: "Stop the bleeding. Restore uptime. Lock the doors that were left open." },
    { n: "03", t: "Optimize", d: "Tune what's already there. Cut what shouldn't be. Document everything." },
    { n: "04", t: "Elevate", d: "Plan, migrate, modernize — so the next five years run on something you trust." },
  ];
  return (
    <section id="process" className="py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-eyebrow mb-6">/ 04 — Process</p>
        <h2 className="text-display text-5xl lg:text-7xl mb-16 max-w-3xl">How we work.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 lg:p-10 min-h-[280px] flex flex-col">
              <p className="font-mono text-xs text-primary mb-12">— {s.n}</p>
              <h3 className="text-display text-3xl mb-4">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 lg:py-40 bg-surface/30 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-eyebrow mb-6">/ 05 — Contact</p>
          <h2 className="text-display text-5xl lg:text-7xl mb-8">Something<br /> <span className="italic text-primary">broken?</span></h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md">Tell us what's on fire. We'll reply within one business hour — usually faster.</p>
          <div className="space-y-5">
            <a href="tel:380-206-3620" className="flex items-center gap-4 group">
              <span className="w-10 h-10 grid place-items-center border border-border rounded-sm group-hover:border-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </span>
              <span className="font-mono text-sm">380-206-3620</span>
            </a>
            <a href="mailto:pearsonmitchell@remoteworkershelp.com" className="flex items-center gap-4 group">
              <span className="w-10 h-10 grid place-items-center border border-border rounded-sm group-hover:border-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </span>
              <span className="font-mono text-sm break-all">pearsonmitchell@remoteworkershelp.com</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 grid place-items-center border border-border rounded-sm">
                <MapPin className="w-4 h-4 text-primary" />
              </span>
              <span className="font-mono text-sm">1001 S. Main St, Kalispell, MT</span>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="lg:col-span-6 lg:col-start-7 bg-background border border-border rounded-sm p-8 lg:p-10 space-y-6">
          <div>
            <label className="text-eyebrow block mb-3">Name</label>
            <input required className="w-full bg-transparent border-b border-border-strong py-3 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <label className="text-eyebrow block mb-3">Email</label>
            <input type="email" required className="w-full bg-transparent border-b border-border-strong py-3 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <label className="text-eyebrow block mb-3">What needs fixing?</label>
            <textarea rows={4} required className="w-full bg-transparent border-b border-border-strong py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
          </div>
          <button type="submit" disabled={sent} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-60">
            {sent ? "Received — we'll be in touch" : "Send message"}
            {!sent && <ArrowUpRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-sm bg-primary text-primary-foreground grid place-items-center font-mono text-xs font-bold">X</span>
          <span className="font-display text-base">ComeOnLet<span className="text-primary">X</span>FixIt</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} — Fix, enhance, elevate.</p>
      </div>
    </footer>
  );
}
