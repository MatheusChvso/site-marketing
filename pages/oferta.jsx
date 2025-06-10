import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import '../src/styles.css';

export default function Oferta() {
  return (
    <div className="container text-center py-5">
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
              <img src="/bebe1.png" alt="Ícone lucro" className="img-fluid mx-auto mb-3" />
              <h3 className="text-primary">📈 Lucro com Amor</h3>
              <p>Aprenda a transformar sua paixão em um negócio que aquece o coração e enche o bolso.</p>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div 
              className="card text-center p-4 border-0 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3195/3195776.png" alt="Ícone cuidados" className="img-fluid mx-auto mb-3" />
              <h3 className="text-primary">💖 Cuidado Profundo</h3>
              <p>Seu bebê reborn merece carinho profissional. Aprenda os segredos das artesãs mais respeitadas.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mt-5 bg-light p-5 rounded shadow">
        <h2 className="fw-bold text-dark">❤️ O que dizem as apaixonadas por Reborn</h2>
        <div className="mt-3">
          <blockquote className="blockquote text-primary">"Nunca imaginei que um e-book pudesse me fazer chorar de emoção! Obrigada por tanto!" – <i>Ana C.</i></blockquote>
          <blockquote className="blockquote text-success">"Vendi meu primeiro reborn depois de aplicar só uma dica do guia. Tô emocionada!" – <i>Luiza R.</i></blockquote>
          <blockquote className="blockquote text-danger">"Cuido da minha bebê como se fosse real. O guia mudou minha vida!" – <i>Juliana F.</i></blockquote>
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
    </div>
  );
}
