import '../src/styles.css'

export default function Oferta() {
  return (
    <div className="oferta-page">
      <section className="hero">
        <h1>✨ O Guia que Vai Transformar Seu Amor por Reborn em um Sonho Real! ✨</h1>
        <p className="sub">Descubra o universo mágico dos bebês reborn com um guia feito com carinho e paixão. ❤️</p>
        <button className="button" onClick={() => window.location.href = "https://seulink.com/comprar"}>
          Sim, eu quero cuidar melhor do meu bebê reborn!
        </button>
      </section>

      <section className="benefits">
        <div className="grid">
          <div className="card card-round">
            <img src="/bebe1.png" alt="Ícone lucro" className="icon" />
            <h3>📈 Lucro com Amor</h3>
            <p>Aprenda a transformar sua paixão em um negócio que aquece o coração e enche o bolso.</p>
          </div>
          <div className="card card-skew">
            <img src="https://cdn-icons-png.flaticon.com/512/3195/3195776.png" alt="Ícone cuidados" className="icon" />
            <h3>💖 Cuidado Profundo</h3>
            <p>Seu bebê reborn merece carinho profissional. Aprenda os segredos das artesãs mais respeitadas.</p>
          </div>
          <div className="card card-angled">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Ícone redes" className="icon" />
            <h3>📱 Redes Sociais que Vendem</h3>
            <p>Construa sua presença no Instagram, WhatsApp e TikTok com técnicas de venda irresistíveis.</p>
          </div>
          <div className="card card-rounded">
            <img src="https://cdn-icons-png.flaticon.com/512/2583/2583392.png" alt="Ícone autenticidade" className="icon" />
            <h3>🌟 Autenticidade Validada</h3>
            <p>Conteúdo que emociona. Validado por mães e colecionadoras apaixonadas por bebês reborn.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>❤️ O que dizem as apaixonadas por Reborn</h2>
        <div className="testimonial-grid">
          <blockquote>"Nunca imaginei que um e-book pudesse me fazer chorar de emoção! Obrigada por tanto!" – <i>Ana C.</i></blockquote>
          <blockquote>"Vendi meu primeiro reborn depois de aplicar só uma dica do guia. Tô emocionada!" – <i>Luiza R.</i></blockquote>
          <blockquote>"Cuido da minha bebê como se fosse real. O guia mudou minha vida!" – <i>Juliana F.</i></blockquote>
        </div>
      </section>

      <section className="cta">
        <h2 className="pulse">🚨 Últimas unidades promocionais disponíveis!</h2>
        <p>Garanta agora seu acesso vitalício ao guia mais amado do Brasil.</p>
        <button className="button button-big" onClick={() => window.location.href = "https://seulink.com/comprar"}>
          Sim! Quero meu Guia Reborn com Desconto ❤️
        </button>
      </section>
    </div>
  )
}
