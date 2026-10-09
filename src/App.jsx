import { useEffect, useRef, useState } from 'react'
import './App.css'
import SnakeGame from './SnakeGame'

const logos = [
  { name: 'GE Appliances', image: '/GE.png' },
  { name: 'Boldsquare', image: '/Boldsquare.png' },
  { name: 'Beats by Dre', image: '/Beats.png' },
  { name: 'University of Tennessee', image: '/Tennessee.png' },
]

const cases = [
  {
    id: 'ge-appliances', number: '01', eyebrow: 'Marketing analytics · Consumer insights',
    title: 'Turning fragmented data into decisions people could use.', company: 'GE Appliances · Bodewell Commerce', date: 'Summer 2026', image: '/GE.png',
    challenge: 'Teams relied on slow recurring reports, frozen sales snapshots, and customer feedback that was difficult to use beyond a single local profile.',
    action: 'I rebuilt Oracle reporting workflows, created refreshable executive dashboards, and analyzed 6,381 reviews to connect localized social proof with service territories.',
    result: 'Reporting became 95% faster, saving 110+ staff hours annually. Dashboards were adopted by full-time employees and relevant five-star reviews were matched to 63% of national service areas.',
    tags: ['Oracle Analytics', 'SQL', 'Automation', 'Consumer insights'], accent: 'cobalt',
  },
  {
    id: 'boldsquare', number: '02', eyebrow: 'Brand strategy · Client work',
    title: 'Four clients. Four strategies built to be used.', company: 'Boldsquare', date: 'Spring 2026', image: '/Boldsquare.png',
    challenge: 'Clients across entertainment, medical technology, international nonprofit, and professional events needed distinct, actionable growth plans.',
    action: 'I managed full-cycle engagements spanning research, positioning, channel strategy, creative concepts, and direct client presentations—including two accelerated turnarounds.',
    result: 'Every client adopted recommendations into planned or active marketing efforts across social, product advertising, and brand execution.',
    tags: ['Brand positioning', 'Social strategy', 'Client presentation', 'Creative direction'], accent: 'violet',
  },
  {
    id: 'beats', number: '03', eyebrow: 'Consumer insights · Market research',
    title: 'Translating Gen Z listening habits into a strategic point of view.', company: 'Beats by Dre', date: 'Spring 2025', image: '/Beats.png',
    challenge: 'A global audio brand needed a sharper view of how Gen Z discovers, evaluates, and builds relationships with audio products.',
    action: 'I combined survey research, trend analysis, statistical modeling, and AI-assisted workflows to identify patterns in preferences and behavior.',
    result: 'I turned the research into product and marketing recommendations and presented the final strategy directly to Beats’ Head of Consumer Insights.',
    tags: ['Market research', 'Survey analysis', 'Statistical modeling', 'Gen Z strategy'], accent: 'orange',
  },
]

