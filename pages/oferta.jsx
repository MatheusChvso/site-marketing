import '../src/styles.css'

export default function Oferta() {
  return (
    <div className="oferta-page">
      <h1>Transforme sua Paixão por Reborn em Lucro!</h1>
      <p className="sub">O guia mais completo para quem ama e quer vender bebês reborn!</p>

      <div className="grid">
        <div className="card">
          <h3>📈 Lucre com o que ama</h3>
          <p>Descubra técnicas que colecionadores e vendedores profissionais usam para transformar um hobby em renda extra!</p>
        </div>
        <div className="card">
          <h3>💡 Cuidados profissionais</h3>
          <p>Aprenda os métodos de limpeza, manutenção e realismo que aumentam o valor de mercado do seu bebê reborn.</p>
        </div>
        <div className="card">
          <h3>📱 Venda nas redes sociais</h3>
          <p>Dicas práticas para montar sua loja no Instagram e WhatsApp e alcançar o público certo.</p>
        </div>
        <div className="card">
          <h3>🎯 100% validado</h3>
          <p>Conteúdo validado por mães, colecionadoras e artesãs experientes do Brasil inteiro.</p>
        </div>
      </div>

      <button className="button" onClick={() => window.location.href = "https://seulink.com/comprar"}>
        Quero garantir meu e-book agora!
      </button>
    </div>
  )
}
