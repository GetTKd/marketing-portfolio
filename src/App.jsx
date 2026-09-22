import { useEffect, useState } from 'react'
import './App.css'

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
  { org: 'Boldsquare', role: 'Marketing & Communications Intern', date: 'Jan — May 2026', location: 'Knoxville, TN', summary: 'Full-cycle strategy engagements across four industries.', bullets: ['Selected through the Haslam College of Business for an intensive semester at an Inc. 5000 strategic communications firm.', 'Managed projects for four nonprofit and for-profit clients, including two accelerated turnaround engagements.', 'Developed recommendations spanning brand positioning, product advertising, and social strategy across major platforms.', 'Presented final strategies to all four clients; every client adopted recommendations into planned or active work.', 'Created merchandise concepts, brand standards, and supporting marketing assets.'] },
  { org: 'Beats by Dre', role: 'Consumer Insights & Market Research Analyst Extern', date: 'Apr — Jun 2025', location: 'Remote', summary: 'Gen Z research translated into product and marketing recommendations.', bullets: ['Researched Gen Z audio preferences through trend analysis, surveys, and statistical modeling.', 'Combined AI-powered systems with primary and secondary research to shape strategic recommendations.', 'Presented findings and recommendations directly to the Head of Consumer Insights.'] },
  { org: 'University of Tennessee', role: 'Student Ambassador', date: 'Feb 2025 — Present', location: 'Knoxville, TN', summary: 'Audience-aware storytelling for prospective students and families.', bullets: ['Selected as 1 of 634 applicants through a 6% acceptance process.', 'Lead campus tours for groups of 15–35 prospective students, families, and VIPs.', 'Adapt messaging to audience needs and support major recruitment events including Big Orange Preview and Rocky Top Tailgate.'] },
  { org: 'The Rail Trail Flatbread Co.', role: 'Front of House Team Member · Seasonal', date: 'May — Aug 2025', location: 'Hudson, MA', summary: 'Customer experience in a fast-moving hospitality team.', bullets: ['Mastered menu knowledge and the top seven U.S. allergens to provide safe, personalized experiences.', 'Supported a 20+ person team contributing to more than $800K in seasonal revenue.'] },
  { org: 'Cube Community', role: 'Video Editor', date: 'Aug 2021 — Jul 2024', location: 'Remote', summary: 'Creative production for a global VR gaming community.', bullets: ['Produced video work for a YouTube community focused on Beat Saber and VR culture.', 'Contributed to the annual Rewind time-capsule event featuring prominent creators across the VR industry.', 'Built an early foundation in creative collaboration, feedback, deadlines, and audience engagement.'] },
]

const leadership = [
  { role: 'Senior Vice President', org: 'Delta Sigma Pi', detail: 'Leading recruitment for 200+ interested students and helped reduce brotherhood expenses by more than 40%.' },
  { role: 'VP, Professional Development', org: 'Business Honors Council', detail: 'Building programs that connect Honors Business students with recruiters, industry professionals, and career resources.' },
  { role: 'Professional Development Co-Chair', org: 'GE Appliances Intern Program', detail: 'Produced seven events for a 200+ person intern class and coordinated professional headshots for 89 employees.' },
]

