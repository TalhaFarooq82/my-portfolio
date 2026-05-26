function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Talha Farooq</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg2)',
    borderTop: '1px solid var(--accent)',
    textAlign: 'center',
    padding: '20px',
    color: 'var(--muted)',
    fontSize: '14px',
  }
}

export default Footer