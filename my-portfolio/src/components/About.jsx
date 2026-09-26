function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        AI/ML Engineer and Data Scientist with hands-on industry experience building production AI
        and machine learning systems. Currently a Junior AI Developer at Startex Marketing Services,
        working across demand forecasting, LLM-based data extraction pipelines, and agentic AI
        features for live client products. Skilled in Python, FastAPI, LangChain/LangGraph, RAG,
        and applied ML. Comfortable owning a system end-to-end — from model development to deployment.
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