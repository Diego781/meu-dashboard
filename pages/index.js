export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f7f7",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px" }}>Dashboard de Rotina</h1>
        <p>Foco, disciplina, shape e menos procrastinação.</p>

        <h2>Rotina Base</h2>
        <ul>
          <li>08:00 → 17:00 Trabalho</li>
          <li>Pós-trabalho → Treino</li>
          <li>Meta diária → 2h de estudo</li>
          <li>Noite → Futebol + Meditação + Buteyko</li>
        </ul>

        <h2>Instagram</h2>
        <p>Meta: máximo 2h por dia</p>

        <h2>Regra Principal</h2>
        <p><strong>Disciplina {">"} motivação</strong></p>
      </div>
    </div>
  )
}
