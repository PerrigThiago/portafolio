import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { id: 'inicio',     label: 'Inicio' },
  { id: 'sobre-mi',  label: 'Sobre Mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto',  label: 'Contacto' },
]

export default function Navbar({ active, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Thiago.Dev</div>
      <div className={styles.links}>
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.btn} ${active === id ? styles.active : ''}`}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
