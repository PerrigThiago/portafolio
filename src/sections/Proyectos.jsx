import styles from './Proyectos.module.css'

const PROJECTS = [
  {
    num: '01',
    tag: 'Aplicación Web',
    title: 'Sistema de registro y login',
    desc: 'Aplicación para registrar, verificar y validar usuarios con gmail.',
    chips: ['React', 'Express.js', 'PostgreSQL', 'Neon'],
  },
  {
    num: '02',
    tag: 'Aplicación web',
    title: 'Turnero Digital',
    desc: 'Aplicación de automatizacion de turnos digitales.',
    chips: ['React', 'Express.js', 'PostgreSQL', 'Neon'],
  },
  {
    num: '03',
    tag: 'Aplicacón web',
    title: 'Sistema de ventas y control de stock',
    desc: 'Aplicación para ventas de productos. Ofrece tambien control, notificacion y seguimiento de los productos y el stock.',
    chips: ['React', 'Express.js', 'PostgreSQL', 'Neon'],
  },
  {
    num: '04',
    tag: 'Aplicación web',
    title: 'Sistema de pedidos',
    desc: 'Aplicación de pedidos de comidas para rotiseria.',
    chips: ['TypeScript', 'React', 'Next.js', 'Tailwind Css', 'PostgreSQL', 'Supabase'],
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
