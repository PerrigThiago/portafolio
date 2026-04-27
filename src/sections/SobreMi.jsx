import styles from './SobreMi.module.css'
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const SKILLS = [
  { label: 'React / Vite',  emoji: <FaReact /> },
  { label: 'Java',          emoji: <FaJava /> },
  { label: 'TypeScript',    emoji: <SiTypescript /> },
  { label: 'JavaScript',    emoji: <IoLogoJavascript /> },
  { label: 'Python',        emoji: <FaPython /> },
  { label: 'Node.js',       emoji: <FaNodeJs /> },
  { label: 'Express.js',    emoji: <SiExpress /> },
  { label: 'Spring Boot',   emoji: <SiSpring /> },
  { label: 'PostgreSQL',    emoji: <BiLogoPostgresql /> },
  { label: 'CSS',           emoji: <FaCss3Alt /> },
  { label: 'HTML',          emoji: <FaHtml5 /> },
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
            <span className={styles.langBadge}> <GiBookshelf /> Inglés B1</span>
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