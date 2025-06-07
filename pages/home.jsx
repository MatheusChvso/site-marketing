import '../src/styles.css'


export default function Home() {
  return (
    <div className="container">
      <h1>Guia do Bebê Reborn 👶✨</h1>
      <p>Cuide do seu bebê reborn como um profissional!</p>
      <button className="button" onClick={() => window.location.href = "/oferta"}>
        Veja por que você precisa desse e-book
      </button>
    </div>
  )
}
