function ProjectCard({ title, description, tags }) {
  return (
    <div style={styles.card} data-aos="fade-up">
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{description}</p>
      <div style={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} style={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>

        <ProjectCard
          title="Quiz App"
          description="Full-stack quiz application built with Flask. Features authentication, session management, and score tracking."
          tags={['Python', 'Flask', 'Bootstrap']}
        />

        <ProjectCard
          title="Islamic AI Tutor"
          description="RAG-based chatbot using vector embeddings and NLP for context-aware Islamic knowledge answers."
          tags={['Python', 'RAG', 'NLP']}
        />

        <ProjectCard
          title="Quran Recitation AI"
          description="AI system that analyzes Quran recitation audio, detects pronunciation errors and helps users improve accuracy."
          tags={['Python', 'Speech AI', 'ML']}
        />

      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '50px 40px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    color: 'var(--text)',
    marginBottom: '48px',
  },
  grid: {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'var(--bg2)',
    border: '1px solid var(--accent)',
    borderRadius: '12px',
    padding: '20px',
    width: '260px',
  },
  cardTitle: {
    fontSize: '20px',
    color: 'var(--accent)',
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--muted)',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    backgroundColor: 'var(--bg)',
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '12px',
  }
}

export default Projects