const experience = [
  { org: 'GE Appliances', role: 'Commercial Intern · Bodewell Commerce', date: 'May — Aug 2026', location: 'Louisville, KY', summary: 'Marketing analytics, automation, and customer insight at enterprise scale.', bullets: ['Reengineered recurring Oracle Analytics Cloud reports, cutting generation time 95% and saving an estimated 110+ staff hours annually.', 'Built refreshable Bodewell and Private Store dashboards adopted by 4–5 full-time employees.', 'Analyzed 6,381 reviews and matched personalized five-star feedback to 63% of national service areas.', 'Delivered 15+ projects—more than five times the internship curriculum requirement.', 'Co-chaired professional development for 200+ interns; produced seven events and coordinated 89 headshots.'] },
  { org: 'Boldsquare', role: 'Marketing & Communications Intern', date: 'Jan — May 2026', location: 'Knoxville, TN', summary: 'Full-cycle strategy engagements across four industries.', bullets: ['Selected through the Haslam College of Business for an intensive semester at an Inc. 5000 strategic communications firm.', 'Managed projects for four nonprofit and for-profit clients, including two accelerated turnaround engagements.', 'Developed recommendations spanning brand positioning, product advertising, and social strategy across major platforms.', 'Presented final strategies to all four clients; every client adopted recommendations into planned or active work.', 'Created merchandise concepts, brand standards, and supporting marketing assets.', 'Contributed to budget management, creative execution, and final business pitches throughout client engagements.', 'Completed a specialized MarTech certification.'] },
  { org: 'Beats by Dre', role: 'Consumer Insights & Market Research Analyst Extern', date: 'Apr — Jun 2025', location: 'Remote', summary: 'Gen Z research translated into product and marketing recommendations.', bullets: ['Researched Gen Z audio preferences through trend analysis, surveys, and statistical modeling.', 'Combined AI-powered systems with primary and secondary research to shape strategic recommendations.', 'Presented findings and recommendations directly to the Head of Consumer Insights.'] },
  { org: 'University of Tennessee', role: 'Student Ambassador', date: 'Feb 2025 — Present', location: 'Knoxville, TN', summary: 'Audience-aware storytelling for prospective students and families.', bullets: ['Selected as 1 of 634 applicants through a 6% acceptance process.', 'Lead campus tours for groups of 15–35 prospective students, families, and VIPs.', 'Adapt messaging to audience needs and support major recruitment events including Big Orange Preview and Rocky Top Tailgate.'] },
  { org: 'The Rail Trail Flatbread Co.', role: 'Front of House Team Member · Seasonal', date: 'May — Aug 2025', location: 'Hudson, MA', summary: 'Customer experience in a fast-moving hospitality team.', bullets: ['Mastered menu knowledge and the top seven U.S. allergens to provide safe, personalized experiences.', 'Supported a 20+ person team contributing to more than $800K in seasonal revenue.'] },
  { org: 'Cube Community', role: 'Video Editor', date: 'Aug 2021 — Jul 2024', location: 'Remote', summary: 'Creative production for a global VR gaming community.', bullets: ['Produced video work for a YouTube community focused on Beat Saber and VR culture.', 'Contributed to the annual Rewind time-capsule event featuring prominent creators across the VR industry.', 'Built an early foundation in creative collaboration, feedback, deadlines, and audience engagement.'] },
]

const leadership = [
  { role: 'Senior Vice President', org: 'Delta Sigma Pi', detail: 'Orchestrating recruitment for 200+ interested students and serving as a primary point of contact from initial engagement through onboarding. Helped refresh dated systems, reduce brotherhood expenses by more than 40%, and improve the member experience.' },
  { role: 'VP, Professional Development', org: 'Business Honors Council', detail: 'Serving on the executive board and leading professional development programming that connects Honors Business students with recruiters, industry professionals, and career resources. Building access to networking and career readiness opportunities.' },
  { role: 'Emerging Leaders · ELPS 310', org: 'University of Tennessee · Spring 2026', detail: 'Studied change management, emotional intelligence, and adaptive leadership through discussion and applied learning. Developed a project examining student technology advocacy.' },
  { role: 'Professional Development Co-Chair', org: 'GE Appliances Intern Program', detail: 'Produced seven events for a 200+ person intern class and coordinated professional headshots for 89 employees.' },
]

const contextPhotos = [
  { src: '/context-photos/dog-volunteer.jpeg', alt: 'Hayden volunteering with a rescue dog', label: 'Service, with a good co-worker', position: 'center 58%' },
  { src: '/context-photos/rooftop-friends.jpeg', alt: 'Hayden with friends on a Knoxville rooftop', label: 'The people behind the progress', position: 'center 35%' },
  { src: '/context-photos/neyland-ambassador.jpeg', alt: 'Hayden working as a Tennessee Student Ambassador at Neyland Stadium', label: 'Home of the Vols', position: 'center 60%' },
  { src: '/context-photos/ambassador-team.jpeg', alt: 'Hayden and the Tennessee ambassador team', label: 'Showing up for the team', position: 'center 38%' },
  { src: '/context-photos/campus-community.jpeg', alt: 'Hayden with friends in the Haslam College of Business', label: 'Community makes the work better', position: 'center 44%' },
]

