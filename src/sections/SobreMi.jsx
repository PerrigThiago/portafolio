import styles from './SobreMi.module.css'

const SKILLS = [
  { label: 'React / Vite', value: 90 },
  { label: 'Node.js',       value: 80 },
  { label: 'CSS / Tailwind', value: 85 },
  { label: 'TypeScript',    value: 70 },
  { label: 'PostgreSQL',    value: 65 },
]

export default function SobreMi() {
  return (
    <section className={styles.section}>
      <span className={styles.label}>Quién soy</span>
      <h2 className={styles.heading}>Sobre Mí</h2>

      <div className={styles.grid}>
        <div className={styles.text}>
          <p>Soy un desarrollador full-stack especializado en el desarrollo de Aplicaciones Web.</p>
          <p>Me interesa no solo desarrollar aplicaciones, sino también mejorarlas de forma continua, automatizar procesos y resolver problemas reales en distintos contextos.</p>
          <p>Mantengo un enfoque de aprendizaje constante basado en la práctica, priorizando buenas prácticas y el desarrollo de código limpio y mantenible.</p>
        </div>

        <div className={styles.skills}>
          {SKILLS.map(({ label, value }) => (
            <div key={label} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <div className={styles.skillBar}>
                <div className={styles.skillFill} style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
