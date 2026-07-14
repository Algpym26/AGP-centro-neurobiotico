import { useState } from 'react'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

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

function LegalModal({ type, onClose }) {
  const isPrivacy = type === 'privacy'
  return <div className="modal" role="dialog" aria-modal="true" aria-label={isPrivacy ? 'Aviso de privacidad' : 'Aviso de PMA'}><div className="modal-content legal-content"><button className="close" onClick={onClose} aria-label="Cerrar">×</button><p className="eyebrow">AGP Centro Neurobiótico · Actualizado el 14 de julio de 2026</p>{isPrivacy ? <><h2>Aviso de privacidad</h2><h3>Información que compartes</h3><p>Este sitio no utiliza formularios de contacto. Si nos escribes por WhatsApp, AGP recibirá la información que decidas compartir, como tu nombre, teléfono y mensaje, para responderte y coordinar una cita.</p><h3>Servicios de terceros</h3><p>WhatsApp, Facebook, Gemini y Google Fonts son servicios de terceros. Sus propios términos y políticas de privacidad aplican cuando utilizas sus plataformas o interactúas con videos integrados. No envíes información de emergencia por WhatsApp.</p><h3>Uso de la información</h3><p>La información compartida se utiliza para comunicación y coordinación de citas. Para solicitar información sobre una comunicación previa, contáctanos por WhatsApp al (434) 409-5357.</p></> : <><h2>Aviso de PMA y servicios</h2><h3>Operación privada</h3><p>AGP Centro Neurobiótico opera como una Private Member Association (PMA) en Fort Worth, Texas 76110, Southside. La comunicación inicial y las citas se coordinan directamente por WhatsApp.</p><h3>Alcance de bienestar</h3><p>Los servicios descritos en este sitio son de bienestar general. No tienen el propósito de diagnosticar, tratar, curar o prevenir enfermedades, ni sustituyen la atención de un médico u otro profesional de salud con licencia.</p><h3>Emergencias y decisiones de salud</h3><p>Para una emergencia, llama al 911 o busca atención de emergencia. Consulta a un profesional de salud calificado para dudas sobre una condición médica o tratamiento.</p><h3>Importante</h3><p>Este aviso es información general para el sitio y no constituye asesoría legal. La documentación y políticas finales de la PMA deben ser revisadas por un abogado con licencia en Texas.</p></>}</div></div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showResources, setShowResources] = useState(false)
  const [legalNotice, setLegalNotice] = useState(null)
  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark">AGP</span><span>Centro Neurobiótico</span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">☰</button>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}><a href="#enfoque" onClick={closeMenu}>Nuestro enfoque</a><a href="#servicios" onClick={closeMenu}>Servicios</a><a href="#sesion" onClick={closeMenu}>Primera sesión</a><button className="nav-link" onClick={() => { setShowResources(true); closeMenu() }}>Recursos</button><a href="#pma" onClick={closeMenu}>PMA</a><WhatsAppButton className="nav-cta">Reservar cita</WhatsAppButton></nav>
    </header>
    <main>
      <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Alternative &amp; Holistic Health Services</p><h1>Un espacio para <em>reconectar</em> con tu bienestar.</h1><p className="lede">Atención privada, humana y serena, enfocada en apoyar tu bienestar integral.</p><div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#enfoque">Conoce nuestro enfoque ↓</a></div><p className="appointment-note">Atención exclusivamente con cita previa.</p></div><a className="hero-video" href="https://gemini.google.com/share/ebda272d98f5" target="_blank" rel="noreferrer"><span>Conoce AGP</span><b>▶</b><strong>Ver presentación<br />en video</strong><small>Abrir video ↗</small></a></section>
      <section className="intro" id="enfoque"><p className="eyebrow">Nuestro enfoque</p><div className="intro-grid"><h2>Entendemos. Tratamos.<br /><em>Transformamos.</em></h2><div><p>La neurobiótica es un enfoque de bienestar que busca favorecer una mayor armonía y energía en la vida cotidiana, con atención consciente a los efectos del estrés.</p><p>Tu proceso se acompaña de forma individual y confidencial, respetando tu ritmo y tus necesidades.</p></div></div></section>
      <section className="services" id="servicios"><div><p className="eyebrow">Servicios de bienestar</p><h2>Atención personalizada, con intención.</h2><p>Las sesiones se adaptan a las necesidades de cada persona y se realizan exclusivamente con cita previa.</p></div><div className="service-list"><article><span>01</span><h3>Alineamientos manuales</h3><p>Prácticas manuales de bienestar orientadas a favorecer una sensación de sincronía corporal.</p></article><article><span>02</span><h3>Puntos de presión</h3><p>Atención manual enfocada en puntos de presión, integrada de acuerdo con cada sesión.</p></article><article><span>03</span><h3>Aceites esenciales</h3><p>Uso opcional de aceites esenciales cuando sea apropiado para la experiencia de bienestar.</p></article></div></section>
      <section className="session" id="sesion"><div className="session-image"><img src={asset('neurobiotica-sesion.png')} alt="Ilustración artística del sistema nervioso y la conexión cuerpo-mente" /></div><div className="session-copy"><p className="eyebrow">Primera visita</p><h2>Comienza con una sesión de evaluación.</h2><p>La primera cita es un espacio para conocernos, escuchar lo que buscas para tu bienestar y conversar sobre tus preferencias. A partir de esa conversación, te explicamos cómo se desarrollará tu experiencia y realizas tu primera sesión.</p><p className="session-note">Cada persona vive el proceso de manera diferente. Nuestro enfoque es individual, respetuoso y diseñado alrededor de tu comodidad.</p><h3>¿Qué es la alineación neurobiótica?</h3><p>En AGP utilizamos este nombre para describir un enfoque de bienestar que integra atención corporal consciente, alineamientos manuales, puntos de presión y, cuando se acuerda, aceites esenciales. La intención es ofrecer un momento de reconexión, calma y presencia.</p><p>Es una experiencia no invasiva y no utiliza medicamentos. No sustituye la evaluación, diagnóstico ni el tratamiento de un profesional de salud con licencia.</p><WhatsAppButton className="button button-dark">Solicitar mi primera cita ↗</WhatsAppButton></div></section>
      <section className="principles"><article><span>01</span><h3>Atención personal</h3><p>Cada cita comienza escuchando lo que hoy necesitas.</p></article><article><span>02</span><h3>Bienestar integral</h3><p>Un espacio que considera mente, cuerpo y calidad de vida.</p></article><article><span>03</span><h3>Ambiente sereno</h3><p>Privacidad, calma y presencia para tu experiencia.</p></article></section>
      <section className="experience" id="experiencia"><div className="experience-image"><img src={asset('neuro-wave.jpeg')} alt="Silueta y ondas de colores" /></div><div className="experience-copy"><p className="eyebrow">Tu experiencia</p><h2>El primer paso puede ser sencillo.</h2><ol><li>Escríbenos por WhatsApp</li><li>Coordinamos tu cita privada</li><li>Ven con apertura y calma</li></ol><WhatsAppButton className="button button-dark">Quiero solicitar una cita ↗</WhatsAppButton></div></section>
      <section className="pricing" id="paquetes"><div className="pricing-heading"><p className="eyebrow">Inversión en tu bienestar</p><h2>Opciones para tu proceso.</h2><p>Todos los servicios se coordinan por cita previa a través de WhatsApp.</p></div><div className="price-grid"><article className="price-card"><p>Alineamiento individual</p><strong>$80</strong><span>por sesión individual</span><WhatsAppButton className="price-link">Solicitar cita ↗</WhatsAppButton></article><article className="price-card featured-price"><p>Paquete de 4 visitas</p><strong>$280</strong><span>4 visitas individuales</span><WhatsAppButton className="price-link">Solicitar paquete ↗</WhatsAppButton></article><article className="price-card"><p>Paquete familiar</p><strong>$640</strong><span>10 visitas para compartir</span><WhatsAppButton className="price-link">Solicitar paquete ↗</WhatsAppButton></article></div><p className="package-terms">Los paquetes son válidos por un año a partir de su compra y no son reembolsables. El paquete familiar puede compartirse con familiares con la autorización del titular.</p></section>
      <section className="pma" id="pma"><p className="eyebrow">Comunidad privada</p><h2>Una atención basada en confianza.</h2><p>AGP Centro Neurobiótico opera como una Private Member Association (PMA), con una relación de atención privada, respetuosa y centrada en el bienestar de sus miembros.</p></section>
      <section className="resources-preview"><div><p className="eyebrow">Recursos de bienestar</p><h2>Información para acompañarte.</h2><p>Videos y reflexiones de interés sobre bienestar integral y hábitos conscientes.</p></div><button className="button button-dark" onClick={() => setShowResources(true)}>Explorar recursos ↗</button></section>
      <section className="contact"><div><p className="eyebrow">Fort Worth · Southside</p><h2>Agenda tu momento de bienestar.</h2><p>Atendemos en Fort Worth, Texas 76110, Southside. Los horarios se coordinan individualmente por WhatsApp, ya que varían cada semana.</p></div><WhatsAppButton>Solicitar cita por WhatsApp ↗</WhatsAppButton></section>
    </main>
    <footer><img src={asset('agp-logo.jpeg')} alt="AGP Centro Neurobiótico" /><div><strong>AGP Centro Neurobiótico</strong><p>Fort Worth, Texas 76110 · Southside</p></div><div><p>La información de este sitio es educativa y de bienestar; no sustituye la evaluación, diagnóstico o tratamiento de un profesional médico.</p><div className="legal-links"><button onClick={() => setLegalNotice('privacy')}>Privacidad</button><button onClick={() => setLegalNotice('pma')}>PMA y alcance de servicios</button></div></div></footer>
    {showResources && <div className="modal" role="dialog" aria-modal="true" aria-label="Recursos de bienestar"><div className="modal-content"><button className="close" onClick={() => setShowResources(false)} aria-label="Cerrar">×</button><p className="eyebrow">Recursos de bienestar</p><h2>Videos para explorar con calma.</h2><div className="video-grid">{resources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}</div><p className="resource-note">Contenido educativo y de bienestar general. No sustituye la atención médica profesional.</p></div></div>}
    {legalNotice && <LegalModal type={legalNotice} onClose={() => setLegalNotice(null)} />}
  </>
}