const testimonials = [
  {
    name: 'Laura Freeman', role: 'National Account Sales Manager · GE Appliances', relationship: 'Direct manager · August 2026',
    quote: `Hayden's "say/do" ratio was perfect and so the team quickly learned to rely on him for all kinds of tasks and problems to be solved.`,
  },
  {
    name: 'Sarah Peterson', role: 'Digital & Affiliate Marketing · GE Appliances', relationship: 'Colleague · August 2026',
    quote: `Hayden joined our team as a summer intern, but the impact he made extended well beyond his internship. He is thoughtful, articulate, and takes feedback exceptionally well.`,
  },
  {
    name: 'Steven Cheppo', role: 'Associate Director, Jones Center for Leadership & Service', relationship: 'Instructor · May 2026',
    quote: `Hayden Cornett is the kind of person who leaves a space better than he found it. What stood out most in my time working with him was not just his preparation or his thinking, but his consistency.`,
  },
  {
    name: 'Kelly Phillips', role: 'Public Speaking Instructor · University of Tennessee', relationship: 'Instructor · January 2026',
    quote: `From day one, Hayden was always engaged and his presence in small groups and the class itself made the students in the class stronger. He was always early, willing to learn and to volunteer as opportunities presented themselves.`,
  },
  {
    name: 'Stephanie Kit', role: 'Career Counselor & Business Honors Instructor', relationship: 'Instructor · January 2026',
    quote: `I could always count on Hayden to work on assignments ahead of due dates, and at times he helped me troubleshoot technology issues with the class Canvas site.`,
  },
  {
    name: 'Mark Atkeson', role: 'Lecturer · Haslam College of Business', relationship: 'Instructor · May 2025',
    quote: `Hayden is a genuine and sincere person who takes pride in the work that he does. It was a pleasure having him in my class. There is no doubt he will be successful in whatever direction he takes.`,
  },
  {
    name: 'John Brum', role: 'Corporate Learning & Development Leader, Science Educator', relationship: 'Instructor · November 2024',
    quote: `Hayden is a doer, a quick learner, and a person who has the confidence and determination it takes to make a difference in the world.`,
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)
  return <section className="testimonials" aria-label="Recommendations from colleagues and instructors" aria-roledescription="carousel">
    <span className="testimonial-mark" aria-hidden="true">“</span>
    <div className="testimonial-content" aria-live="polite" aria-atomic="true">
      {testimonials.map((item, index) => <figure key={item.name} className={index === active ? 'active' : ''} aria-hidden={index !== active}>
        <blockquote><p>{item.quote}</p></blockquote>
        <figcaption>
          <div className="testimonial-person">
            <strong>{item.name}</strong>
            <span>{item.role}</span>
            <small>{item.relationship}</small>
          </div>
          <div className="testimonial-controls">
            <span aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
            <button type="button" aria-label="Previous recommendation" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>←</button>
            <button type="button" aria-label="Next recommendation" onClick={() => setActive((active + 1) % testimonials.length)}>→</button>
          </div>
        </figcaption>
      </figure>)}
    </div>
  </section>
}

function Arrow() { return <span aria-hidden="true">↗</span> }

