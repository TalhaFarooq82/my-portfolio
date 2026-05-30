function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <span style={styles.logo}>
            <span style={styles.logoIcon}>✦</span>
            TF
        </span>
        <ul style={styles.ul}>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#projects" style={styles.link}>Projects</a></li>
          <li><a href="#skills" style={styles.link}>Skills</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: 'var(--bg2)',
    padding: '0 40px',
    borderBottom: '1px solid var(--accent)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'var(--accent)',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'var(--accent)',
    },

   logoIcon: {
    fontSize: '18px',
    color: 'var(--accent)',
    animation: 'spin 4s linear infinite',
    }, 

  ul: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text)',
    fontSize: '15px',
  }
}

export default Navbar