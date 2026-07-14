import { useState } from 'react'

const whatsapp = 'https://wa.me/14344095357?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cita%20en%20AGP%20Centro%20Neurobi%C3%B3tico.'

const resources = [
  {
    type: 'link',
    label: 'Video · AGP Centro Neurobiótico',
    title: 'Conoce nuestro espacio de bienestar',
    href: 'https://gemini.google.com/share/ebda272d98f5',
  },
  {
    type: 'facebook',
    label: 'Video informativo',
    title: 'Video informativo de bienestar',
    href: 'https://www.facebook.com/naturallife12/videos/2133044970107777',
  },
  {
    type: 'upcoming',
    label: 'Próximamente',
    title: 'Reflexiones para tu día',
    description: 'Contenido breve para acompañarte en tu camino de equilibrio y bienestar.',
  },
]

function WhatsAppButton({ className = 'button button-primary', children = 'Agenda por WhatsApp ↗' }) {
  return <a className={className} href={whatsapp} target="_blank" rel="noreferrer">{children}</a>
}

function ResourceCard({ resource }) {
  if (resource.type === 'facebook') {
    const embed = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(resource.href)}&show_text=false&width=560`
    return <article className="resource-card info-video"><span className="card-type">{resource.label}</span><div className="facebook-frame"><iframe title={resource.title} src={embed} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen /></div><h3>{resource.title}</h3></article>
  }
  if (resource.type === 'upcoming') return <article className="resource-card upcoming"><span className="card-type">{resource.label}</span><h3>{resource.title}</h3><p>{resource.description}</p></article>
  return <a className="resource-card featured" href={resource.href} target="_blank" rel="noreferrer"><span className="card-type">{resource.label}</span><span className="card-play">▶</span><h3>{resource.title}</h3><span className="card-link">Ver video ↗</span></a>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showResources, setShowResources] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark">AGP</span><span>Centro Neurobiótico</span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">☰</button>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}><a href="#enfoque" onClick={closeMenu}>Nuestro enfoque</a><a href="#experiencia" onClick={closeMenu}>Tu experiencia</a><button className="nav-link" onClick={() => { setShowResources(true); closeMenu() }}>Recursos</button><a href="#pma" onClick={closeMenu}>PMA</a><WhatsAppButton className="nav-cta">Reservar cita</WhatsAppButton></nav>
    </header>
    <main>
      <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Alternative &amp; Holistic Health Services</p><h1>Un espacio para <em>reconectar</em> con tu bienestar.</h1><p className="lede">Atención privada, humana y serena, enfocada en apoyar tu bienestar integral.</p><div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#enfoque">Conoce nuestro enfoque ↓</a></div><p className="appointment-note">Atención exclusivamente con cita previa.</p></div><a className="hero-video" href="https://gemini.google.com/share/ebda272d98f5" target="_blank" rel="noreferrer"><span>Conoce AGP</span><b>▶</b><strong>Ver presentación<br />en video</strong><small>Abrir video ↗</small></a></section>
      <section className="intro" id="enfoque"><p className="eyebrow">Nuestro enfoque</p><div className="intro-grid"><h2>Entendemos. Tratamos.<br /><em>Transformamos.</em></h2><div><p>La neurobiótica es un enfoque de bienestar que busca favorecer una mayor armonía y energía en la vida cotidiana, con atención consciente a los efectos del estrés.</p><p>Tu proceso se acompaña de forma individual y confidencial, respetando tu ritmo y tus necesidades.</p></div></div></section>
      <section className="principles"><article><span>01</span><h3>Atención personal</h3><p>Cada cita comienza escuchando lo que hoy necesitas.</p></article><article><span>02</span><h3>Bienestar integral</h3><p>Un espacio que considera mente, cuerpo y calidad de vida.</p></article><article><span>03</span><h3>Ambiente sereno</h3><p>Privacidad, calma y presencia para tu experiencia.</p></article></section>
      <section className="experience" id="experiencia"><div className="experience-image"><img src="/neuro-wave.jpeg" alt="Silueta y ondas de colores" /></div><div className="experience-copy"><p className="eyebrow">Tu experiencia</p><h2>El primer paso puede ser sencillo.</h2><ol><li>Escríbenos por WhatsApp</li><li>Coordinamos tu cita privada</li><li>Ven con apertura y calma</li></ol><WhatsAppButton className="button button-dark">Quiero solicitar una cita ↗</WhatsAppButton></div></section>
      <section className="pma" id="pma"><p className="eyebrow">Comunidad privada</p><h2>Una atención basada en confianza.</h2><p>AGP Centro Neurobiótico opera como una Private Member Association (PMA), con una relación de atención privada, respetuosa y centrada en el bienestar de sus miembros.</p></section>
      <section className="resources-preview"><div><p className="eyebrow">Recursos de bienestar</p><h2>Información para acompañarte.</h2><p>Videos y reflexiones de interés sobre bienestar integral y hábitos conscientes.</p></div><button className="button button-dark" onClick={() => setShowResources(true)}>Explorar recursos ↗</button></section>
      <section className="contact"><div><p className="eyebrow">Comienza hoy</p><h2>Agenda tu momento de bienestar.</h2><p>Atención por cita previa, directamente por WhatsApp.</p></div><WhatsAppButton>WhatsApp: (434) 409-5357 ↗</WhatsAppButton></section>
    </main>
    <footer><img src="/agp-logo.jpeg" alt="AGP Centro Neurobiótico" /><div><strong>AGP Centro Neurobiótico</strong><p>Alternative &amp; Holistic Health Services</p></div><p>La información de este sitio es educativa y de bienestar; no sustituye la evaluación, diagnóstico o tratamiento de un profesional médico.</p></footer>
    {showResources && <div className="modal" role="dialog" aria-modal="true" aria-label="Recursos de bienestar"><div className="modal-content"><button className="close" onClick={() => setShowResources(false)} aria-label="Cerrar">×</button><p className="eyebrow">Recursos de bienestar</p><h2>Videos para explorar con calma.</h2><div className="video-grid">{resources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}</div><p className="resource-note">Contenido educativo y de bienestar general. No sustituye la atención médica profesional.</p></div></div>}
  </>
}