function PhotoReel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % contextPhotos.length), 4500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="portrait-wrap photo-reel" aria-roledescription="carousel" aria-label="Photos from Hayden’s life and campus community">
      <div className="portrait-frame reel-frame">
        {contextPhotos.map((photo, index) => (
          <img
            className={index === active ? 'reel-photo active' : 'reel-photo'}
            src={photo.src}
            alt={index === active ? photo.alt : ''}
            style={{ objectPosition: photo.position }}
            key={photo.src}
          />
        ))}
        <div className="reel-wipe" key={active} aria-hidden="true" />
        <div className="reel-counter"><span>{String(active + 1).padStart(2, '0')}</span> / {String(contextPhotos.length).padStart(2, '0')}</div>
      </div>
      <div className="portrait-caption reel-caption" aria-live="polite">{contextPhotos[active].label}</div>
      <div className="reel-controls" aria-label="Choose a photo">
        {contextPhotos.map((photo, index) => <button className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show photo ${index + 1}: ${photo.label}`} key={photo.src}><span /></button>)}
      </div>
    </div>
  )
}

function BinaryReveal() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = canvas.closest('.hero')
    const context = canvas.getContext('2d')
    if (!context) return undefined
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)')
    let frame = 0
    let resizeFrame = 0
    let cursorX = -300
    let cursorY = -300
    let width = 0
    let height = 0

    const draw = () => {
      frame = 0
      context.clearRect(0, 0, width, height)
      if (!motion.matches) return
      context.fillStyle = '#2449d8'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      // Draw only the digits inside the spotlight, keeping pointer updates light.
      const spacing = 23
      const radius = 190
      for (let row = Math.max(0, Math.floor((cursorY - radius) / spacing)); row * spacing < Math.min(height, cursorY + radius); row++) {
        for (let column = Math.max(0, Math.floor((cursorX - radius) / spacing)); column * spacing < Math.min(width, cursorX + radius); column++) {
          const x = column * spacing + spacing / 2
          const y = row * spacing + spacing / 2
          const distance = Math.hypot(x - cursorX, y - cursorY)
          const influence = Math.exp(-(distance * distance) / (2 * 55 * 55))
          const scale = 1 + influence * 1.35
          // Spread the neighboring digits slightly as they grow.
          const offsetX = (x - cursorX) * influence * 0.32
          const offsetY = (y - cursorY) * influence * 0.32
          context.font = `${12 * scale}px ui-monospace, SFMono-Regular, Consolas, monospace`
          const digit = (row * 31 + column * 17 + (row ^ column) * 7) % 13 < 6 ? '1' : '0'
          context.fillText(digit, x + offsetX, y + offsetY)
        }
      }
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(draw)
    }
    const resize = () => {
      const bounds = hero.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      schedule()
    }
    const move = (event) => {
      if (!motion.matches || event.pointerType === 'touch') return
      const bounds = hero.getBoundingClientRect()
      cursorX = event.clientX - bounds.left
      cursorY = event.clientY - bounds.top
      schedule()
    }
    const observer = new ResizeObserver(() => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(resize)
    })
    observer.observe(hero)
    hero.addEventListener('pointermove', move)
    motion.addEventListener('change', schedule)
    resize()
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(resizeFrame)
      hero.removeEventListener('pointermove', move)
      motion.removeEventListener('change', schedule)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-code" />
}

function App() {
  const [snakeOpen, setSnakeOpen] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)')
    let frame = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const animate = () => {
      currentX += (targetX - currentX) * 0.085
      currentY += (targetY - currentY) * 0.085
      hero.style.setProperty('--cursor-x', currentX.toFixed(4))
      hero.style.setProperty('--cursor-y', currentY.toFixed(4))
      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.001) {
        frame = window.requestAnimationFrame(animate)
      } else {
        frame = 0
      }
    }
    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(animate)
    }
    const reset = () => {
      hero.style.setProperty('--code-visible', '0')
      targetX = 0
      targetY = 0
      start()
    }
    const move = (event) => {
      if (!motion.matches || event.pointerType === 'touch') return
      const bounds = hero.getBoundingClientRect()
      hero.style.setProperty('--code-x', `${event.clientX - bounds.left}px`)
      hero.style.setProperty('--code-y', `${event.clientY - bounds.top}px`)
      hero.style.setProperty('--code-visible', '1')
      targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1))
      targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1))
      start()
    }
    const updateMotion = () => {
      window.cancelAnimationFrame(frame)
      frame = 0
      currentX = currentY = targetX = targetY = 0
      hero.style.setProperty('--code-visible', '0')
      hero.style.removeProperty('--cursor-x')
      hero.style.removeProperty('--cursor-y')
    }

    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', reset)
    window.addEventListener('blur', reset)
    motion.addEventListener('change', updateMotion)
    return () => {
      window.cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', reset)
      window.removeEventListener('blur', reset)
      motion.removeEventListener('change', updateMotion)
    }
  }, [])

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Hayden Cornett, home">HC<span className="wordmark-dot">.</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
        <a className="nav-cta" href="mailto:hayden.cornett.06@gmail.com">Let’s talk <Arrow /></a>
      </header>

      <main id="top">
        <section ref={heroRef} className="hero section-pad" aria-labelledby="hero-title">
          <h1 id="hero-title" className="reveal delay-1">I turn messy signals into<span className="decision-reveal">clear decisions.</span></h1>
          <div className="hero-bottom reveal delay-2">
            <p>I’m Hayden Cornett, an Honors Marketing student with a Data Science minor building sharper systems, stronger strategies, and work people actually use.</p>
            <a className="circle-link" href="#work" aria-label="Explore selected work">↓</a>
          </div>
          <div className="hero-portrait reveal delay-2"><img src="/Headshot.jpeg" alt="Hayden Cornett" /><span>Hayden Cornett<br />Knoxville, TN</span></div>
          <div className="hero-depth" aria-hidden="true">
            <BinaryReveal />
            <div className="hero-glow" />
            <div className="hero-orbit">
              <div className="orbit-line" /><div className="orbit-dot" />
            </div>
            <div className="hero-ring" />
            <div className="hero-sphere" />
            <div className="hero-grid" />
          </div>
        </section>

        <section className="logo-marquee" aria-label="Organizations Hayden has worked with">
          <div className="logo-track">
            {[0, 1].map((copy) => <div className="logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {[...logos, ...logos].map((logo, index) => <div className="marquee-logo" key={`${logo.name}-${index}`}>
                <span className={`marquee-image${logo.name === 'GE Appliances' ? ' ge-logo' : logo.name === 'Beats by Dre' ? ' beats-logo' : ''}`}><img src={logo.image} alt="" /></span>
                <span>{logo.name}</span>
              </div>)}
            </div>)}
          </div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-heading"><h2>Proof over promises.</h2><p>Three stories about finding the real problem, building the right response, and leaving something useful behind.</p></div>
          <div className="case-list">
            {cases.map((item) => (
              <article className={`case-card ${item.accent}`} id={item.id} key={item.id}>
                <div className="case-topline"><span>{item.number}</span><span>{item.eyebrow}</span><span>{item.date}</span></div>
                <div className="case-intro"><div><p className="case-company">{item.company}</p><h3>{item.title}</h3></div><div className="logo-tile"><img src={item.image} alt={`${item.company} logo`} /></div></div>
                <div className="case-story"><div><span>Challenge</span><p>{item.challenge}</p></div><div><span>What I did</span><p>{item.action}</p></div><div className="result"><span>Result</span><p>{item.result}</p></div></div>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section section-pad">
          <div className="section-heading inverse"><h2>Range, with a point of view.</h2></div>
          <div className="experience-list">
            {experience.map((item, index) => <details className="experience-row" key={item.org} open={index === 0}><summary><span className="experience-number">0{index + 1}</span><div><h3>{item.org}</h3><p>{item.role}</p></div><p className="experience-summary">{item.summary}</p><span className="experience-date">{item.date}<small>{item.location}</small></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="experience-detail"><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></details>)}
          </div>
          <div className="resume-background">
            <article className="resume-education">
              <h3>Education</h3>
              <h4>University of Tennessee, Knoxville</h4>
              <p className="resume-school">Haslam College of Business</p>
              <p>Honors Bachelor of Science in Business Administration, Marketing</p>
              <p>Data Science minor · Expected May 2028</p>
              <ul><li>Business Fellows Honors Program</li><li>UT Volunteer Scholarship</li><li>McClung Public Speaking Competition — 2nd Place</li></ul>
            </article>
            <article>
              <h3>Certifications</h3>
              <ul>{['Communicating with Confidence', 'Sales Enablement', 'Critical Thinking with Excel', 'SQL Essential Training'].map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <h3>Skills & tools</h3>
              <ul>{['Microsoft Excel · SQL · Oracle Analytics', 'Marketing analytics & consumer insights', 'Brand strategy & stakeholder relations', 'Notion · AI-assisted workflows', 'Spanish — elementary proficiency'].map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <div className="resume-actions">
            <a className="text-link light" href="/resume.pdf" target="_blank" rel="noreferrer">View full résumé <Arrow /></a>
            <a className="text-link light" href="/resume.pdf" download="Hayden-Cornett-Resume.pdf">Download résumé ↓</a>
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <PhotoReel />
          <div className="about-copy">
            <h2>I like figuring out<br />what makes people tick.</h2>
            <p className="about-lead">What makes someone choose one brand over another? What earns their trust? Those are the questions that draw me to marketing.</p>
            <p>I like talking to people, digging into their feedback, and finding patterns that help explain their choices. Studying Marketing with a Data Science minor at the University of Tennessee gives me more ways to explore those questions.</p>
            <p>The part I enjoy most is putting what I learn to work: helping a team see its customers more clearly, making a report easier to use, or finding a better way to reach someone. I want the work to be useful to the people who pick it up next.</p>
          </div>
          <Testimonials />
        </section>

        <section className="leadership-section section-pad">
          <div className="section-heading compact"><h2>Building value beyond the job description.</h2></div>
          <div className="leadership-grid">{leadership.map((item) => <article key={item.role}><span>{item.org}</span><h3>{item.role}</h3><p>{item.detail}</p></article>)}</div>
        </section>

        <section className="contact-section section-pad">
          <h2>Wanna say hi?</h2><a href="mailto:hayden.cornett.06@gmail.com">hayden.cornett.06@gmail.com <Arrow /></a>
          <div className="contact-meta"><p>Marketing strategy · Consumer insights · Analytics</p><div><button type="button" className="snake-trigger" aria-label="psst. Play Snake" onClick={() => setSnakeOpen(true)}>psst.</button><a href="https://www.linkedin.com/in/hayden-cornett" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a></div></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Hayden Cornett</span><a href="#top">Back to top ↑</a></footer>
      {snakeOpen && <SnakeGame onClose={() => setSnakeOpen(false)} />}
    </div>
  )
}

export default App
