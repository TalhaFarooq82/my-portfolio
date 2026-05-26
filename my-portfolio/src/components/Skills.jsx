function SkillGroup({ title, skills }) {
  return (
    <div style={styles.group} data-aos="fade-up">
      <h3 style={styles.groupTitle}>{title}</h3>
      <ul style={styles.ul}>
        {skills.map((skill) => (
          <li key={skill} style={styles.li}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.grid}>
        <SkillGroup title="Languages" skills={['Python', 'JavaScript', 'C++']} />
        <SkillGroup title="Web" skills={['Flask', 'Django', 'HTML / CSS']} />
        <SkillGroup title="AI / ML" skills={['Machine Learning', 'Deep Learning', 'RAG / NLP', 'CNN / LSTM']} />
        <SkillGroup title="Tools" skills={['GitHub', 'MySQL', 'PostgreSQL', 'VS Code']} />
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: 'var(--bg2)',
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
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  group: {
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--accent)',
    borderRadius: '12px',
    padding: '20px 28px',
    minWidth: '160px',
  },
  groupTitle: {
    color: 'var(--accent)',
    fontSize: '16px',
    marginBottom: '12px',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    color: 'var(--muted)',
    fontSize: '14px',
    padding: '4px 0',
    borderBottom: '1px solid var(--bg2)',
  }
}

export default Skills