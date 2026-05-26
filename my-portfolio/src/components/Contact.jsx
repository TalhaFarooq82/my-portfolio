function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <p style={styles.sub}>Feel free to reach out — I'm open to opportunities and collaborations.</p>
      <div style={styles.links}>
        <a href="mailto:talha.farooq6625@gmail.com" style={styles.card}>
          <span style={styles.label}>Email</span>
          <span style={styles.value}>talha.farooq6625@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/talha-farooq-45267a297" target="_blank" style={styles.card}>
          <span style={styles.label}>LinkedIn</span>
          <span style={styles.value}>linkedin.com/in/talha-farooq</span>
        </a>
        <a href="https://github.com/TalhaFarooq82" target="_blank" style={styles.card}>
          <span style={styles.label}>GitHub</span>
          <span style={styles.value}>github.com/TalhaFarooq82</span>
        </a>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '50px 40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: 'var(--text)',
    marginBottom: '16px',
  },
  sub: {
    color: 'var(--muted)',
    fontSize: '16px',
    marginBottom: '40px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--bg2)',
    border: '1px solid var(--accent)',
    borderRadius: '12px',
    padding: '20px 28px',
    textDecoration: 'none',
    minWidth: '200px',
  },
  label: {
    fontSize: '12px',
    color: 'var(--muted)',
    marginBottom: '6px',
  },
  value: {
    fontSize: '14px',
    color: 'var(--text)',
    fontWeight: '500',
  }
}

export default Contact