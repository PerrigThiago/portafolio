import styles from './Inicio.module.css'

export default function Inicio({ onNavigate }) {
  return (
    <section className={styles.section}>
      <span className={styles.tag}>Disponible para proyectos y trabajos</span>
      <div className={styles.decoLine} />
      <h1 className={styles.heading}>
        Hola, soy<br />
        <span className={styles.name}>Thiago Perrig</span>
      </h1>
      <p className={styles.sub}>
        Desarrollador web apasionado por crear experiencias digitales
        limpias, funcionales y con identidad propia.
      </p>
      <div className={styles.btns}>
        <button className={styles.btnPrimary} onClick={() => onNavigate('proyectos')}>
          Ver proyectos
        </button>
        <button className={styles.btnGhost} onClick={() => onNavigate('contacto')}>
          Contactar
        </button>
      </div>
    </section>
  )
}
