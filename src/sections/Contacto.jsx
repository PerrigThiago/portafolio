import { useState } from 'react'
import styles from './Contacto.module.css'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Conectá aquí EmailJS, Formspree, o tu propio backend
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className={styles.section}>
      <span className={styles.label}>Hablemos</span>
      <h2 className={styles.heading}>Contacto</h2>
      <p className={styles.sub}>
        ¿Tenés un proyecto en mente o simplemente querés conectar?
        Escribime, respondo en menos de 24 horas.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" required />
        </div>
        <div className={styles.group}>
          <label>Email</label>
          <input type="email" placeholder="tu@mail.com" required />
        </div>
        <div className={styles.group}>
          <label>Mensaje</label>
          <textarea placeholder="Contame sobre tu proyecto..." required />
        </div>
        <button className={styles.btnSend} type="submit">
          {sent ? '¡Enviado!' : 'Enviar mensaje'}
        </button>
      </form>

      <div className={styles.social}>
        <a className={styles.socialLink} href="https://github.com/PerrigThiago" target="_blank" rel="noreferrer">GitHub</a>
        <a className={styles.socialLink} href="https://www.linkedin.com/in/thiago-perrig/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
