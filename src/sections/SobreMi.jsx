import styles from './SobreMi.module.css'

const SKILLS = [
  { label: 'React / Vite',  emoji: '⚛️' },
  { label: 'Java',          emoji: '☕' },
  { label: 'TypeScript',    emoji: '🔷' },
  { label: 'JavaScript',    emoji: '🟨' },
  { label: 'Python',        emoji: '🐍' },
  { label: 'Node.js',       emoji: '🟢' },
  { label: 'Express.js',    emoji: '🚂' },
  { label: 'Next.js',       emoji: '▲' },
  { label: 'Spring Boot',   emoji: '🍃' },
  { label: 'PostgreSQL',    emoji: '🐘' },
  { label: 'CSS',           emoji: '🎨' },
  { label: 'HTML',          emoji: '🌐' },
  { label: 'Tailwind CSS',  emoji: '💨' },
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

          <div className={styles.langBlock}>
            <span className={styles.langBadge}>📚 Inglés B1</span>
            <span className={styles.langNote}>En proceso de mejora continua</span>
          </div>
        </div>

        <div className={styles.skillsBlock}>
          <p className={styles.skillsTitle}>Tecnologías</p>
          <div className={styles.chips}>
            {SKILLS.map(({ label, emoji }) => (
              <span key={label} className={styles.chip}>
                <span className={styles.chipEmoji}>{emoji}</span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}