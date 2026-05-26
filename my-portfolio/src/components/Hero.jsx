function Hero() {
  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>Talha Farooq</h1>
      <p style={styles.p}>Python Developer | AI & Backend Enthusiast</p>
      <div style={styles.buttons}>
        <a href="#projects" style={styles.btnPrimary}>View My Work</a>
        <a href="#contact" style={styles.btnOutline}>Contact Me</a>
      </div>
    </section>
  )
}

const styles = {
  section: {
    textAlign: 'center',
    padding: '60px 40px',
  },
  h1: {
    fontSize: '52px',
    color: 'var(--accent)',
    marginBottom: '16px',
  },
  p: {
    fontSize: '20px',
    color: 'var(--muted)',
    marginBottom: '40px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
btnPrimary: {
    backgroundColor: 'var(--accent)',
    color: '#ffffff',
    padding: '12px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
  },
btnOutline: {
    border: '2px solid var(--accent)',
    color: 'var(--accent)',
    padding: '12px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
  }
}

export default Hero