const contextPhotos = [
  { src: '/context-photos/dog-volunteer.jpeg', alt: 'Hayden volunteering with a rescue dog', label: 'Service, with a good co-worker', position: 'center 58%' },
  { src: '/context-photos/rooftop-friends.jpeg', alt: 'Hayden with friends on a Knoxville rooftop', label: 'The people behind the progress', position: 'center 35%' },
  { src: '/context-photos/neyland-ambassador.jpeg', alt: 'Hayden working as a Tennessee Student Ambassador at Neyland Stadium', label: 'Home of the Vols', position: 'center 60%' },
  { src: '/context-photos/ambassador-team.jpeg', alt: 'Hayden and the Tennessee ambassador team', label: 'Showing up for the team', position: 'center 38%' },
  { src: '/context-photos/campus-community.jpeg', alt: 'Hayden with friends in the Haslam College of Business', label: 'Community makes the work better', position: 'center 44%' },
  { src: '/context-photos/context-06.jpeg', alt: 'Hayden hiking with family', label: 'A little room to think', position: 'center center' },
  { src: '/context-photos/context-07.jpeg', alt: 'Hayden exploring Chicago with friends', label: 'Curiosity travels well', position: 'center center' },
]

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

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Hayden Cornett, home">HC<span className="wordmark-dot">.</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
        <a className="nav-cta" href="mailto:hayden.cornett.06@gmail.com">Let’s talk <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-kicker reveal">Marketing × Data × People</div>
          <h1 id="hero-title" className="reveal delay-1">I turn messy signals into<span>clear decisions.</span></h1>
          <div className="hero-bottom reveal delay-2">
            <p>I’m Hayden Cornett, an Honors Marketing & Data Science student building sharper systems, stronger strategies, and work people actually use.</p>
            <a className="circle-link" href="#work" aria-label="Explore selected work">↓</a>
          </div>
          <div className="hero-portrait reveal delay-2"><img src="/Headshot.jpeg" alt="Hayden Cornett" /><span>Hayden Cornett<br />Knoxville, TN</span></div>
          <div className="hero-orbit" aria-hidden="true"><div className="orbit-line" /><div className="orbit-dot" /></div>
        </section>

        <section className="logo-marquee" aria-label="Organizations Hayden has worked with">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => <div className="marquee-logo" key={`${logo.name}-${index}`}><img src={logo.image} alt="" /><span>{logo.name}</span></div>)}
          </div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Proof over promises.</h2><p>Three stories about finding the real problem, building the right response, and leaving something useful behind.</p></div>
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
          <div className="section-heading inverse"><p className="eyebrow">Experience</p><h2>Range, with a point of view.</h2></div>
          <div className="experience-list">
            {experience.map((item, index) => <details className="experience-row" key={item.org} open={index === 0}><summary><span className="experience-number">0{index + 1}</span><div><h3>{item.org}</h3><p>{item.role}</p></div><p className="experience-summary">{item.summary}</p><span className="experience-date">{item.date}<small>{item.location}</small></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="experience-detail"><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></details>)}
          </div>
          <a className="text-link light" href="/resume.pdf" target="_blank" rel="noreferrer">View full résumé <Arrow /></a>
        </section>

        <section id="about" className="about-section section-pad">
          <PhotoReel />
          <div className="about-copy">
            <p className="eyebrow">A little context</p><h2>Curious about people.<br />Serious about the details.</h2>
            <p className="about-lead">I study marketing because decisions start with people—and data science because good instincts deserve evidence.</p>
            <p>At the University of Tennessee, I’m pursuing an Honors BSBA in Marketing with a Data Science focus while leading teams across Delta Sigma Pi and the Business Honors Council. I’m drawn to ambiguous problems, practical technology, and the moment analysis becomes action.</p>
            <div className="skill-cloud" aria-label="Capabilities">{['Consumer insights', 'Marketing analytics', 'SQL', 'Oracle Analytics', 'AI workflows', 'Brand strategy', 'Executive dashboards', 'Stakeholder communication'].map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section className="leadership-section section-pad">
          <div className="section-heading compact"><p className="eyebrow">Leadership</p><h2>Building value beyond the job description.</h2></div>
          <div className="leadership-grid">{leadership.map((item) => <article key={item.role}><span>{item.org}</span><h3>{item.role}</h3><p>{item.detail}</p></article>)}</div>
        </section>

        <section className="contact-section section-pad">
          <p className="eyebrow">Let’s make something useful</p><h2>Have a messy problem?</h2><a href="mailto:hayden.cornett.06@gmail.com">hayden.cornett.06@gmail.com <Arrow /></a>
          <div className="contact-meta"><p>Marketing strategy · Consumer insights · Analytics</p><div><a href="https://www.linkedin.com/in/hayden-cornett" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a></div></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Hayden Cornett</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
