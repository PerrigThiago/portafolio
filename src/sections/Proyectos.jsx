import styles from './Proyectos.module.css'

const PROJECTS = [
  {
    num: '01',
    tag: 'Aplicación Web',
    title: 'Sistema de registro y login',
    desc: 'Aplicación para registrar, verificar y validar usuarios con gmail.',
    chips: ['React', 'Express.js', 'PostgreSQL', 'Neon'],
    url: 'https://tu-deploy-1.vercel.app', // ← reemplazá con tu URL
  },
  {
    num: '02',
    tag: 'Aplicación web',
    title: 'Turnero Digital',
    desc: 'Aplicación de automatizacion de turnos digitales.',
    chips: ['React', 'Express.js', 'PostgreSQL', 'Neon'],
    url: 'https://tu-deploy-2.vercel.app',
  },
  {
    num: '03',
    tag: 'Aplicación web',
    title: 'Sistema de ventas y control de stock',
    desc: 'Aplicación para ventas de productos. Ofrece tambien control, notificacion y seguimiento de los productos y el stock.',
    chips: ['React', 'Express.js', 'PostgreSQL', 'Neon'],
    url: 'https://tu-deploy-3.vercel.app',
  },
  {
    num: '04',
    tag: 'Aplicación web',
    title: 'Sistema de pedidos',
    desc: 'Aplicación de pedidos de comidas para rotiseria.',
    chips: ['TypeScript', 'React', 'Next.js', 'Tailwind Css', 'PostgreSQL', 'Supabase'],
    url: 'https://tu-deploy-4.vercel.app',
  },
]

export default function Proyectos() {
  return (
    <section className={styles.section}>
      <span className={styles.label}>Mi experiencia personal</span>
      <h2 className={styles.heading}>Proyectos</h2>
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <div key={p.num} className={styles.card}>

            {/* Ícono de link — esquina superior derecha */}
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={styles.linkIcon}
              title="Ver proyecto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>

            <div className={styles.num}>{p.num}</div>
            <div className={styles.tag}>{p.tag}</div>
            <div className={styles.title}>{p.title}</div>
            <div className={styles.desc}>{p.desc}</div>
            <div className={styles.chips}>
              {p.chips.map((c) => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}