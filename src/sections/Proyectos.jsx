import styles from './Proyectos.module.css'

const PROJECTS = [
  {
    num: '01',
    tag: 'Aplicación Web',
    title: 'Sistema de registro y login',
    desc: 'Aplicación para registrar, verificar y validar usuarios con gmail.',
    chips: ['JavaScript', 'React', 'Express', 'PostgreSQL', 'Neon'],
    url: 'login-registro-five.vercel.app',
    repo: 'https://github.com/PerrigThiago', // ← reemplazá con tu repo
  },
  {
    num: '02',
    tag: 'Aplicación web',
    title: 'Agenda de turnos digital',
    desc: 'Aplicación de automatizacion de turnos digitales.',
    chips: ['JavaScript','React', 'Express', 'PostgreSQL', 'Neon'],
    url: 'https://sistema-de-turnos-x23u.vercel.app/',
    repo: 'https://github.com/PerrigThiago', // ← reemplazá con tu repo
  },
  {
    num: '03',
    tag: 'Aplicación web',
    title: 'Sistema de ventas y control de stock',
    desc: 'Aplicación para ventas de productos. Ofrece tambien control, notificacion y seguimiento de los productos y el stock.',
    chips: ['JavaScript', 'React', 'Express', 'PostgreSQL', 'Neon'],
    url: 'https://tu-deploy-3.vercel.app',
    repo: 'https://github.com/PerrigThiago', // ← reemplazá con tu repo
  },
  {
    num: '04',
    tag: 'Aplicación web',
    title: 'Sistema de pedidos',
    desc: 'Aplicación de pedidos de comidas para rotiseria.',
    chips: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Supabase'],
    url: 'https://tu-deploy-4.vercel.app',
    repo: 'https://github.com/PerrigThiago', // ← reemplazá con tu repo
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

            <div className={styles.cardIcons}>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkIcon}
                  title="Ver repositorio en GitHub"
                >
                  {/* GitHub logo SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
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
            </div>

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