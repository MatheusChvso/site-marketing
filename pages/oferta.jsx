import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../src/styles.css';

export default function Oferta() {
  // Estado para a contagem regressiva
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        return { hours: 0, minutes: 0, seconds: 0 }; // Timer zerado
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-between">
      {/* Barra lateral da esquerda - Contagem Regressiva */}
      <aside className="sidebar-left bg-danger text-white text-center p-4 rounded shadow">
        <h3 className="fw-bold">⏳ Oferta por Tempo Limitado!</h3>
        <p>Corre antes que acabe!</p>
        <motion.div 
          className="timer fs-3 fw-bold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </motion.div>
        <motion.button 
          className="btn btn-warning fw-bold mt-3 shadow-lg"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.location.href = "https://seulink.com/comprar"}
        >
          Comprar Agora 🔥
        </motion.button>
      </aside>

      {/* Conteúdo principal */}
      <main className="container text-center py-5 flex-grow-1">
        {/* Seção principal */}
        <motion.section 
          className="bg-light p-5 rounded shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold text-danger">✨ O Guia que Vai Transformar Seu Amor por Reborn em um Sonho Real! ✨</h1>
          <p className="lead text-dark">Descubra o universo mágico dos bebês reborn com um guia feito com carinho e paixão. ❤️</p>
          <motion.button 
            className="btn btn-lg btn-success fw-bold shadow-lg"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = "https://seulink.com/comprar"}
          >
            Sim, eu quero cuidar melhor do meu bebê reborn!
          </motion.button>
        </motion.section>

        {/* Benefícios */}
        <section className="mt-5">
          <div className="row g-4">
            <div className="col-md-6">
              <motion.div 
                className="card text-center p-4 border-0 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/bebex.png" alt="Ícone lucro" className="img-fluid mx-auto mb-3" />
                <h3 className="text-primary">📈 Lucro com Amor</h3>
                <p>Aprenda a transformar sua paixão em um negócio que aquece o coração e enche o bolso.</p>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div 
                className="card text-center p-4 border-0 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img src="ebookcover.png" alt="Ícone cuidados" className="img-fluid mx-auto mb-3" />
                <h3 className="text-primary">💖 Cuidado Profundo</h3>
                <p>Seu bebê reborn merece carinho profissional. Aprenda os segredos das artesãs mais respeitadas.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Depoimentos com fotos */}
<section className="mt-5 bg-light p-5 rounded shadow">
  <h2 className="fw-bold text-dark">❤️ O que dizem as apaixonadas por Reborn</h2>
  <div className="row g-4">
    {/* Depoimento 1 */}
    <div className="col-md-4 text-center">
      <motion.div 
        className="testimonial-card p-3 border rounded shadow"
        whileHover={{ scale: 1.05 }}
      >
        <img src="cliente1.png" alt="Foto de cliente" className="testimonial-img rounded-circle mb-3" />
        <blockquote className="blockquote text-primary">"Nunca imaginei que um e-book pudesse me fazer chorar de emoção! Obrigada por tanto!"</blockquote>
        <i><strong>Ana C.</strong></i>
      </motion.div>
    </div>

    {/* Depoimento 2 */}
    <div className="col-md-4 text-center">
      <motion.div 
        className="testimonial-card p-3 border rounded shadow"
        whileHover={{ scale: 1.05 }}
      >
        <img src="cliente2.png" alt="Foto de cliente" className="testimonial-img rounded-circle mb-3" />
        <blockquote className="blockquote text-success">"Vendi meu primeiro reborn depois de aplicar só uma dica do guia. Tô emocionada!"</blockquote>
        <i><strong>Luiza R.</strong></i>
      </motion.div>
    </div>

    {/* Depoimento 3 */}
    <div className="col-md-4 text-center">
      <motion.div 
        className="testimonial-card p-3 border rounded shadow"
        whileHover={{ scale: 1.05 }}
      >
        <img src="cliente3.png" alt="Foto de cliente" className="testimonial-img rounded-circle mb-3" />
        <blockquote className="blockquote text-danger">"Cuido da minha bebê como se fosse real. O guia mudou minha vida!"</blockquote>
        <i><strong>Juliana F.</strong></i>
      </motion.div>
    </div>
  </div>
</section>

        {/* Chamada para ação */}
        <motion.section 
          className="mt-5 text-center p-5 bg-danger text-white rounded shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fw-bold">🚨 Últimas unidades promocionais disponíveis!</h2>
          <p>Garanta agora seu acesso vitalício ao guia mais amado do Brasil.</p>
          <motion.button 
            className="btn btn-lg btn-warning fw-bold shadow-lg mt-3"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = "https://seulink.com/comprar"}
          >
            Sim! Quero meu Guia Reborn com Desconto ❤️
          </motion.button>
        </motion.section>
      </main>

      {/* Barra lateral da direita - Galeria de Imagens */}
      <aside className="sidebar-right bg-light text-center p-4 rounded shadow">
  <h3 className="fw-bold text-primary">📸 Bebês Reborn em Destaque</h3>
  <motion.div 
    className="image-gallery"
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <img src="bebe1.png" alt="Bebê Reborn 1" className="img-fixed rounded mb-3" />
    <img src="bebe3.png" alt="Bebê Reborn 2" className="img-fixed rounded mb-3" />
    <img src="bebe4.png" alt="Bebê Reborn 3" className="img-fixed rounded mb-3" />
    <img src="bebe2.png" alt="Bebê Reborn 3" className="img-fixed rounded mb-3" />
    <img src="bebe5.png" alt="Bebê Reborn 3" className="img-fixed rounded mb-3" />
    <img src="bebe6.png" alt="Bebê Reborn 3" className="img-fixed rounded mb-3" />
  </motion.div>
</aside>
    </div>
  );
}