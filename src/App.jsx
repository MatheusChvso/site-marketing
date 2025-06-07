import './styles.css'

function App() {
  return (
    <div className="container">
      <h1>Guia Completo: Como Cuidar do Seu Bebê Reborn 👶💖</h1>
      <img className="cover" src="/ebook-cover.png" alt="Capa do e-book" />
      <p>
        Descubra os segredos e cuidados essenciais para manter seu bebê reborn sempre lindo, limpo e com aparência realista.
      </p>
      <p>
        Criado por especialistas para pais e colecionadores apaixonados.
      </p>
      <button className="button" onClick={() => window.location.href = 'https://seulinkdecompra.com'}>
        Quero o meu e-book agora!
      </button>
    </div>
  );
}

export default App;
