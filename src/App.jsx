import { useState } from 'react'

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  X,
} from 'lucide-react'

const skills = ['Frontend web developer', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Git']

const projects = [
  {
    number: '01',
    title: 'Digital experiences\nwith intention.',
    type: 'Selected work / Web development',
    accent: 'mint',
    icon: Globe2,
  },
  {
    number: '02',
    title: 'Interfaces that\nfeel effortless.',
    type: 'Selected work / UI implementation',
    accent: 'yellow',
    icon: Layers3,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || 'Client')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const phoneNumber = '923439218641'
    const text = `Assalamualaikum Muhammad Muslim,\n\nI want to discuss my project.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to home">
          MM<span>.</span>
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <a className="nav-cta" href="mailto:fiveerr3214@gmail.com">Let's talk <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="status-dot" /> Available for new projects</p>
            <h1>I build the web<br /><em>with feeling.</em></h1>
            <p className="hero-intro">I'm Muhammad Muslim, a frontend web developer focused on creating clean, engaging and useful digital experiences.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('work')}>Explore my work <ArrowDownRight size={17} /></button>
              <button className="text-btn" onClick={() => scrollTo('contact')}>Get in touch <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="hero-visual reveal-up delay-one">
            <div className="image-frame">
              <img
                src="https://i.postimg.cc/ZRstznZX/1000439673.jpg"
                alt="Portrait of Muhammad Muslim"
              />
              <div className="image-stamp">MM<br /><span>01 / 25</span></div>
            </div>
            <div className="scroll-note"><span /> Scroll to explore</div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Specialties">
          <div className="marquee-track"><span>Frontend craft</span><b>✳</b><span>Digital clarity</span><b>✳</b><span>Frontend craft</span><b>✳</b><span>Digital clarity</span><b>✳</b></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <h2>Good websites<br /><span>make people feel</span><br />something.</h2>
            <div className="about-copy">
              <p className="large-copy">I care about the details that turn a website from functional into memorable. My work lives at the intersection of thoughtful design and solid frontend development.</p>
              <p>From the first line of markup to the final responsive breakpoint, I like making digital spaces that are clear, considered and easy to use.</p>
              <button className="line-link" onClick={() => scrollTo('contact')}>Let's work together <ArrowUpRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="skills section-pad">
          <div className="section-label"><span>02</span><span>My toolkit</span></div>
          <div className="skills-content">
            <div><p className="eyebrow">What I bring</p><h2>Ideas into<br /><em>interfaces.</em></h2></div>
            <div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><Code2 size={17} /></div>)}</div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <div className="work-heading"><h2>A few things<br /><em>I've made.</em></h2><p>Every project starts with a question, then becomes a clearer way to connect.</p></div>
          <div className="project-grid">{projects.map(({ number, title, type, accent, icon: Icon }) => <article className={`project-card ${accent}`} key={number}><div className="project-top"><span>{number}</span><Icon size={21} /></div><div><p>{type}</p><h3>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3></div><button aria-label={`View project ${number}`}><ArrowUpRight size={20} /></button></article>)}</div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-intro"><div className="section-label"><span>04</span><span>Start a conversation</span></div><h2>Have a project<br /><em>in mind?</em></h2><p>Tell me a little about what you're building. I usually reply within 1–2 working days.</p><div className="contact-details"><a href="https://wa.me/923439218641" target="_blank" rel="noreferrer"><Phone size={17} /> WhatsApp: +92 343 9218641</a><a href="mailto:fiveerr3214@gmail.com"><Mail size={17} /> fiveerr3214@gmail.com</a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows="4" placeholder="Tell me about your project..." /></label><button className="primary-btn" type="submit">{sent ? <>Message prepared <Check size={17} /></> : <>Send enquiry <Send size={16} /></>}</button></form>
        </section>
      </main>

      <footer className="footer"><span>© 2025 Muhammad Muslim</span><span>Built with care in Pakistan</span><div className="socials"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div></footer>
    </div>
  )
}

export default App
