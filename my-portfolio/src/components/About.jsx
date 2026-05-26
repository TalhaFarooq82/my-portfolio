function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        Python Developer with hands-on experience in backend development and AI-based systems.
        Skilled in building scalable web applications using Flask and Django, and developing
        intelligent solutions using Retrieval-Augmented Generation (RAG), Natural Language
        Processing (NLP), and machine learning. Passionate about solving real-world problems
        through clean, efficient code.
      </p>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: 'var(--bg2)',
    padding: '50px 40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: 'var(--text)',
    marginBottom: '24px',
  },
  text: {
    maxWidth: '720px',
    margin: '0 auto',
    fontSize: '17px',
    lineHeight: '1.8',
    color: 'var(--muted)',
  }
}

export default About