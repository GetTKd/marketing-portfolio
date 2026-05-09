// npm run dev -- --host 0.0.0.0 --port 5173

import { useEffect, useState } from 'react'
const headshotImage = '/Headshot.jpeg'

const pageLinks = [
  { id: 'home', label: 'Overview' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

const getPathForPage = (page) => (page === 'home' ? '/' : `/${page}`)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeRole, setActiveRole] = useState('Boldsquare')
  const [activePage, setActivePage] = useState('home')
  const [typedHeading, setTypedHeading] = useState('')
  const [headerOpacity, setHeaderOpacity] = useState(0.5)
  const [headerHovered, setHeaderHovered] = useState(false)
  const [lightboxMedia, setLightboxMedia] = useState(null)

  const heroHeading = "Hey! I'm Hayden."
  const resumeViewPath = '/resume.pdf'
  const resumeDownloadPath = '/resume.pdf'
  const profileHighlights = [
    { label: 'Location', value: 'Knoxville, TN' },
    { label: 'Focus', value: 'Brand strategy + consumer insights' },
    { label: 'Tools', value: 'Excel, Notion, SQL' },
  ]
  const topSkills = ['Microsoft Excel', 'Notion', 'Stakeholder Relations']
  const certifications = [
    'Communicating with Confidence',
    'Sales Enablement',
    'Critical Thinking with Excel',
    'SQL Essential Training',
  ]
  const honors = [
    'UT Volunteer Scholarship',
    'McClung Public Speaking Competition - 2nd Place',
  ]
  const companyLogos = [
    { name: 'Boldsquare', src: '/Boldsquare.png' },
    { name: 'GE Appliances', src: '/GE.png' },
    { name: 'Beats by Dre', src: '/Beats.png' },
    { name: 'University of Tennessee', src: '/Tennessee.png' },
  ]
  const portfolioDecks = [
    {
      title: 'Featured Slide Deck',
      summary: 'A visual snapshot of strategy and creative storytelling work.',
      embedSrc:
        'https://www.canva.com/design/DAHH-aQ6AM4/G2jrgs_60xO6w8rRghLQ7A/view?embed',
      viewHref:
        'https://www.canva.com/design/DAHH-aQ6AM4/G2jrgs_60xO6w8rRghLQ7A/view',
    },
    {
      title: 'Brand Book',
      summary: 'A foundational brand identity guide for the same client.',
      embedSrc:
        'https://www.canva.com/design/DAHH-fKSM9U/yqQfmF8CbZAm_CS1GE1F9A/view?embed',
      viewHref:
        'https://www.canva.com/design/DAHH-fKSM9U/yqQfmF8CbZAm_CS1GE1F9A/view',
    },
  ]
  const supaTournamentMedia = [
    {
      fileName: 'Triple Rumble Season 1',
      src: '/Triple Rumble Season 1 Stinger.webm',
      description:
        'The first SUPA Triple Rumble stinger, introducing the battle royale format and tournament branding.',
    },
    {
      fileName: 'Triple Rumble Season 2',
      src: '/Triple Rumble Season 2 Stinger.mp4',
      description:
        'The second SUPA Triple Rumble stinger, continuing the tournament identity across the follow-up season.',
    },
    {
      fileName: 'Clash of the Atlantic',
      src: '/Clash of the Atlantic Stinger.webm',
      description:
        'A North America vs Europe tournament to support a UK-based suicide prevention charity while promoting the Beat Saber community.',
    },
  ]

  const roles = {
    Boldsquare: {
      title: 'Marketing and Communications Intern',
      location: 'Knoxville, TN',
      timeline: 'Jan 2026 - May 2026',
      bullets: [
        'Selected for an intensive semester-long experience at Boldsquare, an Inc. 5000 strategic communications firm, through the Haslam College of Business.',
        'Managed full-cycle projects for multiple nonprofit and for-profit clients, contributing to budget management, creative execution, and final business pitches.',
        'Completed a specialized MarTech certification to validate technical proficiency.',
      ],
    },
    'GE Appliances': {
      title: 'Incoming Bodewell Division Marketing Intern',
      location: 'Louisville, KY',
      timeline: 'Summer 2026',
      bullets: [
        'Joining a team responsible for bringing the Bodewell brand to life across commercial-facing channels and go-to-market execution.',
        'Improving affiliate and partnership reporting to drive more efficient analytics and optimize customer acquisition.',
        'Leveraging user-generated content and consumer reviews to strengthen brand trust and increase conversion across digital channels.',
      ],
    },
    'UT Ambassador': {
      title: 'Student Ambassador',
      location: 'Knoxville, TN',
      timeline: 'Feb 2025 - Present',
      bullets: [
        'Selected as 1 of 634 applicants to lead campus tours for 15-35 prospective students, families, and VIPs.',
        'Adapting messaging to audience needs and contributing to higher engagement during recruitment events.',
        'Hosting 2+ events, including Big Orange Preview and Rocky Top Tailgate, to give visitors a hands-on college sneak peek.',
      ],
    },
    'Beats by Dre': {
      title: 'Consumer Insights & Market Research Analyst Extern',
      location: 'Remote',
      timeline: 'Apr 2025 - Jun 2025',
      bullets: [
        'Delivered strategic recommendations on Gen Z audio preferences to Beats leadership using rigorous data analysis and trend research.',
        'Combined AI-powered systems, surveys, and statistical modeling to pitch product and marketing decisions for a global brand.',
        'Presented the final deck to Beats\' Head of Consumer Insights.',
      ],
    },
  }

  const emergingLeadersFeature = {
    title: 'Emerging Leaders - ELPS 310',
    subtitle: 'Spring 2026 Cohort',
    body: 'Emerging Leaders is a 3-credit elective in the Leadership Studies minor that is open to all students. The course explores leadership theory and application while building emotionally intelligent leaders through class discussion, applied learning, and an off-campus leadership experience.',
    details: [
      'Eligibility is limited to full-time sophomores in good academic standing with a minimum 2.5 GPA.',
      'The Spring 2026 cohort includes an interview-based application process and a mandatory March 2026 trip.',
      'Course topics include change management, emotional intelligence, and adaptive leadership.',
    ],
    imageSrc: '/University%20Systems.png',
    imageAlt: 'Emerging Leaders project poster about student technology advocacy',
    result: 'Portfolio showcase: Revisiting student technology advocacy',
  }

  const leadershipCards = [
    {
      title: 'UTK Business Honors Council - Vice President of Professional Development',
      body: 'Serving on the executive board and leading professional development programming that connects honors business students with recruiters, industry professionals, and career resources.',
      result: 'Focused on building access to high-value networking and career readiness opportunities.',
    },
    {
      title: 'Delta Sigma Pi - Senior Vice President',
      body: 'Orchestrating recruitment rounds with 200+ interested students and serving as a primary point of contact from initial engagement through onboarding.',
      result: 'Helped refresh dated systems, optimize brotherhood expenses by over 40%, and improve the member experience.',
    },
  ]

  const openLightbox = (media) => {
    setLightboxMedia(media)
  }

  const closeLightbox = () => {
    setLightboxMedia(null)
  }

  useEffect(() => {
    // Handle 404.html redirect for direct URL access on GitHub Pages
    const redirect = sessionStorage.redirect
    if (redirect) {
      delete sessionStorage.redirect
      window.history.replaceState({}, '', redirect)
    }
  }, [])

  useEffect(() => {
    if (!lightboxMedia) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxMedia])

  useEffect(() => {
    const syncPageFromPath = (replaceInvalid = false) => {
      const segment = window.location.pathname.replace(/^\/+|\/+$/g, '')
      const nextPage = segment || 'home'
      const valid = pageLinks.some((link) => link.id === nextPage)

      if (!valid) {
        setActivePage('home')
        if (replaceInvalid) {
          window.history.replaceState({}, '', '/')
        }
        return
      }

      setActivePage(nextPage)
      setMenuOpen(false)
    }

    syncPageFromPath(true)

    const onPopState = () => {
      syncPageFromPath(false)
    }

    window.addEventListener('popstate', onPopState)
    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  const navigateToPage = (page) => {
    const nextPath = getPathForPage(page)
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }

    setActivePage(page)
    if (page !== 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    setMenuOpen(false)
  }

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

  const renderLightbox = () => {
    if (!lightboxMedia) return null

    return (
      <div
        className="media-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 px-4 py-8 backdrop-blur-md"
        role="presentation"
        onClick={closeLightbox}
      >
        <div
          className="media-lightbox__panel relative w-full max-w-5xl rounded-3xl border border-emerald-500/30 bg-stone-950/95 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.65)] sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxMedia.title}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full border border-emerald-500/30 bg-stone-950/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-stone-100 transition hover:border-emerald-300 hover:text-emerald-200"
            onClick={closeLightbox}
          >
            Close
          </button>

          <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-black/50">
            {lightboxMedia.type === 'image' ? (
              <img
                src={lightboxMedia.src}
                alt={lightboxMedia.alt}
                className="block max-h-[82vh] w-full object-contain"
              />
            ) : lightboxMedia.type === 'video' ? (
              <video
                src={lightboxMedia.src}
                className="block max-h-[82vh] w-full bg-black object-contain"
                
                autoPlay
                muted
                playsInline
              />
            ) : (
              <div className="aspect-video w-full">
                {(() => {
                  const isCanvaEmbed =
                    lightboxMedia && typeof lightboxMedia.src === 'string' &&
                    lightboxMedia.src.includes('canva.com')

                  return (
                    <iframe
                      title={lightboxMedia.title}
                      src={lightboxMedia.src}
                      loading="lazy"
                      allow="fullscreen; autoplay; encrypted-media; clipboard-write"
                      allowFullScreen={isCanvaEmbed}
                      className={isCanvaEmbed ? 'h-full w-full' : 'h-full w-full pointer-events-none'}
                    />
                  )
                })()}
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-start justify-between gap-3 px-1 pb-1">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                {lightboxMedia.kicker}
              </p>
              <h3 className="mt-2 font-heading text-2xl text-stone-100">
                {lightboxMedia.title}
              </h3>
            </div>
            {lightboxMedia.caption ? (
              <p className="max-w-xl text-sm text-stone-300">
                {lightboxMedia.caption}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    )
  }

  const renderOverviewPage = () => (
    <section className="flex min-h-[calc(100vh-11rem)] items-center pb-14 pt-8 sm:pt-10">
      <div className="grid w-full items-center gap-6 sm:gap-8 md:gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Honors marketing and data science student
          </p>
          <h1
            className="headline-reveal font-heading text-3xl leading-tight text-stone-100 xs:text-4xl sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            {typedHeading}
            <span
              aria-hidden="true"
              className="typing-caret ml-1 inline-block h-[0.95em] w-[2px] bg-emerald-300 align-[-0.08em]"
            />
          </h1>
          <p className="max-w-xl text-sm text-stone-300 sm:text-base lg:text-lg">
            I&apos;m a second-year honors marketing and data science student at the University of Tennessee in Knoxville, focused on turning data into direction through brand strategy, consumer insights, and stakeholder relationships.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {profileHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-emerald-500/20 bg-stone-950/35 px-4 py-3"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-emerald-300">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-stone-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="action-stack">
            <div className="swipe-btn swipe-btn--primary resume-split" role="group" aria-label="Resume actions">
              <span className="resume-split__label">Resume:</span>
              <a
                href={resumeViewPath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-split__link"
              >
                View
              </a>
              <span className="resume-split__divider">|</span>
              <a
                href={resumeDownloadPath}
                download="Hayden-Cornett-Resume.pdf"
                className="resume-split__link"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="sleek-surface overflow-hidden rounded-3xl p-4 sm:p-6">
          <div className="flex h-[460px] flex-col overflow-hidden rounded-2xl border border-emerald-400/30 md:h-[540px]">
            <div className="h-[85%] overflow-hidden">
              <img
                src={headshotImage}
                srcSet={`${headshotImage} 900w`}
                sizes="(max-width: 640px) 100vw, 50vw"
                alt="Headshot of Hayden Cornett"
                loading="lazy"
                decoding="async"
                width="900"
                height="1125"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="carousel-fade-in logo-slider-panel logo-slider-fade h-[15%] border-t border-emerald-400/30 px-3 py-3 backdrop-blur">
              <div className="logo-slider-track">
                {[...companyLogos, ...companyLogos].map((logo, index) => (
                  <div key={`${logo.name}-${index}`} className="logo-pill">
                    <button
                      type="button"
                      className="logo-pill__button"
                      aria-label={`View ${logo.name} logo larger`}
                      onClick={() =>
                        openLightbox({
                          type: 'image',
                          src: logo.src,
                          alt: logo.name,
                          title: logo.name,
                          kicker: 'Brand logo',
                          caption: 'Logo asset shown in the rotating client strip.',
                        })
                      }
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="logo-pill__img"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const renderEducationPage = () => (
    <section className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-4xl flex-col items-center justify-center py-10">
      <h2
        className="headline-reveal font-heading text-center text-2xl text-stone-100 sm:text-3xl md:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
        Education
      </h2>
      <div className="sleek-surface mt-6 w-full rounded-3xl p-6 sm:p-8">
        <p className="text-center text-xs uppercase tracking-[0.16em] text-stone-400">
          The University of Tennessee, Knoxville - Haslam College of Business
        </p>
        <h3 className="mt-2 text-center font-heading text-2xl text-stone-100">
          Bachelor of Science in Business Administration, Marketing
        </h3>
        <p className="mt-1 text-center text-sm text-stone-300">
          June 2024 - May 2028 | Honors student with a growing data science focus
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Marketing major with data-driven decision-making interests',
            'UT Volunteer Scholarship',
            'McClung Public Speaking Competition - 2nd Place',
            'Knoxville, TN',
          ].map((item) => (
            <p
              key={item}
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-stone-200"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )

  const renderExperiencePage = () => (
    <section className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-5xl flex-col items-center justify-center py-10">
      <h2
        className="headline-reveal font-heading text-center text-2xl text-stone-100 sm:text-3xl md:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
        Experience Details
      </h2>
      <div className="sleek-surface mt-6 w-full rounded-3xl p-6 sm:p-8">
        <p className="text-center text-xs uppercase tracking-[0.16em] text-stone-400">
          Professional Experience
        </p>
        <div className="mt-5 grid gap-4 sm:gap-5 md:grid-cols-[240px_1fr]">
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
    <section className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-5xl flex-col items-center justify-center py-10">
      <h2
        className="headline-reveal font-heading text-center text-2xl text-stone-100 sm:text-3xl md:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
        Leadership Details
      </h2>
      <div className="sleek-surface mt-6 w-full overflow-hidden rounded-3xl border border-emerald-500/20 p-4 sm:p-5 md:p-6">
        <div className="grid gap-4 sm:gap-5 lg:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-center text-xs uppercase tracking-[0.16em] text-emerald-300 lg:text-left">
              {emergingLeadersFeature.subtitle}
            </p>
            <h3 className="mt-2 text-center font-heading text-xl text-stone-100 sm:text-2xl md:text-3xl lg:text-left">
              {emergingLeadersFeature.title}
            </h3>
            <p className="mt-3 text-center text-sm text-stone-300 sm:text-base lg:text-left">
              {emergingLeadersFeature.body}
            </p>
            <div className="mt-4 space-y-3">
              {emergingLeadersFeature.details.map((detail) => (
                <p
                  key={detail}
                  className="rounded-xl border border-emerald-500/20 bg-stone-900/45 px-4 py-3 text-sm text-stone-200"
                >
                  {detail}
                </p>
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-emerald-300 lg:text-left">
              {emergingLeadersFeature.result}
            </p>
          </div>

          <button
            type="button"
            className="group overflow-hidden rounded-2xl border border-emerald-500/30 bg-stone-950/40 text-left transition hover:-translate-y-0.5 hover:border-emerald-300"
            aria-label="View Emerging Leaders poster larger"
            onClick={() =>
              openLightbox({
                type: 'image',
                src: emergingLeadersFeature.imageSrc,
                alt: emergingLeadersFeature.imageAlt,
                title: emergingLeadersFeature.title,
                kicker: emergingLeadersFeature.subtitle,
                caption: emergingLeadersFeature.result,
              })
            }
          >
            <img
              src={emergingLeadersFeature.imageSrc}
              alt={emergingLeadersFeature.imageAlt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain"
            />
          </button>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
        {leadershipCards.map((item) => (
          <article
            key={item.title}
            className="sleek-surface rounded-2xl p-5"
          >
            <p className="font-heading text-lg text-stone-100 sm:text-xl">{item.title}</p>
            <p className="mt-2 text-sm text-stone-300">{item.body}</p>
            <p className="mt-4 text-sm font-semibold text-emerald-300">
              {item.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  )

  const renderPortfolioPage = () => (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center pb-14 pt-8 sm:pt-10">
      <h2
        className="headline-reveal font-heading text-center text-2xl text-stone-100 sm:text-3xl md:text-4xl"
        style={{ animationDelay: '120ms' }}
      >
        Portfolio
      </h2>
      <p className="mt-3 max-w-3xl text-center text-xs text-stone-300 sm:text-sm md:text-base">
        A compact collection of client and tournament work. Open each section to view supporting details and media.
      </p>
      <p className="mt-3 text-center text-xs text-stone-400/90">
        *All featured materials have been approved for public use and adapted for easier viewing.
      </p>

      <div className="mt-6 w-full space-y-4">
        <details className="sleek-surface overflow-hidden rounded-3xl border border-emerald-500/20">
          <summary className="cursor-pointer list-none px-4 py-4 outline-none focus:outline-none focus-visible:outline-none sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">Conference Presentation</p>
                <h3 className="mt-2 font-heading text-2xl text-stone-100">UT Marketing Sales Conference</h3>
                <p className="mt-2 max-w-3xl text-sm text-stone-300">
                  Strategic marketing presentation developed for the University of Tennessee marketing sales conference. New name and graphics blacked out for confidentiality.
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 px-4 py-1 text-2xl leading-none text-emerald-200" aria-hidden="true">
                ↓
              </span>
            </div>
          </summary>

          <div className="portfolio-panel px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-stone-950/40 p-2 sm:p-3 md:p-4">
              <button
                type="button"
                className="group relative w-full aspect-video overflow-hidden rounded-xl border border-emerald-500/30 bg-stone-900/40 text-left transition hover:border-emerald-300"
                aria-label="View UT Marketing Sales Conference presentation larger"
                onClick={() =>
                  openLightbox({
                    type: 'embed',
                    src: 'https://www.canva.com/design/DAHJAVzKGOs/sg7ZqcT51sd7wBeCHn4pSA/view?embed',
                    title: 'UT Marketing Sales Conference',
                    kicker: 'Portfolio deck',
                    caption: 'Strategic marketing presentation developed for the University of Tennessee marketing sales conference. New name and graphics blacked out for confidentiality.',
                  })
                }
              >
                <iframe
                  title="UT Marketing Sales Conference embed"
                  src="https://www.canva.com/design/DAHJAVzKGOs/sg7ZqcT51sd7wBeCHn4pSA/view?embed"
                  loading="lazy"
                  allow="fullscreen"
                  className="pointer-events-none h-full w-full"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </details>

        <details className="sleek-surface overflow-hidden rounded-3xl border border-emerald-500/20">
          <summary className="cursor-pointer list-none px-4 py-4 outline-none focus:outline-none focus-visible:outline-none sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">Product Strategy</p>
                <h3 className="mt-2 font-heading text-lg sm:text-xl md:text-2xl text-stone-100">Ascendco</h3>
                <p className="mt-2 max-w-3xl text-sm text-stone-300">
                  Naming strategy and launch campaign for sterile hardware-processing software with embedded AI capabilities.
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 px-4 py-1 text-2xl leading-none text-emerald-200" aria-hidden="true">
                ↓
              </span>
            </div>
          </summary>

          <div className="portfolio-panel px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1fr_3fr]">
              <div className="rounded-2xl border border-emerald-500/30 bg-stone-950/40 p-2 sm:p-3 md:p-4 flex flex-col">
                <p className="font-heading text-base sm:text-lg text-stone-100 mb-2 sm:mb-3">Sizzle Post Mockup</p>
                <button
                  type="button"
                  className="group relative flex-1 overflow-hidden rounded-xl border border-emerald-500/30 bg-stone-900/40 p-2 text-left transition hover:border-emerald-300"
                  aria-label="View Ascendco mockup larger"
                  onClick={() =>
                    openLightbox({
                      type: 'video',
                      src: '/Ascendco Mockup.mp4',
                      title: 'Ascendco Sizzle Post Mockup',
                      kicker: 'Portfolio video',
                      caption: 'A looping mockup used in the Ascendco launch strategy.',
                    })
                  }
                >
                  <video
                    src="/Ascendco Mockup.mp4"
                    className="pointer-events-none w-auto h-full scale-125 rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    controls={false}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </button>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-stone-950/40 p-2 sm:p-3 md:p-4">
                <p className="font-heading text-base sm:text-lg text-stone-100 mb-2 sm:mb-3">Launch Strategy Pitch</p>
                <button
                  type="button"
                  className="group relative aspect-video overflow-hidden rounded-xl border border-emerald-500/30 bg-stone-900/40 text-left transition hover:border-emerald-300"
                  aria-label="View Ascendco launch strategy pitch larger"
                  onClick={() =>
                    openLightbox({
                      type: 'embed',
                      src: 'https://www.canva.com/design/DAHI5GC2Qbs/GBW1o1R9l84RFwVhiqvcUA/view?embed',
                      title: 'Ascendco launch strategy pitch',
                      kicker: 'Portfolio deck',
                      caption: 'The embedded pitch deck opens larger in the lightbox.',
                    })
                  }
                >
                  <iframe
                    title="Ascendco launch strategy pitch embed"
                    src="https://www.canva.com/design/DAHI5GC2Qbs/GBW1o1R9l84RFwVhiqvcUA/view?embed"
                    loading="lazy"
                    allow="fullscreen"
                    className="pointer-events-none h-full w-full"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </div>
        </details>

        <details className="sleek-surface overflow-hidden rounded-3xl border border-emerald-500/20">
          <summary className="cursor-pointer list-none px-4 py-4 outline-none focus:outline-none focus-visible:outline-none sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">Client Advising</p>
                <h3 className="mt-2 font-heading text-2xl text-stone-100">The Mountain Mile</h3>
                <p className="mt-2 max-w-3xl text-sm text-stone-300">
                  The Mountain Mile Mall sought to elevate its positioning in the greater Pigeon Forge area through a clearer brand story, stronger visual identity, and more differentiated market presence.
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 px-4 py-1 text-2xl leading-none text-emerald-200" aria-hidden="true">
                ↓
              </span>
            </div>
          </summary>

          <div className="portfolio-panel px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
              {portfolioDecks.map((deck) => (
                <div key={deck.embedSrc} className="rounded-2xl border border-emerald-500/30 bg-stone-950/40 p-2 sm:p-3 md:p-4 flex flex-col">
                  <div className="mb-2 sm:mb-3">
                    <p className="font-heading text-base sm:text-lg md:text-xl text-stone-100">{deck.title}</p>
                    <p className="mt-1 text-xs sm:text-sm text-stone-300">{deck.summary}</p>
                  </div>

                  <button
                    type="button"
                    className="group relative h-48 w-full overflow-hidden rounded-xl border border-emerald-500/30 bg-stone-900/40 text-left transition hover:border-emerald-300"
                    aria-label={`View ${deck.title} larger`}
                    onClick={() =>
                      openLightbox({
                        type: 'embed',
                        src: deck.embedSrc,
                        title: deck.title,
                        kicker: 'Portfolio deck',
                        caption: deck.summary,
                      })
                    }
                  >
                    <iframe
                      title={`${deck.title} embed`}
                      src={deck.embedSrc}
                      loading="lazy"
                      allow="fullscreen"
                      className="pointer-events-none h-full w-full"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </details>

        <details className="sleek-surface overflow-hidden rounded-3xl border border-emerald-500/20">
          <summary className="cursor-pointer list-none px-4 py-4 outline-none focus:outline-none focus-visible:outline-none sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">Nonprofit Strategy</p>
                <h3 className="mt-2 font-heading text-2xl text-stone-100">Homes of Love</h3>
                <p className="mt-2 max-w-3xl text-sm text-stone-300">
                  A release strategy for a new support box designed to support children in Vietnam.
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 px-4 py-1 text-2xl leading-none text-emerald-200" aria-hidden="true">
                ↓
              </span>
            </div>
          </summary>

          <div className="portfolio-panel px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-stone-950/40 p-2 sm:p-3 md:p-4">
              <button
                type="button"
                className="group relative w-full aspect-video overflow-hidden rounded-xl border border-emerald-500/30 bg-stone-900/40 text-left transition hover:border-emerald-300"
                aria-label="View Homes of Love release strategy larger"
                onClick={() =>
                  openLightbox({
                    type: 'embed',
                    src: 'https://www.canva.com/design/DAHBnMl3ASI/pK7FBtxLq_bpTVQgOPFq_g/view?embed',
                    title: 'Homes of Love release strategy',
                    kicker: 'Portfolio deck',
                    caption: 'The embedded nonprofit strategy deck opens larger in the lightbox.',
                  })
                }
              >
                <iframe
                  title="Homes of Love release strategy embed"
                  src="https://www.canva.com/design/DAHBnMl3ASI/pK7FBtxLq_bpTVQgOPFq_g/view?embed"
                  loading="lazy"
                  allow="fullscreen"
                  className="pointer-events-none h-full w-full"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </details>

        <details className="sleek-surface overflow-hidden rounded-3xl border border-emerald-500/20">
          <summary className="cursor-pointer list-none px-4 py-4 outline-none focus:outline-none focus-visible:outline-none sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center lg:justify-between lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">Tournament Platform</p>
                <h3 className="mt-2 font-heading text-2xl text-stone-100">Livestream Content Development (SUPA Tournaments)</h3>
                <p className="mt-2 max-w-3xl text-sm text-stone-300">
                  Organizer and head of content/development for a brand new tournament platform built to create experimental Beat Saber formats.
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 px-4 py-1 text-2xl leading-none text-emerald-200" aria-hidden="true">
                ↓
              </span>
            </div>
          </summary>

          <div className="portfolio-panel px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-stone-950/30 px-4 py-3 text-sm text-stone-300">
              <p className="font-semibold text-stone-100">Project context</p>
              <p className="mt-2">
                SUPA Tournaments was founded by an international team to experiment with the tournament scene of the world's highest-rated virtual reality game, Beat Saber. In my role, I was responsible for front-end live development, live organization, and creative mockups. Below are the projects we worked on as a team, with supporting visuals. Additional visuals and overlays are available upon request.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:gap-4 lg:grid-cols-3">
              {supaTournamentMedia.map((media) => (
                <article
                  key={media.fileName}
                  className="rounded-2xl border border-emerald-500/30 bg-stone-950/40 p-2 sm:p-3 md:p-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                    Tournament Media
                  </p>
                  <h4 className="mt-2 font-heading text-base sm:text-lg text-stone-100">
                    {media.fileName}
                  </h4>
                  <p className="mt-1 text-sm text-stone-300">{media.description}</p>

                  <button
                    type="button"
                    className="group relative mt-4 aspect-video overflow-hidden rounded-xl border border-emerald-500/30 bg-stone-900/40 text-left transition hover:border-emerald-300"
                    aria-label={`View ${media.fileName} larger`}
                    onClick={() =>
                      openLightbox({
                        type: 'video',
                        src: media.src,
                        title: media.fileName,
                        kicker: 'Tournament video',
                        caption: media.description,
                      })
                    }
                  >
                    <video
                      src={media.src}
                      className="pointer-events-none h-full w-full object-cover object-center"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      controls={false}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  )


  const renderContactPage = () => (
    <section
      id="contact"
      className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-6xl items-center py-10"
    >
      <div className="grid w-full gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="sleek-surface overflow-hidden rounded-3xl border border-emerald-500/20 p-6 sm:p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Contact
          </p>
          <h2
            className="headline-reveal mt-3 max-w-2xl font-heading text-3xl leading-tight text-stone-100 sm:text-4xl md:text-5xl"
            style={{ animationDelay: '100ms' }}
          >
            Let&apos;s turn strong data into sharper marketing decisions.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-stone-300 sm:text-base md:text-lg">
            Reach out if you&apos;re looking for a marketing student who can pair
            Excel, stakeholder relations, and consumer insight with clean
            communication and collaborative execution.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-stone-200">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              Brand strategy
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              Consumer insights
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              Stakeholder relations
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-stone-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                Top skills
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {topSkills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-stone-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                Certifications
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {certifications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-stone-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                Languages
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-stone-200">
                  Spanish (Elementary)
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-stone-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
                Honors
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {honors.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sleek-surface flex flex-col justify-between rounded-3xl border border-emerald-500/20 p-6 sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
              Direct contact
            </p>
            <h3 className="mt-3 font-heading text-2xl text-stone-100 sm:text-3xl">
              Reach out here.
            </h3>
            <p className="mt-3 max-w-md text-sm text-stone-300 sm:text-base">
              Choose the channel that fits best. One option is best for formal
              opportunities, and the other is better for staying connected.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href="mailto:hayden.cornett.06@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-stone-950/50 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-300"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-emerald-300">
                  Email
                </span>
                <span className="mt-1 block text-lg font-semibold text-stone-100">
                  hayden.cornett.06@gmail.com
                </span>
              </span>
              <span className="text-sm font-semibold text-emerald-200 transition group-hover:translate-x-1">
                Open
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/hayden-cornett/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-stone-950/50 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-300"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-emerald-300">
                  LinkedIn
                </span>
                <span className="mt-1 block text-lg font-semibold text-stone-100">
                  Connect with Hayden
                </span>
              </span>
              <span className="text-sm font-semibold text-emerald-200 transition group-hover:translate-x-1">
                Visit
              </span>
            </a>
          </div>

         
        </div>
      </div>
    </section>
  )

  const renderPage = () => {
    if (activePage === 'home') return renderOverviewPage()
    if (activePage === 'experience') return renderExperiencePage()
    if (activePage === 'education') return renderEducationPage()
    if (activePage === 'leadership') return renderLeadershipPage()
    if (activePage === 'portfolio') return renderPortfolioPage()
    if (activePage === 'contact') return renderContactPage()
  }

  const activeNavPage = activePage

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_10%,#1c1917_0,#111827_48%,#0a0a0a_100%)] text-stone-100">
      <div className="dot-pattern-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/4 rounded-full bg-emerald-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-400/20 blur-3xl" />

      {renderLightbox()}

      <header 
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 md:top-auto md:bottom-6 md:flex md:justify-center md:pt-0"
      >
        <div className="md:hidden">
          <div className="glass-card animate-fade-in mx-auto flex w-full max-w-md items-center justify-between gap-3 rounded-3xl border border-emerald-500/30 px-4 py-3 opacity-100 shadow-[0_18px_42px_rgba(0,0,0,0.45)] sm:max-w-lg sm:px-5">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-emerald-300">
                Hayden Cornett
              </p>
              <p className="mt-1 text-sm font-semibold text-stone-100">
                Marketing portfolio
              </p>
            </div>

            <button
              type="button"
              className="inline-flex min-h-12 items-center rounded-full border border-emerald-500/30 bg-stone-950/70 px-4 text-sm font-semibold text-stone-100 shadow-md shadow-black/20 transition hover:border-emerald-300 hover:text-emerald-200"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <div
            id="mobile-menu"
            className={[
              'mx-auto grid w-full max-w-md overflow-hidden transition-all duration-300 sm:max-w-lg',
              menuOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
            ].join(' ')}
          >
            <nav className="min-h-0 space-y-2 rounded-3xl border border-emerald-500/25 bg-stone-950/90 p-3 text-sm font-medium text-stone-300 shadow-[0_18px_42px_rgba(0,0,0,0.45)]">
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  className={[
                    'block rounded-2xl px-4 py-3 transition',
                    activeNavPage === link.id
                      ? 'bg-emerald-500/20 text-emerald-200'
                      : 'hover:bg-emerald-500/10',
                  ].join(' ')}
                  href={getPathForPage(link.id)}
                  onClick={(event) => {
                    event.preventDefault()
                    navigateToPage(link.id)
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="block rounded-2xl bg-emerald-700 px-4 py-3 text-center text-white shadow-md shadow-emerald-900/25"
                href="https://www.linkedin.com/in/hayden-cornett/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        <div
          className="hidden w-fit max-w-none rounded-2xl border border-emerald-500/30 bg-transparent px-0 py-0 md:block"
          style={{
            opacity: headerHovered ? 1 : 0.5,
            transform: headerHovered ? 'scale(1)' : 'scale(0.95)',
          }}
          onMouseEnter={() => setHeaderHovered(true)}
          onMouseLeave={() => setHeaderHovered(false)}
        >
          <div className="glass-card animate-fade-in rounded-2xl border border-emerald-500/30 px-4 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.45)] sm:px-6 sm:py-3 md:px-8">
            <div className="flex items-center justify-center">
              <nav className="flex items-center gap-8 text-base font-medium text-stone-300">
                {pageLinks.map((link) => (
                  <a
                    key={link.id}
                    href={getPathForPage(link.id)}
                    className={[
                      'sleek-nav-link transition',
                      activeNavPage === link.id ? 'is-active' : '',
                    ].join(' ')}
                    onClick={(event) => {
                      event.preventDefault()
                      navigateToPage(link.id)
                    }}
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
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12a1.56 1.56 0 0 1 0 3.12ZM5.5 9.72h2.9V19H5.5V9.72Zm4.72 0h2.78v1.27h.04c.39-.73 1.33-1.5 2.73-1.5c2.92 0 3.46 1.92 3.46 4.42V19h-2.9v-4.48c0-1.07-.02-2.45-1.49-2.45c-1.5 0-1.73 1.17-1.73 2.37V19h-2.9V9.72Z"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 pt-28 sm:px-6 sm:pt-32 lg:px-8 md:pt-6">
        {renderPage()}
      </div>
    </main>
  )
}

export default App
