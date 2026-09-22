import './App.css'

const proof = [
  ['95%', 'faster recurring reporting'],
  ['6,381', 'customer reviews analyzed'],
  ['15+', 'analytics & insight projects'],
  ['4', 'client strategies adopted'],
]

const cases = [
  {
    id: 'ge-appliances', number: '01', eyebrow: 'Marketing analytics · Automation',
    title: 'Turning recurring reports into a decision system.', company: 'GE Appliances · Bodewell Commerce', date: 'Summer 2026', image: '/GE.png',
    challenge: 'Recurring Oracle Analytics Cloud reports took hours to assemble and static sales snapshots became inaccurate as transactions changed.',
    action: 'I rebuilt queries with rolling SQL date logic, automated delivery, and created refreshable dashboards that accounted for cancellations and changing activity.',
    result: 'Report generation fell by 95%, saving an estimated 110+ staff hours each year. The dashboards were adopted by 4–5 full-time employees.',
    tags: ['Oracle Analytics', 'SQL', 'Automation', 'Dashboard design'], accent: 'cobalt',
  },
  {
    id: 'customer-voice', number: '02', eyebrow: 'Consumer insights · Social proof',
    title: 'Making 6,381 customer voices locally relevant.', company: 'GE Appliances · Bodewell Commerce', date: 'Summer 2026', image: '/GE.png',
    challenge: 'Bodewell had strong customer feedback, but public social proof was concentrated in a single Kentucky Google Business profile.',
    action: 'I scraped and analyzed 6,381 reviews, then matched personalized five-star feedback to service territories across the country.',
    result: 'Relevant customer proof was identified for 63% of national service areas, creating a scalable foundation for localized trust-building.',
    tags: ['Review analysis', 'Data matching', 'Customer experience', 'Localization'], accent: 'orange',
  },
  {
    id: 'boldsquare', number: '03', eyebrow: 'Brand strategy · Client work',
    title: 'Four clients. Four strategies built to be used.', company: 'Boldsquare', date: 'Spring 2026', image: '/Boldsquare.png',
    challenge: 'Clients across entertainment, medical technology, international nonprofit, and professional events needed distinct, actionable growth plans.',
    action: 'I managed full-cycle engagements spanning research, positioning, channel strategy, creative concepts, and direct client presentations—including two accelerated turnarounds.',
    result: 'Every client adopted recommendations into planned or active marketing efforts across social, product advertising, and brand execution.',
    tags: ['Brand positioning', 'Social strategy', 'Client presentation', 'Creative direction'], accent: 'violet',
  },
]

const experience = [
  { org: 'GE Appliances', role: 'Commercial Intern · Bodewell Commerce', date: 'May — Aug 2026', summary: 'Delivered 15+ analytics, automation, and customer-insight projects—more than five times the internship curriculum requirement.' },
  { org: 'Boldsquare', role: 'Marketing & Communications Intern', date: 'Jan — May 2026', summary: 'Led client-facing strategy work at an Inc. 5000 communications firm across four distinct industries.' },
  { org: 'Beats by Dre', role: 'Consumer Insights & Market Research Extern', date: 'Apr — Jun 2025', summary: 'Researched Gen Z audio preferences and presented data-backed recommendations to the Head of Consumer Insights.' },
  { org: 'University of Tennessee', role: 'Student Ambassador', date: 'Feb 2025 — Present', summary: 'Selected from 634 applicants to guide prospective students, families, and VIPs through the Tennessee experience.' },
]

const leadership = [
  { role: 'Senior Vice President', org: 'Delta Sigma Pi', detail: 'Leading recruitment for 200+ interested students and helped reduce brotherhood expenses by more than 40%.' },
  { role: 'VP, Professional Development', org: 'Business Honors Council', detail: 'Building programs that connect Honors Business students with recruiters, industry professionals, and career resources.' },
  { role: 'Professional Development Co-Chair', org: 'GE Appliances Intern Program', detail: 'Produced seven events for a 200+ person intern class and coordinated professional headshots for 89 employees.' },
]

function Arrow() { return <span aria-hidden="true">↗</span> }

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
          <div className="hero-orbit" aria-hidden="true"><div className="orbit-line" /><div className="orbit-dot" /></div>
        </section>

        <section className="proof-bar" aria-label="Selected results">
          {proof.map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
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
            {experience.map((item, index) => <article className="experience-row" key={item.org}><span className="experience-number">0{index + 1}</span><div><h3>{item.org}</h3><p>{item.role}</p></div><p className="experience-summary">{item.summary}</p><span className="experience-date">{item.date}</span></article>)}
          </div>
          <a className="text-link light" href="/resume.pdf" target="_blank" rel="noreferrer">View full résumé <Arrow /></a>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="portrait-wrap"><div className="portrait-frame"><img src="/Headshot.jpeg" alt="Hayden Cornett" /></div><div className="portrait-caption">Knoxville, Tennessee<br />Open to opportunities</div></div>
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
