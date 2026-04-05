import { useEffect, useState } from 'react'
import headshotImage from '../Hayden-22.jpeg'

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
  const [typedHeading, setTypedHeading] = useState('')

  const heroHeading = "Hey! I'm Hayden."
  const resumeViewPath = '/resume.html'
  const resumeDownloadPath = '/resume.pdf'
  const companyLogos = [
    { name: 'Boldsquare', src: '/Boldsquare.png' },
    { name: 'GE Appliances', src: '/GE.png' },
    { name: 'Beats by Dre', src: '/Beats.png' },
    { name: 'University of Tennessee', src: '/Tennessee.png' },
  ]

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
    const onHashChange = () => {
      const page = getPageFromHash()

      if (page === 'contact') {
        setActivePage('home')
        window.requestAnimationFrame(() => {
          const contactSection = document.getElementById('contact')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        })
      } else {
        setActivePage(page)
      }

      setMenuOpen(false)
    }

    onHashChange()
    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  useEffect(() => {
    if (activePage !== 'home') return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setTypedHeading(heroHeading)
      return
    }

    setTypedHeading('')
    let index = 0
    let stepTimer

    const startDelayTimer = window.setTimeout(() => {
      const typeNext = () => {
        index += 1
        const nextText = heroHeading.slice(0, index)
        setTypedHeading(nextText)

        if (index >= heroHeading.length) {
          return
        }

        const delay = nextText === 'Hey!' ? 520 : 70
        stepTimer = window.setTimeout(typeNext, delay)
      }

      typeNext()
    }, 700)

    return () => {
      window.clearTimeout(startDelayTimer)
      window.clearTimeout(stepTimer)
    }
  }, [activePage])

  const renderOverviewPage = () => (
    <>
      <section className="grid items-center gap-10 pb-14 pt-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Client-facing marketing strategy that's stress-free
          </p>
          <h1
            className="headline-reveal font-heading text-4xl leading-tight text-stone-100 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            {typedHeading}
            <span
              aria-hidden="true"
              className="typing-caret ml-1 inline-block h-[0.95em] w-[2px] bg-emerald-300 align-[-0.08em]"
            />
          </h1>
          <p className="max-w-xl text-base text-stone-300 sm:text-lg">
            With a broad spectrum of experience across agency execution, consumer insights, student engagement, and event leadership, I bring a versatile skill set to marketing challenges. I'm passionate about applying data-driven insights and creative problem-solving to help organizations connect with their audiences effectively.
          </p>
          <div className="action-stack">
            <a
              href={resumeViewPath}
              target="_blank"
              rel="noreferrer"
              className="swipe-btn swipe-btn--primary"
            >
              <span className="swipe-btn__label">View Resume</span>
            </a>
            <a
              href={resumeDownloadPath}
              download="Hayden-Cornett-Resume.pdf"
              className="swipe-btn swipe-btn--secondary"
            >
              <span className="swipe-btn__label">Download Resume</span>
            </a>
            <a
              href="#/contact"
              className="swipe-btn swipe-btn--tertiary"
            >
              <span className="swipe-btn__label">Contact Me</span>
            </a>
          </div>
        </div>

        <div className="sleek-surface overflow-hidden rounded-3xl p-4 sm:p-6">
          <div className="flex h-[460px] flex-col overflow-hidden rounded-2xl border border-emerald-400/30 md:h-[540px]">
            <div className="h-[85%] overflow-hidden">
              <img
                src={headshotImage}
                alt="Headshot of Hayden Cornett"
                loading="lazy"
                decoding="async"
                width="900"
                height="1125"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="carousel-fade-in logo-slider-panel logo-slider-fade h-[15%] border-t border-emerald-400/30 px-3 py-3 backdrop-blur">
              <div className="logo-slider-track">
                {[...companyLogos, ...companyLogos].map((logo, index) => (
                  <div key={`${logo.name}-${index}`} className="logo-pill">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="logo-pill__img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <h2
          className="headline-reveal font-heading text-3xl text-stone-100 sm:text-4xl"
          style={{ animationDelay: '120ms' }}
        >
          At a glance
        </h2>
        <div className="mt-6">
          <article className="sleek-surface rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-stone-400">
              Snapshot Summary
            </p>
            <h3 className="mt-2 font-heading text-2xl text-stone-100">
              High-performance student marketer with measurable impact.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              Experience spans agency execution, consumer insights, student
              engagement, and event leadership with results backed by concrete
              metrics across academics and organizations.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-stone-100">
                4.00 GPA at UT Haslam
             </p>
              <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-stone-100">
                Business Fellows Honors Program
              </p>
              <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-stone-100">
                MarTech certified at Boldsquare
              </p>
              <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-stone-100">
                Incoming GE Appliances intern
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-14">
        <h2
          className="headline-reveal font-heading text-3xl text-stone-100 sm:text-4xl"
          style={{ animationDelay: '180ms' }}
        >
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
              className="sleek-surface group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-emerald-300"
            >
              <p className="font-heading text-xl text-stone-100">{item.title}</p>
              <p className="mt-3 text-sm text-stone-300">{item.text}</p>
              <a
                href={item.href}
                className="mt-4 inline-block text-sm font-semibold text-emerald-300 underline underline-offset-4"
              >
                Explore this in detail
              </a>
            </article>
          ))}
        </div>
      </section>

      {renderContactPage()}
    </>
  )

  const renderEducationPage = () => (
    <section className="pb-14 pt-10">
      <h2
        className="headline-reveal font-heading text-3xl text-stone-100 sm:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
        Education Details
      </h2>
      <div className="sleek-surface mt-6 rounded-3xl p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
          The University of Tennessee, Knoxville - Haslam College of Business
        </p>
        <h3 className="mt-2 font-heading text-2xl text-stone-100">
          Bachelor of Science in Business Administration
        </h3>
        <p className="mt-1 text-sm text-stone-300">Graduation: May 2028</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200">
            Major: Marketing
          </p>
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200">
            Collateral: Supply Chain Management
          </p>
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200">
            Business Fellows Honors Program
          </p>
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200">
            UT Volunteer Scholarship
          </p>
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200">
            Cumulative GPA: 4.00/4.00
          </p>
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200">
            Dean's List: 2x Summa Cum Laude
          </p>
        </div>
      </div>
    </section>
  )

  const renderExperiencePage = () => (
    <section className="pb-14 pt-10">
      <h2
        className="headline-reveal font-heading text-3xl text-stone-100 sm:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
        Experience Details
      </h2>
      <div className="sleek-surface mt-6 rounded-3xl p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
          Professional Experience
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-[240px_1fr]">
          <div className="action-stack max-w-none">
            {Object.keys(roles).map((role) => (
              <button
                key={role}
                type="button"
                className={[
                  'swipe-btn swipe-btn--tab text-left',
                  activeRole === role ? 'is-active' : '',
                ].join(' ')}
                onClick={() => setActiveRole(role)}
              >
                <span className="swipe-btn__label">{role}</span>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/15 p-5">
            <h3 className="font-heading text-2xl text-stone-100">
              {roles[activeRole].title}
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              {roles[activeRole].location} | {roles[activeRole].timeline}
            </p>
            <div className="mt-4 space-y-3">
              {roles[activeRole].bullets.map((bullet) => (
                <p
                  key={bullet}
                  className="rounded-xl border border-emerald-500/20 bg-stone-900/45 px-4 py-3 text-sm text-stone-200"
                >
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const renderLeadershipPage = () => (
    <section className="pb-14 pt-10">
      <h2
        className="headline-reveal font-heading text-3xl text-stone-100 sm:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
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
            className="sleek-surface rounded-2xl p-5"
          >
            <p className="font-heading text-xl text-stone-100">{item.title}</p>
            <p className="mt-2 text-sm text-stone-300">{item.body}</p>
            <p className="mt-4 text-sm font-semibold text-emerald-300">
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
      className="mt-10 rounded-3xl border border-stone-800 bg-stone-900/95 px-6 py-10 text-white shadow-xl shadow-stone-900/30 sm:px-8"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
        How can I help your business?
      </p>
      <h2
        className="headline-reveal mt-3 font-heading text-3xl sm:text-4xl"
        style={{ animationDelay: '100ms' }}
      >
        Open to internships, mentorship, and marketing opportunities.
      </h2>
      <p className="mt-3 max-w-2xl text-stone-300">
        Reach out by email or LinkedIn to discuss internships, team projects,
        speaking opportunities, or career pathways in marketing and business.
      </p>
      <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
        <a
          href="mailto:hayden.cornett06@gmail.com"
          className="swipe-btn swipe-btn--primary"
        >
          <span className="swipe-btn__label">Email Hayden</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hayden-cornett/"
          target="_blank"
          rel="noreferrer"
          className="swipe-btn swipe-btn--secondary"
        >
          <span className="swipe-btn__label">View LinkedIn</span>
        </a>
      </div>
    </section>
  )

  const renderPage = () => {
    if (activePage === 'experience') return renderExperiencePage()
    if (activePage === 'education') return renderEducationPage()
    if (activePage === 'leadership') return renderLeadershipPage()
    return renderOverviewPage()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#1c1917_0,#111827_48%,#0a0a0a_100%)] text-stone-100">
      <div className="dot-pattern-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/4 rounded-full bg-emerald-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="glass-card animate-fade-in rounded-2xl border border-emerald-500/30 px-4 py-3 shadow-[0_18px_42px_rgba(0,0,0,0.45)] sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="nameplate-rigid text-2xl leading-none text-stone-100">
                Hayden Cornett
              </p>
            </div>

            <button
              className="sleek-outline inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold transition md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>

            <nav className="hidden items-center gap-5 text-sm font-medium text-stone-300 md:flex">
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#/${link.id}`}
                  className={[
                    'sleek-nav-link transition',
                    activePage === link.id ? 'is-active' : '',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/hayden-cornett/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Hayden's LinkedIn profile"
                className="sleek-outline rounded-full p-2 text-emerald-300 transition"
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
            <nav className="min-h-0 space-y-2 border-t border-emerald-500/30 pt-3 text-sm font-medium text-stone-300">
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  className={[
                    'block rounded-lg px-2 py-1.5 transition',
                    activePage === link.id
                      ? 'bg-emerald-500/20 text-emerald-200'
                      : 'hover:bg-emerald-500/10',
                  ].join(' ')}
                  href={`#/${link.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="block rounded-lg bg-emerald-700 px-2 py-2 text-center text-white shadow-md shadow-emerald-900/25"
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
