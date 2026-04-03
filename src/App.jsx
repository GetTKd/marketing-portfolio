import { useEffect, useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTrack, setActiveTrack] = useState('B2B')
  const [metricsLive, setMetricsLive] = useState(false)

  const tracks = {
    B2B: {
      headline: 'Pipeline growth for high-consideration buyers',
      description:
        'Built a full-funnel narrative from analyst trust to demo conversions using webinar retargeting and lifecycle email loops.',
      cvr: '+42% SQL conversion',
      velocity: '31-day average sales cycle',
    },
    Ecommerce: {
      headline: 'Retention engine for repeat purchase momentum',
      description:
        'Repositioned product value by intent stage and launched behavior-based bundles that turned one-time buyers into subscribers.',
      cvr: '+28% repeat order rate',
      velocity: '$11.20 blended CAC reduction',
    },
    SaaS: {
      headline: 'Product-led acquisition with onboarding lift',
      description:
        'Connected ad messaging to in-app milestone moments and rebuilt activation nudges with event-triggered educational content.',
      cvr: '+19% trial-to-paid',
      velocity: '2.3x feature adoption',
    },
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMetricsLive(true)
    }, 400)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  const metricClass = (delay) =>
    [
      'rounded-2xl border border-amber-100/80 bg-white/75 p-5 backdrop-blur transition-all duration-700 ease-out',
      metricsLive
        ? `translate-y-0 opacity-100 ${delay}`
        : 'translate-y-8 opacity-0',
    ].join(' ')

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_5%,#fef3c7_0,#fff7ed_45%,#fff_100%)] text-stone-800">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/4 rounded-full bg-orange-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-sky-300/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="glass-card animate-fade-in rounded-2xl border border-amber-100/80 px-4 py-3 shadow-sm sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-heading text-2xl leading-none tracking-tight text-stone-900">
                Northline Growth
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-700">
                Marketing Portfolio
              </p>
            </div>

            <button
              className="inline-flex items-center rounded-full border border-amber-300 px-3 py-1.5 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>

            <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
              <a href="#work" className="transition hover:text-stone-950">
                Work
              </a>
              <a href="#services" className="transition hover:text-stone-950">
                Services
              </a>
              <a href="#results" className="transition hover:text-stone-950">
                Results
              </a>
              <a
                href="#contact"
                className="rounded-full bg-stone-900 px-4 py-2 text-white transition hover:bg-stone-700"
              >
                Book a Call
              </a>
            </nav>
          </div>

          <div
            id="mobile-menu"
            className={[
              'grid overflow-hidden transition-all duration-300 md:hidden',
              menuOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
            ].join(' ')}
          >
            <nav className="min-h-0 space-y-2 border-t border-amber-100 pt-3 text-sm font-medium text-stone-700">
              <a
                className="block rounded-lg px-2 py-1.5 hover:bg-amber-50"
                href="#work"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
              <a
                className="block rounded-lg px-2 py-1.5 hover:bg-amber-50"
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="block rounded-lg px-2 py-1.5 hover:bg-amber-50"
                href="#results"
                onClick={() => setMenuOpen(false)}
              >
                Results
              </a>
              <a
                className="block rounded-lg bg-stone-900 px-2 py-2 text-center text-white"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </a>
            </nav>
          </div>
        </header>

        <section className="grid items-center gap-10 pb-14 pt-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900">
              Strategy + Creative + Performance
            </p>
            <h1 className="font-heading text-4xl leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
              I design marketing systems that turn attention into predictable
              revenue.
            </h1>
            <p className="max-w-xl text-base text-stone-600 sm:text-lg">
              Senior growth marketer helping startups and modern brands launch
              standout campaigns, optimize conversion paths, and scale with
              confidence across devices.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#results"
                className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-stone-700"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200/70 bg-white/80 p-5 shadow-xl shadow-stone-200/35 backdrop-blur sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
              Snapshot
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <article className={metricClass('delay-100')}>
                <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                  Revenue Influence
                </p>
                <p className="mt-2 text-2xl font-bold text-stone-900">$8.2M</p>
                <p className="mt-2 text-sm text-stone-600">
                  Attributed pipeline in 12 months.
                </p>
              </article>
              <article className={metricClass('delay-200')}>
                <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                  Campaign Velocity
                </p>
                <p className="mt-2 text-2xl font-bold text-stone-900">3.1x</p>
                <p className="mt-2 text-sm text-stone-600">
                  Faster concept-to-launch cycle.
                </p>
              </article>
              <article className={metricClass('delay-300')}>
                <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                  CAC Efficiency
                </p>
                <p className="mt-2 text-2xl font-bold text-stone-900">-34%</p>
                <p className="mt-2 text-sm text-stone-600">
                  Paid acquisition cost reduction.
                </p>
              </article>
              <article className={metricClass('delay-500')}>
                <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                  Team Enablement
                </p>
                <p className="mt-2 text-2xl font-bold text-stone-900">14</p>
                <p className="mt-2 text-sm text-stone-600">
                  Cross-functional playbooks deployed.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="pb-14">
          <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
            What I build
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Go-to-Market Architecture',
                text: 'Positioning, audience strategy, messaging hierarchy, and launch sequencing for category clarity.',
              },
              {
                title: 'Lifecycle Campaign Systems',
                text: 'Email, landing pages, and retargeting structures that adapt to user intent and improve conversion.',
              },
              {
                title: 'Creative Performance Lab',
                text: 'Rapid ad and content testing framework with insight loops that improve quality and speed.',
              },
            ].map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <p className="font-heading text-xl text-stone-900">{service.title}</p>
                <p className="mt-3 text-sm text-stone-600">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="pb-14">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
              Industry tracks
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.keys(tracks).map((track) => (
                <button
                  key={track}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    activeTrack === track
                      ? 'bg-stone-900 text-white shadow-md shadow-stone-400/30'
                      : 'border border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-900',
                  ].join(' ')}
                  onClick={() => setActiveTrack(track)}
                >
                  {track}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/60 p-5">
              <h3 className="font-heading text-2xl text-stone-900">
                {tracks[activeTrack].headline}
              </h3>
              <p className="mt-3 text-stone-700">{tracks[activeTrack].description}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <p className="rounded-xl bg-white px-4 py-3 text-sm text-stone-700">
                  {tracks[activeTrack].cvr}
                </p>
                <p className="rounded-xl bg-white px-4 py-3 text-sm text-stone-700">
                  {tracks[activeTrack].velocity}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="pb-14">
          <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
            Selected outcomes
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Fintech Product Launch',
                body: 'From pre-launch waitlist to paid acquisition with a blended content and paid media plan.',
                result: '11,000 qualified signups in 90 days',
              },
              {
                title: 'Consumer Brand Reposition',
                body: 'Rebuilt conversion path and moved from broad messaging to intent-led storytelling.',
                result: '67% lift in landing page conversion rate',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <p className="font-heading text-xl text-stone-900">{item.title}</p>
                <p className="mt-2 text-sm text-stone-600">{item.body}</p>
                <p className="mt-4 text-sm font-semibold text-amber-800">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-stone-200 bg-stone-900 px-6 py-10 text-white sm:px-8"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-amber-300">
            Let us build the next growth chapter
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
            Ready for a portfolio-level campaign engine?
          </h2>
          <p className="mt-3 max-w-2xl text-stone-300">
            Whether you need a go-to-market sprint or a longer-term growth
            partner, I can help your team move faster and convert better.
          </p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Work email"
              className="w-full rounded-full border border-stone-600 bg-stone-800 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-stone-400 focus:border-amber-300"
            />
            <button
              type="submit"
              className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-200"
            >
              Request Proposal
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default App
