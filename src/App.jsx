import { useEffect, useState } from 'react'

const pageLinks = [
  { id: 'home', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

const getPageFromHash = () => {
  const hash = window.location.hash || '#/home'
  const page = hash.replace('#/', '')
  const valid = pageLinks.some((link) => link.id === page)
  return valid ? page : 'home'
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeRole, setActiveRole] = useState('Boldsquare')
  const [activePage, setActivePage] = useState('home')
  const [metricsLive, setMetricsLive] = useState(false)

  const roles = {
    Boldsquare: {
      title: 'Marketing Resident',
      location: 'Knoxville, TN',
      timeline: 'Jan 2026 - Present',
      bullets: [
        'Apply theoretical marketing knowledge in an Inc. 500 communications firm across project management, business development, and social media strategy.',
        'Manage full-cycle projects for non-profit and for-profit clients, including budget management, creative execution, and final business pitches.',
        'Earned a specialized MarTech certification to validate technical proficiency.',
      ],
    },
    'GE Appliances': {
      title: 'Incoming Commercial Development Intern',
      location: 'Louisville, KY',
      timeline: 'May 2026 - Aug 2026',
      bullets: [
        'Contributing to the national sales funnel of a $3B home microenterprise to help shape brand differentiation.',
      ],
    },
    'UT Ambassador': {
      title: 'Student Ambassador',
      location: 'Knoxville, TN',
      timeline: 'Feb 2025 - Present',
      bullets: [
        'Selected as 1 of 634 applicants (6% acceptance rate) to lead campus tours for 15-35 prospective students and families.',
        'Tailor messaging to audience needs, supporting stronger engagement during recruitment events.',
        'Host 2+ events such as Big Orange Preview and Rocky Top Tailgate for hands-on campus experiences.',
      ],
    },
    'Beats by Dre': {
      title: 'Consumer Insights & Market Research Analyst Extern',
      location: 'New York, NY (Remote)',
      timeline: 'Apr 2025 - May 2025',
      bullets: [
        'Delivered strategic recommendations on Gen Z audio preferences to Beats Consumer Insights using rigorous data analysis and trend research.',
        'Combined AI-powered systems, surveys, and statistical modeling to pitch product and marketing decisions for a global brand.',
      ],
    },
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMetricsLive(true)
    }, 400)

    const onHashChange = () => {
      setActivePage(getPageFromHash())
      setMenuOpen(false)
    }

    onHashChange()
    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const metricClass = (delay) =>
    [
      'rounded-2xl border border-emerald-100/80 bg-white/80 p-5 backdrop-blur transition-all duration-700 ease-out',
      metricsLive
        ? `translate-y-0 opacity-100 ${delay}`
        : 'translate-y-8 opacity-0',
    ].join(' ')

  const renderOverviewPage = () => (
    <>
      <section className="grid items-center gap-10 pb-14 pt-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">
            Client-facing marketing strategy that's stress-free
          </p>
          <h1 className="font-heading text-4xl leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Hey! I'm Hayden.
          </h1>
          <p className="max-w-xl text-base text-stone-600 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
            nibh non nulla aliquet ultricies. Quisque congue dignissim magna,
            vitae feugiat lacus dapibus id. Sed at diam quis leo cursus
            accumsan a a ipsum.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              View Resume
            </a>
            <a
              href="#/contact"
              className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-emerald-700 hover:text-emerald-800"
            >
              Contact Hayden
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200/80 bg-white p-4 shadow-xl shadow-emerald-100/50 sm:p-6">
          <img
            src="/headshot-placeholder.svg"
            alt="Headshot placeholder for Hayden Cornett"
            className="h-auto w-full rounded-2xl border border-emerald-100"
          />
        </div>
      </section>

      <section className="pb-14">
        <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
          At a glance
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className={metricClass('delay-100')}>
            <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
              Academic Excellence
            </p>
            <p className="mt-2 text-2xl font-bold text-stone-900">4.00 GPA</p>
            <p className="mt-2 text-sm text-stone-600">
              Haslam College of Business, UT Knoxville.
            </p>
          </article>
          <article className={metricClass('delay-200')}>
            <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
              Selective Leadership
            </p>
            <p className="mt-2 text-2xl font-bold text-stone-900">6% Admit</p>
            <p className="mt-2 text-sm text-stone-600">
              Selected as UT Student Ambassador.
            </p>
          </article>
          <article className={metricClass('delay-300')}>
            <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
              Community Impact
            </p>
            <p className="mt-2 text-2xl font-bold text-stone-900">115+</p>
            <p className="mt-2 text-sm text-stone-600">
              Students supported through fraternity systems.
            </p>
          </article>
          <article className={metricClass('delay-500')}>
            <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
              Mentorship Lift
            </p>
            <p className="mt-2 text-2xl font-bold text-stone-900">+25%</p>
            <p className="mt-2 text-sm text-stone-600">
              Growth in student mentorship participation.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-14">
        <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
          What I offer
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Marketing Strategy',
              text: 'Audience-aware messaging, project planning, and campaign positioning backed by client context.',
              href: '#/experience',
            },
            {
              title: 'Consumer Insights',
              text: 'Survey design, trend analysis, and recommendation frameworks informed by data and modeling.',
              href: '#/experience',
            },
            {
              title: 'Leadership Execution',
              text: 'Event architecture, engagement systems, and practical operations across student organizations.',
              href: '#/leadership',
            },
            {
              title: 'Professional Presence',
              text: 'Tour leadership, stakeholder communication, and polished presentation delivery under deadlines.',
              href: '#/leadership',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <p className="font-heading text-xl text-stone-900">{item.title}</p>
              <p className="mt-3 text-sm text-stone-600">{item.text}</p>
              <a
                href={item.href}
                className="mt-4 inline-block text-sm font-semibold text-emerald-700 underline underline-offset-4"
              >
                Explore this in detail
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )

  const renderEducationPage = () => (
    <section className="pb-14 pt-10">
      <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
        Education Details
      </h2>
      <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
          The University of Tennessee, Knoxville - Haslam College of Business
        </p>
        <h3 className="mt-2 font-heading text-2xl text-stone-900">
          Bachelor of Science in Business Administration
        </h3>
        <p className="mt-1 text-sm text-stone-600">Graduation: May 2028</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-stone-700">
            Major: Marketing
          </p>
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-stone-700">
            Collateral: Supply Chain Management
          </p>
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-stone-700">
            Business Fellows Honors Program
          </p>
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-stone-700">
            UT Volunteer Scholarship
          </p>
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-stone-700">
            Cumulative GPA: 4.00/4.00
          </p>
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-stone-700">
            Dean's List: 2x Summa Cum Laude
          </p>
        </div>
      </div>
    </section>
  )

  const renderExperiencePage = () => (
    <section className="pb-14 pt-10">
      <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
        Experience Details
      </h2>
      <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
          Professional Experience
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.keys(roles).map((role) => (
            <button
              key={role}
              className={[
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                activeRole === role
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-300/40'
                  : 'border border-stone-300 bg-white text-stone-700 hover:border-emerald-700 hover:text-emerald-800',
              ].join(' ')}
              onClick={() => setActiveRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
          <h3 className="font-heading text-2xl text-stone-900">
            {roles[activeRole].title}
          </h3>
          <p className="mt-2 text-sm text-stone-600">
            {roles[activeRole].location} | {roles[activeRole].timeline}
          </p>
          <div className="mt-4 space-y-3">
            {roles[activeRole].bullets.map((bullet) => (
              <p
                key={bullet}
                className="rounded-xl bg-white px-4 py-3 text-sm text-stone-700"
              >
                {bullet}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

  const renderLeadershipPage = () => (
    <section className="pb-14 pt-10">
      <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
        Leadership Details
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          {
            title: 'Business Honors Council - Advisory Council Member',
            body: 'Crafting engagement events for around 1,000 honors business students and improving access to faculty, administration, and recruiting organizations.',
            result:
              'Focused on bridging top student talent with strategic college stakeholders.',
          },
          {
            title: 'Delta Sigma Pi - Faculty Relations and VP Roles',
            body: 'Directed faculty-student networking operations, scholarship incentives, and pledge education systems for a large member base.',
            result:
              'Improved mentorship participation by 25% and supported retention and engagement for 115+ students.',
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-stone-200 bg-white p-5"
          >
            <p className="font-heading text-xl text-stone-900">{item.title}</p>
            <p className="mt-2 text-sm text-stone-600">{item.body}</p>
            <p className="mt-4 text-sm font-semibold text-emerald-800">
              {item.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  )

  const renderContactPage = () => (
    <section
      id="contact"
      className="mt-10 rounded-3xl border border-stone-200 bg-stone-900 px-6 py-10 text-white sm:px-8"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
        Let's connect
      </p>
      <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
        Open to internships, mentorship, and marketing opportunities.
      </h2>
      <p className="mt-3 max-w-2xl text-stone-300">
        Reach out by email or LinkedIn to discuss internships, team projects,
        speaking opportunities, or career pathways in marketing and business.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:hayden.cornett06@gmail.com"
          className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-emerald-200"
        >
          Email Hayden
        </a>
        <a
          href="https://www.linkedin.com/in/hayden-cornett/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-stone-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300"
        >
          View LinkedIn
        </a>
      </div>
    </section>
  )

  const renderPage = () => {
    if (activePage === 'experience') return renderExperiencePage()
    if (activePage === 'education') return renderEducationPage()
    if (activePage === 'leadership') return renderLeadershipPage()
    if (activePage === 'contact') return renderContactPage()
    return renderOverviewPage()
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_5%,#d1fae5_0,#ecfdf5_45%,#ffffff_100%)] text-stone-800">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/4 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="glass-card animate-fade-in rounded-2xl border border-emerald-100/80 px-4 py-3 shadow-sm sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-heading text-2xl leading-none tracking-tight text-stone-900">
                Hayden Cornett
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-700">
                Marketing Portfolio
              </p>
            </div>

            <button
              className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>

            <nav className="hidden items-center gap-5 text-sm font-medium text-stone-700 md:flex">
              {pageLinks.map((link) => (
                <a key={link.id} href={`#/${link.id}`} className="transition hover:text-stone-950">
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/hayden-cornett/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Hayden's LinkedIn profile"
                className="rounded-full border border-emerald-300 p-2 text-emerald-800 transition hover:bg-emerald-100"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12a1.56 1.56 0 0 1 0 3.12ZM5.5 9.72h2.9V19H5.5V9.72Zm4.72 0h2.78v1.27h.04c.39-.73 1.33-1.5 2.73-1.5c2.92 0 3.46 1.92 3.46 4.42V19h-2.9v-4.48c0-1.07-.02-2.45-1.49-2.45c-1.5 0-1.73 1.17-1.73 2.37V19h-2.9V9.72Z"
                  />
                </svg>
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
            <nav className="min-h-0 space-y-2 border-t border-emerald-100 pt-3 text-sm font-medium text-stone-700">
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  className="block rounded-lg px-2 py-1.5 hover:bg-emerald-50"
                  href={`#/${link.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="block rounded-lg bg-emerald-700 px-2 py-2 text-center text-white"
                href="https://www.linkedin.com/in/hayden-cornett/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </header>

        {renderPage()}
      </div>
    </main>
  )
}

export default App
