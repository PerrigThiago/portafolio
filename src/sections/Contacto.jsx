import { useState } from 'react'
import styles from './Contacto.module.css'

const FORMSPREE_URL = 'https://formspree.io/f/mnjllqnp'

export default function Contacto() {
  const [status, setStatus] = useState('idle') 

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
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
          <input name="name" type="text" placeholder="Tu nombre" required />
        </div>
        <div className={styles.group}>
          <label>Email</label>
          <input name="email" type="email" placeholder="tu@mail.com" required />
        </div>
        <div className={styles.group}>
          <label>Mensaje</label>
          <textarea name="message" placeholder="Contame sobre tu proyecto..." required />
        </div>
        <button className={styles.btnSend} type="submit" disabled={status === 'sending'}>
          {status === 'sending' && 'Enviando...'}
          {status === 'sent'    && '¡Mensaje enviado!'}
          {status === 'error'   && 'Error, intentá de nuevo'}
          {status === 'idle'    && 'Enviar mensaje'}
        </button>
      </form>

      <div className={styles.social}>
        <a className={styles.socialLink} href="https://github.com/PerrigThiago" target="_blank" rel="noreferrer">GitHub</a>
        <a className={styles.socialLink} href="https://www.linkedin.com/in/thiago-perrig/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}