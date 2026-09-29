import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Plus, Orbit, Radio, Search, CalendarDays, BookOpen } from 'lucide-react';
import { ACADEMY_COURSES, SHOW_EPISODES, UPCOMING_IMPACT_TALKS } from '../data/mockData';
import { COMMUNITY_URL, CONTACT_URL, courseEnquiry } from '../data/links';

function Show() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All topics');
  const featured = SHOW_EPISODES[0];
  const episodes = SHOW_EPISODES.slice(1).filter(episode =>
    (category === 'All topics' || episode.category === category) &&
    `${episode.title} ${episode.hook} ${episode.guest || ''}`.toLowerCase().includes(query.toLowerCase())
  );
  return <section id="the-show" className="content-section show-section">
    <div className="section-heading"><div><p className="section-label"><Radio size={15} /> The Niuxverse Show</p><h2>Big questions.<br />Human conversations.</h2></div><p>Exploring the future of technology<br className="desktop-break" /> without losing what makes us human.</p></div>
    <article className="featured-episode">
      <a className="episode-art" href="/event-flyer.jpg" target="_blank" rel="noreferrer" aria-label="View the What Makes Us Human event poster"><img src="/event-flyer.jpg" width="819" height="1024" loading="lazy" alt="What Makes Us Human? event poster with speakers and event details" /></a>
      <div className="episode-feature-copy"><span className="event-label"><span /> Live conversation · 4 October 2026</span><h3>{featured.title}</h3><p>{featured.hook}</p><div className="speaker-line">With {featured.guest}<span>Hosted by the King of Intelligence</span></div><a className="button button-primary" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Get event updates <ArrowUpRight size={16} /></a><details className="event-details"><summary>Inside the conversation <Plus size={16} /></summary><ul>{featured.keyQuestions.map(question => <li key={question}>{question}</li>)}</ul></details></div>
    </article>
    <div className="episode-list-heading"><h3>On the horizon</h3><button className="text-button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="upcoming-episodes">{expanded ? 'Show less' : 'Explore all episodes'}<ArrowRight size={16} /></button></div>
    {expanded && <div className="episode-filters"><label className="search-field"><Search size={17} /><input aria-label="Search episodes" placeholder="Search conversations" value={query} onChange={e => setQuery(e.target.value)} /></label><select aria-label="Filter by topic" value={category} onChange={e => setCategory(e.target.value)}>{['All topics', ...new Set(SHOW_EPISODES.slice(1).map(e => e.category))].map(value => <option key={value}>{value}</option>)}</select></div>}
    <div id="upcoming-episodes" className="episode-list">{(expanded ? episodes : episodes.slice(0, 3)).map(episode => <details key={episode.id} className="episode-row"><summary><span className="episode-number">{episode.number}</span><span className="episode-title">{episode.title}<small>{episode.category}</small></span><span className="coming-soon">Coming soon</span><Plus size={18} /></summary><div className="episode-description"><p>{episode.description}</p><ul>{episode.keyQuestions.map(question => <li key={question}>{question}</li>)}</ul></div></details>)}{expanded && episodes.length === 0 && <p className="empty-result" role="status">No conversations match your search. Try another topic or phrase.</p>}</div>
  </section>;
}

function Academy() {
  return <section id="academy" className="academy-section"><div className="content-section">
    <div className="section-heading"><div><p className="section-label"><BookOpen size={15} /> Niuxverse Academy</p><h2>Turn curiosity<br />into capability.</h2></div><p>Learn by making. Build with purpose.<br />Practical tracks for your next chapter.</p></div>
    <div className="course-list">{ACADEMY_COURSES.map(course => <details className="course-row" key={course.id}><summary><span className="course-code">{course.code}</span><div className="course-heading"><h3>{course.title.replace(' (6 Weeks Course)', '')}</h3><p>{course.duration} <span>/</span> {course.level}</p></div><span className="course-action">View track <Plus size={19} /></span></summary><div className="course-detail"><p>{course.tagline}</p><ul>{course.modules.map(module => <li key={module}>{module}</li>)}</ul><p><strong>Your outcome:</strong> {course.outcome}</p><a href={courseEnquiry(course.title)} target="_blank" rel="noreferrer" className="button button-primary">Enquire about this track <ArrowUpRight size={16} /></a></div></details>)}</div>
  </div></section>;
}

function Community() {
  return <section id="impact-talks" className="content-section community-section"><div className="community-copy"><p className="section-label"><Orbit size={16} /> Impact Talks</p><h2>A place at the<br />conversation.</h2><p>Good ideas grow when we share them. Meet people who ask better questions, exchange honest feedback, and turn possibility into real-world impact.</p><a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="button button-secondary">Join the Community <ArrowUpRight size={16} /></a><div className="next-conversation"><CalendarDays size={19} /><div><span>Next conversation</span><h3>{UPCOMING_IMPACT_TALKS[0].topic}</h3><p>Sunday, 4 October 2026</p></div></div></div><div className="community-image"><img src="/community%20(1).jpg" width="736" height="736" loading="lazy" alt="People exchanging ideas around a shared table" /><span>Different perspectives. Shared possibilities.</span></div><details className="talks-details"><summary>More conversations ahead <Plus size={18} /></summary>{UPCOMING_IMPACT_TALKS.slice(1).map(talk => <div key={talk.id}><h3>{talk.topic}</h3><p>{talk.format} · Date to be announced</p></div>)}</details></section>;
}

function Founder() {
  const [portrait, setPortrait] = useState(1);
  return <section id="founder" className="founder-section content-section"><div className="founder-portrait"><img src={`/DAVID%20PICTURE%20(${portrait}).jpeg`} width="720" height="1280" loading="lazy" alt="Nwaeze David, founder of Niuxverse" /><button className="portrait-switch" onClick={() => setPortrait(portrait === 1 ? 2 : 1)} aria-label="View another portrait of Nwaeze David">Another perspective <ArrowRight size={16} /></button></div><div className="founder-copy"><p className="section-label">A word from our founder</p><blockquote>“We explore new technology not to replace human life, but to understand how it affects us, keep our friendships and communities strong, and build things that genuinely help people thrive.”</blockquote><div className="founder-name"><h2>Nwaeze David</h2><p>Founder, Niuxverse · The King of Intelligence</p></div><a className="text-button" href={CONTACT_URL} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16} /></a></div></section>;
}

function Footer() {
  return <><section className="closing-section"><img src="/NEW%20WEBSITE/LANDING%20PAGE%20GUID%20(1).jpg" alt="" loading="lazy" aria-hidden="true" /><div><p>There’s a place for you here.</p><h2>The future is<br />better together.</h2><a className="button button-primary" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Join the Community <ArrowUpRight size={16} /></a></div></section><footer className="site-footer"><div className="footer-top"><a className="brand" href="#home"><img className="brand-logo" src="/NIUXVERSE%20LOGO/NIUXVERSE%20LOGO%20WHTE%20SVG.svg" width="44" height="29" alt="" /><span>NIUXVERSE</span></a><p>Technology with purpose. People at the centre.</p><a href="#home" className="text-button">Back to top <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Niuxverse Solutions</span><nav aria-label="Footer navigation"><a href="#the-show">The Show</a><a href="#academy">Academy</a><a href="#impact-talks">Impact Talks</a><a href={CONTACT_URL} target="_blank" rel="noreferrer">Contact</a></nav></div></footer></>;
}

export function LandingSections() { return <><Show /><Academy /><Community /><Founder /><Footer /></>; }
